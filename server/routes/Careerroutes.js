import express from 'express';
import {
  createApplication,
  upload,
  getAllApplications,
  getApplicationById,
  updateApplicationStatus,
  deleteApplication,
  getApplicationStats,
} from '../controllers/careerController.js';

const router = express.Router();

// Public routes
router.post('/career', upload.single('resume'), createApplication);

// Admin routes
router.get('/careers', getAllApplications);
router.get('/career/:id', getApplicationById);
router.put('/career/:id/status', updateApplicationStatus);
router.delete('/career/:id', deleteApplication);
router.get('/careers/stats', getApplicationStats);

export default router;

