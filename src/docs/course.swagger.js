/**
 * @swagger
 * tags:
 *   name: Course
 *   description: Course management APIs (Authentication currently disabled)
 */

/**
 * @swagger
 * /api/course:
 *   post:
 *     summary: Create a new course
 *     tags: [Course]
 *     description: Create a new course (Admin or Content Adder) (Authentication currently disabled)
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateCourseRequest'
 *     responses:
 *       201:
 *         description: Course created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CourseResponse'
 *       400:
 *         description: Bad request
 */

/**
 * @swagger
 * /api/course:
 *   get:
 *     summary: Get all courses
 *     tags: [Course]
 *     description: Retrieve all courses with optional filters
 *     parameters:
 *       - in: query
 *         name: categoryId
 *         schema:
 *           type: string
 *         description: Filter by category ID
 *         example: 64f1c2e4a12b3456789abcde
 *       - in: query
 *         name: level
 *         schema:
 *           type: string
 *           enum: [Beginner, Intermediate, Advanced]
 *         description: Filter by difficulty level
 *         example: Beginner
 *       - in: query
 *         name: language
 *         schema:
 *           type: string
 *         description: Filter by language
 *         example: English
 *       - in: query
 *         name: createdById
 *         schema:
 *           type: string
 *         description: Filter by creator ID
 *         example: 64f1c2e4a12b3456789abcdf
 *       - in: query
 *         name: isPublished
 *         schema:
 *           type: boolean
 *         description: Filter by published status
 *         example: true
 *     responses:
 *       200:
 *         description: Courses retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 code:
 *                   type: number
 *                   example: 200
 *                 message:
 *                   type: string
 *                   example: Courses retrieved successfully
 *                 content:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Course'
 */

/**
 * @swagger
 * /api/course/{id}:
 *   get:
 *     summary: Get course by ID
 *     tags: [Course]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Course ID
 *         example: 64f1c2e4a12b3456789abcde
 *     responses:
 *       200:
 *         description: Course retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CourseResponse'
 *       404:
 *         description: Course not found
 */

/**
 * @swagger
 * /api/course/{id}:
 *   put:
 *     summary: Update course
 *     tags: [Course]
 *     description: Update course details (Authentication currently disabled)
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Course ID
 *         example: 64f1c2e4a12b3456789abcde
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateCourseRequest'
 *     responses:
 *       200:
 *         description: Course updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CourseResponse'
 *       404:
 *         description: Course not found
 */

/**
 * @swagger
 * /api/course/{id}:
 *   delete:
 *     summary: Delete course
 *     tags: [Course]
 *     description: Delete a course (Authentication currently disabled)
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Course ID
 *         example: 64f1c2e4a12b3456789abcde
 *     responses:
 *       200:
 *         description: Course deleted successfully
 *       404:
 *         description: Course not found
 */

/**
 * @swagger
 * /api/course/{id}/publish:
 *   patch:
 *     summary: Publish course
 *     tags: [Course]
 *     description: Make a course publicly available (Authentication currently disabled)
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Course ID
 *         example: 64f1c2e4a12b3456789abcde
 *     responses:
 *       200:
 *         description: Course published successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CourseResponse'
 *       404:
 *         description: Course not found
 */

/**
 * @swagger
 * /api/course/{id}/unpublish:
 *   patch:
 *     summary: Unpublish course
 *     tags: [Course]
 *     description: Make a course unavailable (Authentication currently disabled)
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Course ID
 *         example: 64f1c2e4a12b3456789abcde
 *     responses:
 *       200:
 *         description: Course unpublished successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CourseResponse'
 *       404:
 *         description: Course not found
 */

/**
 * @swagger
 * /api/course/creator/{creatorId}:
 *   get:
 *     summary: Get courses by creator
 *     tags: [Course]
 *     description: Retrieve all courses created by a specific user
 *     parameters:
 *       - in: path
 *         name: creatorId
 *         required: true
 *         schema:
 *           type: string
 *         description: Creator/User ID
 *         example: 64f1c2e4a12b3456789abcde
 *     responses:
 *       200:
 *         description: Courses retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 code:
 *                   type: number
 *                   example: 200
 *                 message:
 *                   type: string
 *                   example: Courses retrieved successfully
 *                 content:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Course'
 */

/**
 * @swagger
 * /api/course/{id}/statistics:
 *   get:
 *     summary: Get course statistics
 *     tags: [Course]
 *     description: Get statistics for a specific course
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Course ID
 *         example: 64f1c2e4a12b3456789abcde
 *     responses:
 *       200:
 *         description: Course statistics retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CourseStatisticsResponse'
 *       404:
 *         description: Course not found
 */