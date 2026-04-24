import express from 'express';
import {
  createApplication,
  upload,
  getAllApplications,
  getApplicationById,
  updateApplicationStatus,
  deleteApplication,
  getApplicationStats,
  getAvailablePositions,
  getActivePositions
} from '../controllers/careerController.js';

const router = express.Router();

// Public routes
router.post('/career', upload.single('resume'), createApplication);
router.get('/positions', getAvailablePositions);
router.get('/positions/active', getActivePositions);

// Admin routes (add your auth middleware here)
router.get('/careers', getAllApplications);
router.get('/career/:id', getApplicationById);
router.put('/career/:id/status', updateApplicationStatus);
router.delete('/career/:id', deleteApplication);
router.get('/careers/stats', getApplicationStats);

export default router;