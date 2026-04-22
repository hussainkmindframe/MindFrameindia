/**
 * Express Application Setup
 */

import express from 'express';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import blogRoutes from './routes/blogRoutes.js';
import contactRoutes from './routes/contactRoutes.js';
import errorHandler from './middleware/errorHandler.js';
import ErrorResponse from './utils/errorResponse.js';

const app = express();

// Middleware
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api', contactRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ success: true, message: 'Server running' });
});

// 404 handler
app.use((req, res, next) => {
  next(new ErrorResponse(`Route ${req.originalUrl} not found`, 404));
});

// Error handler
app.use(errorHandler);

export default app;