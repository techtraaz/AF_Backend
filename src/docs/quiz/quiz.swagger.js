/**
 * @swagger
 * tags:
 *   name: Quiz - Quizzes
 *   description: Quiz CRUD operations (Authentication currently disabled)
 */

/**
 * @swagger
 * /api/quiz/quizzes:
 *   post:
 *     summary: Create a new quiz
 *     tags: [Quiz - Quizzes]
 *     description: Create a quiz for either a course or a lesson (Authentication currently disabled)
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateQuizRequest'
 *     responses:
 *       201:
 *         description: Quiz created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/QuizResponse'
 *       400:
 *         description: Bad request - Quiz must belong to either course or lesson
 */

/**
 * @swagger
 * /api/quiz/quizzes:
 *   get:
 *     summary: Get all quizzes
 *     tags: [Quiz - Quizzes]
 *     description: Retrieve all quizzes with optional filters
 *     parameters:
 *       - in: query
 *         name: courseId
 *         schema:
 *           type: string
 *         description: Filter by course ID
 *         example: 64f1c2e4a12b3456789abcde
 *       - in: query
 *         name: lessonId
 *         schema:
 *           type: string
 *         description: Filter by lesson ID
 *         example: 64f1c2e4a12b3456789abcdf
 *       - in: query
 *         name: isPublished
 *         schema:
 *           type: boolean
 *         description: Filter by published status
 *         example: true
 *     responses:
 *       200:
 *         description: Quizzes retrieved successfully
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
 *                   example: Quizzes retrieved successfully
 *                 content:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Quiz'
 */

/**
 * @swagger
 * /api/quiz/quizzes/{id}:
 *   get:
 *     summary: Get quiz by ID
 *     tags: [Quiz - Quizzes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Quiz ID
 *         example: 64f1c2e4a12b3456789abcde
 *     responses:
 *       200:
 *         description: Quiz retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/QuizResponse'
 *       404:
 *         description: Quiz not found
 */

/**
 * @swagger
 * /api/quiz/quizzes/{id}:
 *   put:
 *     summary: Update quiz
 *     tags: [Quiz - Quizzes]
 *     description: Update quiz details (Authentication currently disabled)
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Quiz ID
 *         example: 64f1c2e4a12b3456789abcde
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateQuizRequest'
 *     responses:
 *       200:
 *         description: Quiz updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/QuizResponse'
 *       404:
 *         description: Quiz not found
 */

/**
 * @swagger
 * /api/quiz/quizzes/{id}:
 *   delete:
 *     summary: Delete quiz
 *     tags: [Quiz - Quizzes]
 *     description: Delete quiz and all associated questions and options (Authentication currently disabled)
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Quiz ID
 *         example: 64f1c2e4a12b3456789abcde
 *     responses:
 *       200:
 *         description: Quiz deleted successfully
 *       404:
 *         description: Quiz not found
 */

/**
 * @swagger
 * /api/quiz/quizzes/{id}/publish:
 *   patch:
 *     summary: Publish quiz
 *     tags: [Quiz - Quizzes]
 *     description: Publish a quiz (requires at least one question) (Authentication currently disabled)
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Quiz ID
 *         example: 64f1c2e4a12b3456789abcde
 *     responses:
 *       200:
 *         description: Quiz published successfully
 *       400:
 *         description: Cannot publish quiz without questions
 *       404:
 *         description: Quiz not found
 */

/**
 * @swagger
 * /api/quiz/quizzes/{id}/unpublish:
 *   patch:
 *     summary: Unpublish quiz
 *     tags: [Quiz - Quizzes]
 *     description: Unpublish a quiz (Authentication currently disabled)
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Quiz ID
 *         example: 64f1c2e4a12b3456789abcde
 *     responses:
 *       200:
 *         description: Quiz unpublished successfully
 *       404:
 *         description: Quiz not found
 */