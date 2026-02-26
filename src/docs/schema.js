/**
 * @swagger
 * components:
 *   securitySchemes:
 *     BearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 * 
 *   schemas:
 *  # ============ COMMON SCHEMAS ============
 *
 *     ApiResponse:
 *       type: object
 *       properties:
 *         code:
 *           type: integer
 *           example: 200
 *         message:
 *           type: string
 *           example: Success
 *         content:
 *           type: object
 *           nullable: true
 *
 *  # ============ AUTH SCHEMAS ============
 *
 *     SignupRequest:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           format: email
 *           example: user@example.com
 *         password:
 *           type: string
 *           format: password
 *           example: StrongPassword123
 *
 *     LoginRequest:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           format: email
 *           example: user@example.com
 *         password:
 *           type: string
 *           format: password
 *           example: StrongPassword123
 *
 *     UserResponse:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           example: 65f1a2b3c4d5e6f7a8b9c0d1
 *         email:
 *           type: string
 *           format: email
 *           example: user@example.com
 *         role:
 *           type: string
 *           enum: [REFUGEE, CONTENT_CONTRIBUTOR, ADMIN]
 *           example: REFUGEE
 *         status:
 *           type: string
 *           enum: [ACTIVE, PENDING, REJECTED]
 *           example: ACTIVE
 *         isActive:
 *           type: boolean
 *           example: true
 *         createdAt:
 *           type: string
 *           format: date-time
 *           example: 2026-02-22T10:00:00.000Z
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           example: 2026-02-22T10:00:00.000Z
 *
 *     LoginResponse:
 *       type: object
 *       properties:
 *         user:
 *           $ref: '#/components/schemas/UserResponse'
 *         token:
 *           type: string
 *           example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
 *
 *  # ============ PROFILE SCHEMAS ============
 *
 *     RefugeeProfile:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           example: 65f1a2b3c4d5e6f7a8b9c0d1
 *         userId:
 *           type: string
 *           example: 65f1a2b3c4d5e6f7a8b9c0d2
 *         fullName:
 *           type: string
 *           example: John Doe
 *         dateOfBirth:
 *           type: string
 *           format: date
 *           example: 1990-05-15
 *         nationality:
 *           type: string
 *           example: Syrian
 *         preferredLanguage:
 *           type: string
 *           example: Arabic
 *         createdAt:
 *           type: string
 *           format: date-time
 *           example: 2026-02-22T10:00:00.000Z
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           example: 2026-02-22T10:00:00.000Z
 *
 *     CreateRefugeeProfileRequest:
 *       type: object
 *       required:
 *         - fullName
 *       properties:
 *         fullName:
 *           type: string
 *           example: John Doe
 *         dateOfBirth:
 *           type: string
 *           format: date
 *           example: 1990-05-15
 *         nationality:
 *           type: string
 *           example: Syrian
 *         preferredLanguage:
 *           type: string
 *           example: Arabic
 *
 *     UpdateRefugeeProfileRequest:
 *       type: object
 *       properties:
 *         fullName:
 *           type: string
 *           example: John Doe Updated
 *         dateOfBirth:
 *           type: string
 *           format: date
 *           example: 1990-05-15
 *         nationality:
 *           type: string
 *           example: Syrian
 *         preferredLanguage:
 *           type: string
 *           example: French
 *
 *     ContentContributorProfile:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           example: 65f1a2b3c4d5e6f7a8b9c0d1
 *         userId:
 *           type: string
 *           example: 65f1a2b3c4d5e6f7a8b9c0d2
 *         fullName:
 *           type: string
 *           example: Jane Smith
 *         bio:
 *           type: string
 *           example: Experienced language teacher with 10 years of teaching English.
 *         expertise:
 *           type: array
 *           items:
 *             type: string
 *           example: [English, Grammar, Vocabulary]
 *         createdAt:
 *           type: string
 *           format: date-time
 *           example: 2026-02-22T10:00:00.000Z
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           example: 2026-02-22T10:00:00.000Z
 *
 *     CreateContributorProfileRequest:
 *       type: object
 *       required:
 *         - fullName
 *       properties:
 *         fullName:
 *           type: string
 *           example: Jane Smith
 *         bio:
 *           type: string
 *           example: Experienced language teacher with 10 years of teaching English.
 *         expertise:
 *           type: array
 *           items:
 *             type: string
 *           example: [English, Grammar, Vocabulary]
 *
 *     UpdateContributorProfileRequest:
 *       type: object
 *       properties:
 *         fullName:
 *           type: string
 *           example: Jane Smith Updated
 *         bio:
 *           type: string
 *           example: Updated bio with new experience details.
 *         expertise:
 *           type: array
 *           items:
 *             type: string
 *           example: [English, Grammar, Pronunciation]
 *
 *     AdminProfile:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           example: 65f1a2b3c4d5e6f7a8b9c0d1
 *         userId:
 *           type: string
 *           example: 65f1a2b3c4d5e6f7a8b9c0d2
 *         fullName:
 *           type: string
 *           example: Admin User
 *         accessLevel:
 *           type: string
 *           enum: [STANDARD, SUPER]
 *           example: STANDARD
 *         createdAt:
 *           type: string
 *           format: date-time
 *           example: 2026-02-22T10:00:00.000Z
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           example: 2026-02-22T10:00:00.000Z
 *
 *     CreateAdminProfileRequest:
 *       type: object
 *       required:
 *         - fullName
 *       properties:
 *         fullName:
 *           type: string
 *           example: Admin User
 *         accessLevel:
 *           type: string
 *           enum: [STANDARD, SUPER]
 *           example: STANDARD
 *
 *     UpdateAdminProfileRequest:
 *       type: object
 *       properties:
 *         fullName:
 *           type: string
 *           example: Admin User Updated
 *         accessLevel:
 *           type: string
 *           enum: [STANDARD, SUPER]
 *           example: SUPER
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
 * 
 *   # ============ QUIZ SCHEMAS ============
 *
 *     Quiz:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           example: 64f1c2e4a12b3456789abcde
 *         title:
 *           type: string
 *           example: English Grammar Basics Quiz
 *         description:
 *           type: string
 *           example: Test your knowledge of basic English grammar
 *         courseId:
 *           type: string
 *           example: 64f1c2e4a12b3456789abcdf
 *         lessonId:
 *           type: string
 *           example: null
 *         passingScore:
 *           type: number
 *           example: 70
 *         timeLimitMinutes:
 *           type: number
 *           example: 30
 *         maxAttempts:
 *           type: number
 *           example: 3
 *         isPublished:
 *           type: boolean
 *           example: true
 *         createdAt:
 *           type: string
 *           example: 2026-02-22T10:00:00.000Z
 *         updatedAt:
 *           type: string
 *           example: 2026-02-22T10:00:00.000Z
 *
 *     CreateQuizRequest:
 *       type: object
 *       required:
 *         - title
 *         - description
 *         - passingScore
 *       properties:
 *         title:
 *           type: string
 *           example: English Grammar Basics Quiz
 *         description:
 *           type: string
 *           example: Test your knowledge of basic English grammar rules
 *         courseId:
 *           type: string
 *           example: 64f1c2e4a12b3456789abcde
 *         lessonId:
 *           type: string
 *           example: null
 *         passingScore:
 *           type: number
 *           example: 70
 *         timeLimitMinutes:
 *           type: number
 *           example: 30
 *         maxAttempts:
 *           type: number
 *           example: 3
 *
 *     UpdateQuizRequest:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *           example: English Grammar Basics - Updated
 *         description:
 *           type: string
 *           example: Updated description
 *         passingScore:
 *           type: number
 *           example: 75
 *         timeLimitMinutes:
 *           type: number
 *           example: 45
 *         maxAttempts:
 *           type: number
 *           example: 2
 *
 *     QuizResponse:
 *       type: object
 *       properties:
 *         code:
 *           type: number
 *           example: 201
 *         message:
 *           type: string
 *           example: Quiz created successfully
 *         content:
 *           $ref: '#/components/schemas/Quiz'
 *
 *     Question:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           example: 64f1c2e4a12b3456789abcde
 *         quizId:
 *           type: string
 *           example: 64f1c2e4a12b3456789abcdf
 *         questionText:
 *           type: string
 *           example: What is the correct form of 'to be' for 'I'?
 *         type:
 *           type: string
 *           enum: [multiple_choice, true_false, multiple_select, fill_blank]
 *           example: multiple_choice
 *         explanation:
 *           type: string
 *           example: The verb 'to be' conjugates to 'am' with 'I'
 *         points:
 *           type: number
 *           example: 5
 *         order:
 *           type: number
 *           example: 1
 *         createdAt:
 *           type: string
 *           example: 2026-02-22T10:00:00.000Z
 *         updatedAt:
 *           type: string
 *           example: 2026-02-22T10:00:00.000Z
 *
 *     CreateQuestionRequest:
 *       type: object
 *       required:
 *         - quizId
 *         - questionText
 *         - type
 *         - points
 *       properties:
 *         quizId:
 *           type: string
 *           example: 64f1c2e4a12b3456789abcde
 *         questionText:
 *           type: string
 *           example: What is the correct form of 'to be' for 'I'?
 *         type:
 *           type: string
 *           enum: [multiple_choice, true_false, multiple_select, fill_blank]
 *           example: multiple_choice
 *         explanation:
 *           type: string
 *           example: The verb 'to be' conjugates to 'am' with 'I'
 *         points:
 *           type: number
 *           example: 5
 *         order:
 *           type: number
 *           example: 1
 *         options:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/CreateOptionInline'
 *
 *     UpdateQuestionRequest:
 *       type: object
 *       properties:
 *         questionText:
 *           type: string
 *           example: What is the correct present tense form of 'to be' for 'I'?
 *         explanation:
 *           type: string
 *           example: Updated explanation
 *         points:
 *           type: number
 *           example: 10
 *
 *     QuestionResponse:
 *       type: object
 *       properties:
 *         code:
 *           type: number
 *           example: 201
 *         message:
 *           type: string
 *           example: Question created successfully
 *         content:
 *           type: object
 *           properties:
 *             question:
 *               $ref: '#/components/schemas/Question'
 *             options:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Option'
 *
 *     QuestionWithOptionsResponse:
 *       type: object
 *       properties:
 *         code:
 *           type: number
 *           example: 200
 *         message:
 *           type: string
 *           example: Question retrieved successfully
 *         content:
 *           type: object
 *           properties:
 *             question:
 *               $ref: '#/components/schemas/Question'
 *             options:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Option'
 *
 *     ReorderQuestionsRequest:
 *       type: object
 *       required:
 *         - questionOrders
 *       properties:
 *         questionOrders:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               questionId:
 *                 type: string
 *                 example: 64f1c2e4a12b3456789abcde
 *               order:
 *                 type: number
 *                 example: 1
 *
 *     Option:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           example: 64f1c2e4a12b3456789abcde
 *         questionId:
 *           type: string
 *           example: 64f1c2e4a12b3456789abcdf
 *         optionText:
 *           type: string
 *           example: am
 *         isCorrect:
 *           type: boolean
 *           example: true
 *         createdAt:
 *           type: string
 *           example: 2026-02-22T10:00:00.000Z
 *         updatedAt:
 *           type: string
 *           example: 2026-02-22T10:00:00.000Z
 *
 *     CreateOptionInline:
 *       type: object
 *       required:
 *         - optionText
 *         - isCorrect
 *       properties:
 *         optionText:
 *           type: string
 *           example: am
 *         isCorrect:
 *           type: boolean
 *           example: true
 *
 *     CreateOptionRequest:
 *       type: object
 *       required:
 *         - questionId
 *         - optionText
 *         - isCorrect
 *       properties:
 *         questionId:
 *           type: string
 *           example: 64f1c2e4a12b3456789abcde
 *         optionText:
 *           type: string
 *           example: am
 *         isCorrect:
 *           type: boolean
 *           example: true
 *
 *     UpdateOptionRequest:
 *       type: object
 *       properties:
 *         optionText:
 *           type: string
 *           example: were
 *         isCorrect:
 *           type: boolean
 *           example: false
 *
 *     QuizAttempt:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           example: 64f1c2e4a12b3456789abcde
 *         refugeeId:
 *           type: string
 *           example: 64f1c2e4a12b3456789abcdf
 *         quizId:
 *           type: string
 *           example: 64f1c2e4a12b3456789abce0
 *         score:
 *           type: number
 *           example: 85
 *         totalQuestions:
 *           type: number
 *           example: 10
 *         correctAnswers:
 *           type: number
 *           example: 8
 *         passed:
 *           type: boolean
 *           example: true
 *         timeTakenSeconds:
 *           type: number
 *           example: 1200
 *         attemptedAt:
 *           type: string
 *           example: 2026-02-22T10:00:00.000Z
 *
 *     SubmitQuizAttemptRequest:
 *       type: object
 *       required:
 *         - refugeeId
 *         - quizId
 *         - responses
 *       properties:
 *         refugeeId:
 *           type: string
 *           example: 64f1c2e4a12b3456789abcde
 *         quizId:
 *           type: string
 *           example: 64f1c2e4a12b3456789abcdf
 *         timeTakenSeconds:
 *           type: number
 *           example: 1200
 *         responses:
 *           type: array
 *           items:
 *             oneOf:
 *               - $ref: '#/components/schemas/SingleChoiceResponse'
 *               - $ref: '#/components/schemas/MultipleChoiceResponse'
 *
 *     SingleChoiceResponse:
 *       type: object
 *       properties:
 *         questionId:
 *           type: string
 *           example: 64f1c2e4a12b3456789abce0
 *         selectedOptionId:
 *           type: string
 *           example: 64f1c2e4a12b3456789abce1
 *
 *     MultipleChoiceResponse:
 *       type: object
 *       properties:
 *         questionId:
 *           type: string
 *           example: 64f1c2e4a12b3456789abce0
 *         selectedOptionIds:
 *           type: array
 *           items:
 *             type: string
 *           example: [64f1c2e4a12b3456789abce1, 64f1c2e4a12b3456789abce2]
 *
 *     QuizAttemptResponse:
 *       type: object
 *       properties:
 *         code:
 *           type: number
 *           example: 201
 *         message:
 *           type: string
 *           example: Quiz attempt submitted successfully
 *         content:
 *           $ref: '#/components/schemas/QuizAttempt'
 *
 *
 *     AttemptWithResponsesResponse:
 *       type: object
 *       properties:
 *         code:
 *           type: number
 *           example: 200
 *         message:
 *           type: string
 *           example: Attempt retrieved successfully
 *         content:
 *           type: object
 *           properties:
 *             attempt:
 *               $ref: '#/components/schemas/QuizAttempt'
 *             responses:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/QuizResponse'
 *
 *     QuizStatistics:
 *       type: object
 *       properties:
 *         totalAttempts:
 *           type: number
 *           example: 25
 *         averageScore:
 *           type: number
 *           example: 78
 *         passRate:
 *           type: number
 *           example: 80
 *         highestScore:
 *           type: number
 *           example: 100
 *         lowestScore:
 *           type: number
 *           example: 45
 *
 *     QuizStatisticsResponse:
 *       type: object
 *       properties:
 *         code:
 *           type: number
 *           example: 200
 *         message:
 *           type: string
 *           example: Quiz statistics retrieved successfully
 *         content:
 *           $ref: '#/components/schemas/QuizStatistics'
 *
 *     # ============ COURSE SCHEMAS ============
 *
 *     Course:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           example: 64f1c2e4a12b3456789abcde
 *         title:
 *           type: string
 *           example: English for Beginners
 *         description:
 *           type: string
 *           example: A comprehensive course for absolute beginners
 *         language:
 *           type: string
 *           example: English
 *         level:
 *           type: string
 *           enum: [Beginner, Intermediate, Advanced]
 *           example: Beginner
 *         createdById:
 *           type: string
 *           example: 64f1c2e4a12b3456789abcdf
 *         categoryId:
 *           type: string
 *           example: 64f1c2e4a12b3456789abce0
 *         isPublished:
 *           type: boolean
 *           example: true
 *         totalLessons:
 *           type: number
 *           example: 12
 *         totalEnrollments:
 *           type: number
 *           example: 150
 *         createdAt:
 *           type: string
 *           example: 2026-02-22T10:00:00.000Z
 *         updatedAt:
 *           type: string
 *           example: 2026-02-22T10:00:00.000Z
 *
 *     CreateCourseRequest:
 *       type: object
 *       required:
 *         - title
 *         - description
 *         - level
 *         - createdById
 *         - categoryId
 *       properties:
 *         title:
 *           type: string
 *           example: English for Beginners
 *         description:
 *           type: string
 *           example: A comprehensive course designed for absolute beginners to learn English
 *         language:
 *           type: string
 *           example: English
 *         level:
 *           type: string
 *           enum: [Beginner, Intermediate, Advanced]
 *           example: Beginner
 *         createdById:
 *           type: string
 *           example: 64f1c2e4a12b3456789abcde
 *         categoryId:
 *           type: string
 *           example: 64f1c2e4a12b3456789abcdf
 *
 *     UpdateCourseRequest:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *           example: English for Beginners - Updated Edition
 *         description:
 *           type: string
 *           example: Updated comprehensive course with new multimedia content
 *         level:
 *           type: string
 *           enum: [Beginner, Intermediate, Advanced]
 *           example: Intermediate
 *
 *     CourseResponse:
 *       type: object
 *       properties:
 *         code:
 *           type: number
 *           example: 201
 *         message:
 *           type: string
 *           example: Course created successfully
 *         content:
 *           $ref: '#/components/schemas/Course'
 *
 *     CourseStatistics:
 *       type: object
 *       properties:
 *         totalLessons:
 *           type: number
 *           example: 12
 *         totalEnrollments:
 *           type: number
 *           example: 150
 *         isPublished:
 *           type: boolean
 *           example: true
 *         level:
 *           type: string
 *           example: Beginner
 *         language:
 *           type: string
 *           example: English
 *
 *     CourseStatisticsResponse:
 *       type: object
 *       properties:
 *         code:
 *           type: number
 *           example: 200
 *         message:
 *           type: string
 *           example: Course statistics retrieved successfully
 *         content:
 *           $ref: '#/components/schemas/CourseStatistics'
 */
