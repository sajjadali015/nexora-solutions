import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import path from 'path';

import contactRoutes from './routes/contact.js';
import careerRoutes from './routes/careers.js';
import authRoutes from './routes/auth.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Security & Utility Middleware
app.use(helmet());
app.use(morgan('dev'));
app.use(cors({
  origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve Resumes & Uploads Statically
app.use('/uploads', express.static(path.resolve('uploads')));

// Root Endpoint
app.get('/', (req, res) => {
  res.json({
    name: 'Nexora Solutions Core API',
    status: 'ACTIVE',
    version: '1.0.0',
    endpoints: {
      health: '/api/health',
      authLogin: '/api/auth/login',
      contact: '/api/contact',
      careersApply: '/api/careers/apply'
    }
  });
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/careers', careerRoutes);

// Health Endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'HEALTHY',
    service: 'Nexora Solutions Backend Engine',
    timestamp: new Date().toISOString()
  });
});

// Global 404 Catch-All
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.listen(PORT, () => {
  console.log(`[NEXORA CORE API] Server active at http://localhost:${PORT}`);
});app.use(cors({
  origin: true,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));