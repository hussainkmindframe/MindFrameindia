/**
 * Career Routes
 * Handles all job application related endpoints
 */

import express from 'express';
import {
  createApplication,
  getAllApplications,
  getApplicationById,
  updateApplicationStatus,
  deleteApplication,
  getApplicationStats,
  upload,
} from '../controllers/careerController.js';

const router = express.Router();

/**
 * @route   POST /api/career
 * @desc    Submit job application (with resume upload)
 * @access  Public
 */
router.post('/career', upload.single('resume'), createApplication);

/**
 * @route   GET /api/careers
 * @desc    Get all applications (Admin only)
 * @access  Private/Admin
 */
router.get('/careers', getAllApplications);

/**
 * @route   GET /api/careers/stats
 * @desc    Get application statistics (Admin only)
 * @access  Private/Admin
 */
router.get('/careers/stats', getApplicationStats);

/**
 * @route   GET /api/career/:id
 * @desc    Get single application (Admin only)
 * @access  Private/Admin
 */
router.get('/career/:id', getApplicationById);

/**
 * @route   PUT /api/career/:id/status
 * @desc    Update application status (Admin only)
 * @access  Private/Admin
 */
router.put('/career/:id/status', updateApplicationStatus);

/**
 * @route   DELETE /api/career/:id
 * @desc    Delete application (Admin only)
 * @access  Private/Admin
 */
router.delete('/career/:id', deleteApplication);

export default router;