/**
 * @swagger
 * tags:
 *   name: Quiz - Attempts
 *   description: Quiz attempt and submission APIs (Authentication currently disabled)
 */

/**
 * @swagger
 * /api/quiz/attempts:
 *   post:
 *     summary: Submit quiz attempt
 *     tags: [Quiz - Attempts]
 *     description: Submit answers and get scored (Authentication currently disabled)
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SubmitQuizAttemptRequest'
 *     responses:
 *       201:
 *         description: Quiz attempt submitted successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/QuizAttemptResponse'
 *       400:
 *         description: Bad request - Quiz not published or max attempts reached
 *       404:
 *         description: Quiz not found
 */

/**
 * @swagger
 * /api/quiz/attempts/{id}:
 *   get:
 *     summary: Get attempt by ID with responses
 *     tags: [Quiz - Attempts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Attempt ID
 *         example: 64f1c2e4a12b3456789abcde
 *     responses:
 *       200:
 *         description: Attempt retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AttemptWithResponsesResponse'
 *       404:
 *         description: Attempt not found
 */

/**
 * @swagger
 * /api/quiz/attempts/user/{refugeeId}:
 *   get:
 *     summary: Get all attempts for a user
 *     tags: [Quiz - Attempts]
 *     parameters:
 *       - in: path
 *         name: refugeeId
 *         required: true
 *         schema:
 *           type: string
 *         description: User/Refugee ID
 *         example: 64f1c2e4a12b3456789abcde
 *       - in: query
 *         name: quizId
 *         schema:
 *           type: string
 *         description: Optional filter by quiz ID
 *         example: 64f1c2e4a12b3456789abcdf
 *     responses:
 *       200:
 *         description: User attempts retrieved successfully
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
 *                   example: User attempts retrieved successfully
 *                 content:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/QuizAttempt'
 */

/**
 * @swagger
 * /api/quiz/attempts/quiz/{quizId}/statistics:
 *   get:
 *     summary: Get quiz statistics
 *     tags: [Quiz - Attempts]
 *     description: Get attempt statistics for a quiz
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
 *         description: Quiz statistics retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/QuizStatisticsResponse'
 */