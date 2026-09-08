import { Router } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import prisma from '../config/prisma.js';

const router = Router();
const JWT_SECRET = process.env.JWT_SECRET || 'nexora_super_secure_jwt_secret_key_2026';

// POST /api/auth/login - Admin Staff Authentication
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required.' });
    }

    const staff = await prisma.staffUser.findUnique({
      where: { email }
    });

    if (!staff) {
      return res.status(401).json({ error: 'Invalid staff credentials.' });
    }

    const isMatch = await bcrypt.compare(password, staff.password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid staff credentials.' });
    }

    // Generate Bearer Token (Expires in 24 hours)
    const token = jwt.sign(
      { id: staff.id, username: staff.username, role: staff.role },
      JWT_SECRET,
      { expiresIn: '24h' }
    );

    return res.json({
      success: true,
      token,
      user: {
        id: staff.id,
        username: staff.username,
        email: staff.email,
        role: staff.role
      }
    });
  } catch (error) {
    console.error('Auth Login Error:', error);
    return res.status(500).json({ error: 'Internal authentication failure.' });
  }
});

export default router;