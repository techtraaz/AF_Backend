/**
 * @fileoverview Controller for DigitalContent (Digital Library) module.
 * Handles creation, retrieval, updating, and deletion of digital library resources.
 */

import * as contentService from '../../service/content/contentService.js';
import { v2 as cloudinary } from 'cloudinary';

/**
 * Create a new DigitalContent entry.
 */
export const createContent = async (req, res, next) => {
  try {
    const { title, description, category, contentType } = req.body;

    const fileUrl = req.file.path || req.file.secure_url;
    const cloudinaryId = req.file.filename || req.file.public_id;
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
 * Update DigitalContent entry (Title, Description, Category, ContentType, and File)
 */
export const updateContent = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updateData = { ...req.body };

    // අලුතින් ෆයිල් එකක් අප්ලෝඩ් කරලා තියෙනවා නම්...
    if (req.file) {
      const existingContent = await contentService.getContentById(id);
      
      if (!existingContent) {
        return res.status(404).json({
          success: false,
          message: 'Content not found.',
        });
      }

      // පරණ ෆයිල් එක Cloudinary එකෙන් මකා දැමීම
      if (existingContent.cloudinaryId) {
        let resourceType = 'image';
        if (existingContent.contentType === 'video' || existingContent.contentType === 'audio') {
          resourceType = 'video';
        } else if (existingContent.contentType === 'document') {
          resourceType = 'raw';
        }
        await cloudinary.uploader.destroy(existingContent.cloudinaryId, { resource_type: resourceType }).catch(err => console.error(err));
      }

      updateData.fileUrl = req.file.path || req.file.secure_url;
      updateData.cloudinaryId = req.file.filename || req.file.public_id;
    }

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
 */
export const deleteContent = async (req, res, next) => {
  try {
    const { id } = req.params;

    const content = await contentService.getContentById(id);
    if (!content) {
      return res.status(404).json({
        success: false,
        message: 'Content not found.',
      });
    }

    if (content.cloudinaryId) {
      let resourceType = 'image';
      if (content.contentType === 'video' || content.contentType === 'audio') {
        resourceType = 'video';
      } else if (content.contentType === 'document') {
        resourceType = 'raw';
      }
      await cloudinary.uploader.destroy(content.cloudinaryId, { resource_type: resourceType }).catch(err => console.error(err));
    }

    await contentService.deleteContentById(id);

    return res.status(200).json({
      success: true,
      message: 'Digital content and associated files deleted successfully.',
    });
  } catch (error) {
    next(error);
  }
};