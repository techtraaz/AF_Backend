/**
 * @fileoverview Express routes for DigitalContent (Digital Library) module.
 * Connects middleware and controllers for upload, retrieval, update, and deletion.
 */

import express from 'express';
import { digitalContentUploadMiddleware } from '../../middleware/content/uploadMiddleware.js';
import { validateDigitalContent } from '../../middleware/content/contentValidationMiddleware.js';
import * as contentController from '../../controller/content/contentController.js';

const router = express.Router();

// POST /api/digital-library/upload
router.post(
  '/upload',
  digitalContentUploadMiddleware, 
  validateDigitalContent,         
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
  digitalContentUploadMiddleware,
  validateDigitalContent,         
  contentController.updateContent
);

// DELETE /api/digital-library/:id
router.delete(
  '/:id',
  contentController.deleteContent
);

export default router;