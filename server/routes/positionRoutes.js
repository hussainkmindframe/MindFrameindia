// routes/positionRoutes.js
import express from 'express';
import {
  createPosition,
  getAllPositions,
  getActivePositions,
  getPositionById,
  updatePosition,
  deletePosition,
  togglePositionStatus,
  getPositionStats,
  getFeaturedPositions,
  bulkDeletePositions,
  updateApplicationCount,
} from '../controllers/positionController.js';
import { requireAdmin } from '../middleware/auth.js';

const router = express.Router();

// Public routes — no auth
router.get('/positions/active', getActivePositions);
router.get('/positions/featured', getFeaturedPositions);
router.get('/position/:id', getPositionById);
router.patch('/position/:id/increment-applications', updateApplicationCount);

// Admin routes — requireAdmin (same as blog routes)
router.get('/positions/stats', requireAdmin, getPositionStats);
router.get('/positions', requireAdmin, getAllPositions);
router.post('/positions', requireAdmin, createPosition);
router.post('/positions/bulk-delete', requireAdmin, bulkDeletePositions);
router.put('/position/:id', requireAdmin, updatePosition);
router.patch('/position/:id/toggle', requireAdmin, togglePositionStatus);
router.delete('/position/:id', requireAdmin, deletePosition);

export default router;