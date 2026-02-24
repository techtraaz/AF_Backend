/**
 * @fileoverview Service layer for DigitalContent (Digital Library) module.
 * Handles database operations for digital content.
 */

import { DigitalContent } from '../models/contentModel.js';

/**
 * Create and save a new DigitalContent entry.
 * @param {Object} contentData - Data for the new digital content.
 * @returns {Promise<Object>} The created DigitalContent document.
 */
export const createContent = async (contentData) => {
  const content = new DigitalContent(contentData);
  return await content.save();
};

/**
 * Retrieve all DigitalContent entries matching the filter.
 * Sorted by createdAt in descending order.
 * @param {Object} filter - MongoDB filter object.
 * @returns {Promise<Array>} Array of DigitalContent documents.
 */
export const getAllContent = async (filter = {}) => {
  return await DigitalContent.find(filter).sort({ createdAt: -1 });
};