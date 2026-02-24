/**
 * @fileoverview Express routes for DigitalContent (Digital Library) module.
 * Connects middleware and controllers for upload and retrieval.
 */

import express from 'express';
import { digitalContentUploadMiddleware } from '../middleware/uploadMiddleware.js';
import * as contentController from '../controller/contentController.js';

const router = express.Router();

// POST /api/digital-library/upload
router.post(
  '/upload',
  digitalContentUploadMiddleware,
  contentController.createContent
);

// GET /api/digital-library/
router.get(
  '/',
  contentController.getAllContent
);


// PUT /api/digital-library/:id
router.put(
  '/:id',
  contentController.updateContent
);

// DELETE /api/digital-library/:id
router.delete(
  '/:id',
  contentController.deleteContent
);

export default router;