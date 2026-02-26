/**
 * @swagger
 * tags:
 *   name: Quiz - Questions
 *   description: Question management APIs (Authentication currently disabled)
 */

/**
 * @swagger
 * /api/quiz/questions:
 *   post:
 *     summary: Create a question
 *     tags: [Quiz - Questions]
 *     description: Create a question with optional options (Authentication currently disabled)
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateQuestionRequest'
 *     responses:
 *       201:
 *         description: Question created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/QuestionResponse'
 *       400:
 *         description: Bad request
 *       404:
 *         description: Quiz not found
 */

/**
 * @swagger
 * /api/quiz/questions/quiz/{quizId}:
 *   get:
 *     summary: Get all questions for a quiz
 *     tags: [Quiz - Questions]
 *     parameters:
 *       - in: path
 *         name: quizId
 *         required: true
 *         schema:
 *           type: string
 *         description: Quiz ID
 *         example: 64f1c2e4a12b3456789abcde
 *     responses:
 *       200:
 *         description: Questions retrieved successfully
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
 *                   example: Questions retrieved successfully
 *                 content:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Question'
 */

/**
 * @swagger
 * /api/quiz/questions/{id}:
 *   get:
 *     summary: Get question by ID with options
 *     tags: [Quiz - Questions]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Question ID
 *         example: 64f1c2e4a12b3456789abcde
 *     responses:
 *       200:
 *         description: Question retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/QuestionWithOptionsResponse'
 *       404:
 *         description: Question not found
 */

/**
 * @swagger
 * /api/quiz/questions/{id}:
 *   put:
 *     summary: Update question
 *     tags: [Quiz - Questions]
 *     description: Update question details (Authentication currently disabled)
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Question ID
 *         example: 64f1c2e4a12b3456789abcde
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateQuestionRequest'
 *     responses:
 *       200:
 *         description: Question updated successfully
 *       404:
 *         description: Question not found
 */

/**
 * @swagger
 * /api/quiz/questions/{id}:
 *   delete:
 *     summary: Delete question
 *     tags: [Quiz - Questions]
 *     description: Delete question and all associated options (Authentication currently disabled)
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Question ID
 *         example: 64f1c2e4a12b3456789abcde
 *     responses:
 *       200:
 *         description: Question deleted successfully
 *       404:
 *         description: Question not found
 */

/**
 * @swagger
 * /api/quiz/questions/quiz/{quizId}/reorder:
 *   patch:
 *     summary: Reorder questions within a quiz
 *     tags: [Quiz - Questions]
 *     description: Change the order of questions (Authentication currently disabled)
 *     parameters:
 *       - in: path
 *         name: quizId
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
 *             $ref: '#/components/schemas/ReorderQuestionsRequest'
 *     responses:
 *       200:
 *         description: Questions reordered successfully
 *       400:
 *         description: Bad request
 */