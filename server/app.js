/**
 * Express Application Setup
 * Configures middleware, routes, and error handling
 */

import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import authRoutes from './routes/authRoutes.js';
import blogRoutes from './routes/blogRoutes.js';
import errorHandler from './middleware/errorHandler.js';
import ErrorResponse from './utils/errorResponse.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

/**
 * Middleware
 */
// CORS configuration
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
    credentials: true,
  })
);

// Body parser
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

// Serve static files from uploads folder
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

/**
 * Routes
 */
app.use('/api/auth', authRoutes);
app.use('/api/blogs', blogRoutes);

/**
 * Health check endpoint
 */
app.get('/api/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Server is running',
    timestamp: new Date().toISOString(),
  });
});

/**
 * 404 Not Found Handler
 */
app.use((req, res, next) => {
  next(new ErrorResponse(`Route ${req.originalUrl} not found`, 404));
});

/**
 * Global Error Handler Middleware
 * Must be last middleware
 */
app.use(errorHandler);

export default app;
