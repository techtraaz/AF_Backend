/**
 * @fileoverview Controller for DigitalContent (Digital Library) module.
 * Handles creation and retrieval of digital library resources.
 * Follows project conventions for response structure and error handling.
 */

import * as contentService from '../service/contentService.js';

/**
 * Create a new DigitalContent entry.
 * Expects file upload handled by upload middleware.
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 * @param {Function} next 
 */
export const createContent = async (req, res, next) => {
  try {
    const { title, description, category, contentType } = req.body;

    // Validate required fields
    if (!title || !description || !category || !contentType) {
      return res.status(400).json({
        success: false,
        message: 'All fields (title, description, category, contentType) are required.',
      });
    }

    // File upload handled by middleware
    if (!req.file || !req.file.path || !req.file.filename) {
      return res.status(400).json({
        success: false,
        message: 'File upload failed or file is missing.',
      });
    }

    const fileUrl = req.file.path || req.file.secure_url;
    const cloudinaryId = req.file.filename || req.file.public_id;

    // uploaderId can be null for now
    const uploaderId = req.user ? req.user._id : null;

    const contentData = {
      uploaderId,
      title,
      description,
      category,
      contentType,
      fileUrl,
      cloudinaryId,
    };

    const newContent = await contentService.createContent(contentData);

    return res.status(201).json({
      success: true,
      data: newContent,
      message: 'Digital content created successfully.',
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get all DigitalContent entries, with optional category filter.
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 * @param {Function} next 
 */
export const getAllContent = async (req, res, next) => {
  try {
    const { category } = req.query;
    const filter = {};

    if (category) {
      filter.category = category;
    }

    const contents = await contentService.getAllContent(filter);

    return res.status(200).json({
      success: true,
      data: contents,
    });
  } catch (error) {
    next(error);
  }
};