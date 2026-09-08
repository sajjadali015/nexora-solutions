import { Router } from 'express';
import { z } from 'zod';
import prisma from '../config/prisma.js';
import { requireStaffAuth } from '../middleware/authGuard.js';

const router = Router();

const contactSchema = z.object({
  name: z.string().min(2, 'Name is too short'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.string().min(2, 'Please select a service'),
  message: z.string().min(10, 'Message must be at least 10 characters')
});

// POST /api/contact - Public submission endpoint
router.post('/', async (req, res) => {
  try {
    const validatedData = contactSchema.parse(req.body);
    const inquiry = await prisma.contactInquiry.create({
      data: validatedData
    });

    return res.status(201).json({
      success: true,
      message: 'Inquiry received successfully.',
      id: inquiry.id
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: error.errors[0].message });
    }
    console.error('Contact Submission Error:', error);
    return res.status(500).json({ error: 'Failed to process inquiry.' });
  }
});

// GET /api/contact - Protected: Retrieve inquiries for Admin Dashboard
router.get('/', requireStaffAuth, async (req, res) => {
  try {
    const inquiries = await prisma.contactInquiry.findMany({
      orderBy: { createdAt: 'desc' }
    });
    return res.json({ inquiries });
  } catch (error) {
    console.error('Fetch Inquiries Error:', error);
    return res.status(500).json({ error: 'Failed to retrieve inquiries.' });
  }
});

// PATCH /api/contact/:id/status - Protected: Mark as read/resolved
router.patch('/:id/status', requireStaffAuth, async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const updated = await prisma.contactInquiry.update({
      where: { id },
      data: { status }
    });

    return res.json({ success: true, inquiry: updated });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to update status.' });
  }
});
// DELETE /api/contact/:id - Delete an inquiry
router.delete('/:id', requireStaffAuth, async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.contactInquiry.delete({
      where: { id }
    });

    return res.json({ success: true, message: 'Inquiry removed successfully.' });
  } catch (error) {
    console.error('Delete Inquiry Error:', error);
    return res.status(500).json({ error: 'Failed to delete inquiry.' });
  }
});
export default router;