/**
 * @swagger
 * components:
 *   schemas:
 *     SignupRequest:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           example: user@example.com
 *         password:
 *           type: string
 *           example: 123456
 *
 *     LoginRequest:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           example: user@example.com
 *         password:
 *           type: string
 *           example: 123456
 *
 *     AuthResponse:
 *       type: object
 *       properties:
 *         code:
 *           type: number
 *           example: 200
 *         message:
 *           type: string
 *           example: Login successful
 *         content:
 *           type: object
 */
