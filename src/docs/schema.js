/**
 * @swagger
 * components:
 *   schemas:
 *
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
 *
 *     Category:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           example: 64f1c2e4a12b3456789abcde
 *         name:
 *           type: string
 *           example: At the Shop
 *         slug:
 *           type: string
 *           example: at-the-shop
 *         description:
 *           type: string
 *           example: Learn how to communicate in shops and markets
 *         icon:
 *           type: string
 *           example: https://your-cloud.com/icons/shop.png
 *         createdAt:
 *           type: string
 *           example: 2026-02-22T10:00:00.000Z
 *         updatedAt:
 *           type: string
 *           example: 2026-02-22T10:00:00.000Z
 *
 *     CreateCategoryRequest:
 *       type: object
 *       required:
 *         - name
 *         - slug
 *         - description
 *       properties:
 *         name:
 *           type: string
 *           example: At the Shop
 *         slug:
 *           type: string
 *           example: at-the-shop
 *         description:
 *           type: string
 *           example: Learn how to communicate in shops and markets
 *         icon:
 *           type: string
 *           example: https://your-cloud.com/icons/shop.png
 *
 *     UpdateCategoryRequest:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: At the Supermarket
 *         slug:
 *           type: string
 *           example: at-the-supermarket
 *         description:
 *           type: string
 *           example: Updated description
 *         icon:
 *           type: string
 *           example: https://your-cloud.com/icons/new-icon.png
 *
 *     CategoryResponse:
 *       type: object
 *       properties:
 *         code:
 *           type: number
 *           example: 201
 *         message:
 *           type: string
 *           example: Category created successfully
 *         content:
 *           $ref: '#/components/schemas/Category'
 *
 *     Listening:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           example: 64f1c2e4a12b3456789abcde
 *         lessonId:
 *           type: string
 *           example: 64f1c2e4a12b3456789abcaa
 *         audioUrl:
 *           type: string
 *           example: https://your-cloud.com/audio/buying-groceries-en.mp3
 *         slowAudioUrl:
 *           type: string
 *           example: https://your-cloud.com/audio/buying-groceries-en-slow.mp3
 *         transcript:
 *           type: string
 *           example: "Shopkeeper: Good morning! Can I help you? ..."
 *         createdAt:
 *           type: string
 *           example: 2026-02-22T10:00:00.000Z
 *         updatedAt:
 *           type: string
 *           example: 2026-02-22T10:00:00.000Z
 *
 *     CreateListeningRequest:
 *       type: object
 *       required:
 *         - audioUrl
 *         - transcript
 *       properties:
 *         audioUrl:
 *           type: string
 *           example: https://your-cloud.com/audio/buying-groceries-en.mp3
 *         slowAudioUrl:
 *           type: string
 *           example: https://your-cloud.com/audio/buying-groceries-en-slow.mp3
 *         transcript:
 *           type: string
 *           example: "Shopkeeper: Good morning! Can I help you? ..."
 *
 *     UpdateListeningRequest:
 *       type: object
 *       properties:
 *         audioUrl:
 *           type: string
 *         slowAudioUrl:
 *           type: string
 *         transcript:
 *           type: string
 *     Reading:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           example: 64f1c2e4a12b3456789abcde
 *         lessonId:
 *           type: string
 *           example: 64f1c2e4a12b3456789abcaa
 *         title:
 *           type: string
 *           example: Buying Groceries
 *         content:
 *           type: string
 *           example: |
 *             Anna goes to the supermarket to buy some milk and bread.
 *             She speaks to the shopkeeper and asks about prices.
 *         createdAt:
 *           type: string
 *           example: 2026-02-22T10:00:00.000Z
 *         updatedAt:
 *           type: string
 *           example: 2026-02-22T10:00:00.000Z
 *
 *     CreateReadingRequest:
 *       type: object
 *       required:
 *         - title
 *         - content
 *       properties:
 *         title:
 *           type: string
 *           example: Buying Groceries
 *         content:
 *           type: string
 *           example: |
 *             Anna goes to the supermarket to buy some milk and bread.
 *             She speaks to the shopkeeper and asks about prices.
 *
 *     UpdateReadingRequest:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *         content:
 *           type: string
 *
 *
 *
 *     Video:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           example: 64f1c2e4a12b3456789abcde
 *         lessonId:
 *           type: string
 *           example: 64f1c2e4a12b3456789abcaa
 *         title:
 *           type: string
 *           example: How to Buy Groceries in English
 *         videoUrl:
 *           type: string
 *           example: https://your-cloud.com/videos/buying-groceries.mp4
 *         description:
 *           type: string
 *           example: A short lesson explaining how to speak in a supermarket.
 *         duration:
 *           type: number
 *           example: 180
 *         createdAt:
 *           type: string
 *           example: 2026-02-22T10:00:00.000Z
 *         updatedAt:
 *           type: string
 *           example: 2026-02-22T10:00:00.000Z
 *
 *     CreateVideoRequest:
 *       type: object
 *       required:
 *         - title
 *         - videoUrl
 *       properties:
 *         title:
 *           type: string
 *           example: How to Buy Groceries in English
 *         videoUrl:
 *           type: string
 *           example: https://your-cloud.com/videos/buying-groceries.mp4
 *         description:
 *           type: string
 *           example: A short lesson explaining how to speak in a supermarket.
 *         duration:
 *           type: number
 *           example: 180
 *
 *     UpdateVideoRequest:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *         videoUrl:
 *           type: string
 *         description:
 *           type: string
 *         duration:
 *           type: number
 *
 *
 *
 *     Vocabulary:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           example: 64f1c2e4a12b3456789abcde
 *         lessonId:
 *           type: string
 *           example: 64f1c2e4a12b3456789abcaa
 *         words:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/VocabularyWord'
 *         createdAt:
 *           type: string
 *           example: 2026-02-22T10:00:00.000Z
 *         updatedAt:
 *           type: string
 *           example: 2026-02-22T10:00:00.000Z
 *
 *     VocabularyWord:
 *       type: object
 *       properties:
 *         term:
 *           type: string
 *           example: aisle
 *         meaning:
 *           type: string
 *           example: A passage between rows of shelves in a supermarket.
 *         example:
 *           type: string
 *           example: The bread is in aisle two.
 *
 *     CreateVocabularyRequest:
 *       type: object
 *       required:
 *         - words
 *       properties:
 *         words:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/VocabularyWord'
 *
 *     UpdateVocabularyRequest:
 *       type: object
 *       properties:
 *         words:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/VocabularyWord'
 *
 *
 *     Lesson:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *         categoryId:
 *           type: string
 *         title:
 *           type: string
 *           example: Buying Groceries
 *         description:
 *           type: string
 *           example: Learn how to speak in a supermarket.
 *         difficulty:
 *           type: string
 *           example: beginner
 *         estimatedMinutes:
 *           type: number
 *           example: 15
 *         order:
 *           type: number
 *           example: 1
 *         thumbnail:
 *           type: string
 *           example: https://your-cloud.com/thumbnails/grocery.png
 *         reading:
 *           type: object
 *         listening:
 *           type: object
 *         vocabulary:
 *           type: object
 *         video:
 *           type: object
 *         isPublished:
 *           type: boolean
 *           example: false
 *         createdAt:
 *           type: string
 *         updatedAt:
 *           type: string
 *
 *     CreateLessonRequest:
 *       type: object
 *       required:
 *         - categoryId
 *         - title
 *         - description
 *         - difficulty
 *         - estimatedMinutes
 *         - order
 *       properties:
 *         categoryId:
 *           type: string
 *         title:
 *           type: string
 *         description:
 *           type: string
 *         difficulty:
 *           type: string
 *           enum: [beginner, intermediate, advanced]
 *         estimatedMinutes:
 *           type: number
 *         order:
 *           type: number
 *         thumbnail:
 *           type: string
 *
 *     UpdateLessonRequest:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *         description:
 *           type: string
 *         difficulty:
 *           type: string
 *         estimatedMinutes:
 *           type: number
 *         order:
 *           type: number
 *         thumbnail:
 *           type: string
 */
