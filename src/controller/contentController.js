/**
 * @fileoverview Controller for DigitalContent (Digital Library) module.
 * Handles creation and retrieval of digital library resources.
 * Follows project conventions for response structure and error handling.
 */
import { v2 as cloudinary } from 'cloudinary';
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


/**
 * Update DigitalContent entry (Title, Description, Category, etc.)
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 * @param {Function} next 
 */
export const updateContent = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const updatedContent = await contentService.updateContentById(id, updateData);

    if (!updatedContent) {
      return res.status(404).json({
        success: false,
        message: 'Content not found or already deleted.',
      });
    }

    return res.status(200).json({
      success: true,
      data: updatedContent,
      message: 'Digital content updated successfully.',
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Delete a DigitalContent entry from Database AND Cloudinary.
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 * @param {Function} next 
 */
export const deleteContent = async (req, res, next) => {
  try {
    const { id } = req.params;

    // 1. Find the content first to get the Cloudinary ID
    const content = await contentService.getContentById(id);
    if (!content) {
      return res.status(404).json({
        success: false,
        message: 'Content not found.',
      });
    }

    // 2. Delete the file from Cloudinary storage
    if (content.cloudinaryId) {
      let resourceType = 'image';
      if (content.contentType === 'video' || content.contentType === 'audio') {
        resourceType = 'video';
      } else if (content.contentType === 'document') {
        resourceType = 'raw';
      }
      await cloudinary.uploader.destroy(content.cloudinaryId, { resource_type: resourceType });
    }

    // 3. Delete the record from MongoDB
    await contentService.deleteContentById(id);

    return res.status(200).json({
      success: true,
      message: 'Digital content and associated files deleted successfully.',
    });
  } catch (error) {
    next(error);
  }
};