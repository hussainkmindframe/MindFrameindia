/**
 * Server Entry Point
 * Initializes the Express server and connects to MongoDB
 */

import dotenv from 'dotenv';
import app from './app.js';
import connectDB from './config/database.js';

// Load environment variables
dotenv.config();

// Connect to database
connectDB();

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`
╔════════════════════════════════════════╗
║  Mindframe Agency Server               ║
║  ✓ Server running on port ${PORT}       ║
║  ✓ Environment: ${process.env.NODE_ENV}  ║
╚════════════════════════════════════════╝
  `);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  console.error('UNHANDLED REJECTION:', err);
  server.close(() => process.exit(1));
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM signal received: closing HTTP server');
  server.close(() => {
    console.log('HTTP server closed');
    process.exit(0);
  });
});

export default server;
