import { Router } from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import prisma from '../config/prisma.js';
import { requireStaffAuth } from '../middleware/authGuard.js';

const router = Router();

const uploadDir = path.resolve('uploads/resumes');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    const sanitizedName = file.originalname.replace(/[^a-zA-Z0-9.-]/g, '_');
    cb(null, `${uniqueSuffix}-${sanitizedName}`);
  }
});

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const allowedExtensions = ['.pdf', '.doc', '.docx'];
    const ext = path.extname(file.originalname).toLowerCase();
    if (allowedExtensions.includes(ext)) {
      cb(null, true);
    } else {
      cb(new Error('Only .pdf, .doc, and .docx formats are permitted.'));
    }
  }
});

// POST /api/careers/apply - Public candidate application
router.post('/apply', upload.single('resume'), async (req, res) => {
  try {
    const { jobTitle, applicantName, applicantEmail, applicantPhone } = req.body;

    if (!jobTitle || !applicantName || !applicantEmail || !applicantPhone) {
      return res.status(400).json({ error: 'All personal and role fields are required.' });
    }

    const resumeUrl = req.file ? `/uploads/resumes/${req.file.filename}` : null;

    const application = await prisma.jobApplication.create({
      data: {
        jobTitle,
        applicantName,
        applicantEmail,
        applicantPhone,
        resumeUrl
      }
    });

    return res.status(201).json({
      success: true,
      message: 'Application received successfully.',
      id: application.id
    });
  } catch (error) {
    console.error('Career Application Error:', error);
    return res.status(500).json({ error: error.message || 'Failed to submit application.' });
  }
});

// GET /api/careers/applications - Protected: Retrieve submitted applications
router.get('/applications', requireStaffAuth, async (req, res) => {
  try {
    const applications = await prisma.jobApplication.findMany({
      orderBy: { createdAt: 'desc' }
    });
    return res.json({ applications });
  } catch (error) {
    console.error('Fetch Applications Error:', error);
    return res.status(500).json({ error: 'Failed to retrieve applications.' });
  }
});
// PATCH /api/careers/applications/:id/status - Update candidate review status
router.patch('/applications/:id/status', requireStaffAuth, async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const updated = await prisma.jobApplication.update({
      where: { id },
      data: { status }
    });

    return res.json({ success: true, application: updated });
  } catch (error) {
    console.error('Update Application Status Error:', error);
    return res.status(500).json({ error: 'Failed to update application status.' });
  }
});

// DELETE /api/careers/applications/:id - Delete an application
router.delete('/applications/:id', requireStaffAuth, async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.jobApplication.delete({
      where: { id }
    });

    return res.json({ success: true, message: 'Application deleted successfully.' });
  } catch (error) {
    console.error('Delete Application Error:', error);
    return res.status(500).json({ error: 'Failed to delete application.' });
  }
});

export default router;