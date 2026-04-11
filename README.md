# Wordigo

> **A Language Learning Platform for Displaced Populations & Refugee Education**

A modern Node.js backend API built with Express.js and MongoDB, designed to provide accessible language education to displaced populations and refugees seeking integration and linguistic empowerment.

## 🎯 Mission

Wordigo powers a comprehensive language learning web application dedicated to supporting displaced populations and refugees in their journey toward linguistic proficiency and social integration. Our platform provides structured, engaging, and culturally-sensitive language education to those who need it most.

## 📋 Overview

Wordigo is a RESTful API server built with:
- **Express.js** - Fast and minimal web framework
- **MongoDB** - NoSQL database with Mongoose ODM
- **JWT** - Secure authentication and authorization
- **Cloudinary** - Cloud-based image and file management
- **Swagger** - Interactive API documentation

### Key Features
- 📚 **Structured Quiz & Question System** - Comprehensive language assessments
- 🎓 **Refugee Education Support** - Culturally-aware curriculum design
- 👥 **User Management** - Secure registration and authentication
- 📤 **Media Upload** - Support for images, audio, and educational materials
- 📊 **Progress Tracking** - Monitor learning outcomes and proficiency levels
- 🔒 **Privacy First** - GDPR-compliant data handling for vulnerable populations

## 🚀 Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| **Express.js** | ^5.2.1 | Web framework |
| **Mongoose** | ^8.23.0 | MongoDB ODM |
| **bcrypt** | ^6.0.0 | Password hashing |
| **jsonwebtoken** | ^9.0.3 | JWT authentication |
| **Cloudinary** | ^1.41.3 | Media upload service |
| **multer** | ^2.0.2 | File upload handling |
| **CORS** | ^2.8.6 | Cross-origin requests |
| **dotenv** | ^17.2.4 | Environment variables |
| **Swagger** | ^5.0.1 & ^6.2.8 | API documentation |

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- MongoDB instance
- Cloudinary account (for file uploads)

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/techtraaz/AF_Backend.git
   cd AF_Backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   ```bash
   cp ENV_EXAMPLE .env
   ```

   Update `.env` with your configuration:
   ```env
   PORT=3000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   NODE_ENV=development
   ```

## 🏃 Running the Server

### Development Mode
```bash
npm run dev
```

This will start the server on the port specified in your `.env` file (default: `http://localhost:3000`).

### Production Mode
```bash
npm start
```

## Deployment Guide

- [Deployment Guide](./DEPLOYMENT.md)

## 📁 Project Structure

```
AF_Backend/
├── src/
│   ├── app.js                 # Express app configuration
│   ├── config/
│   │   └── database.js        # MongoDB connection
│   ├── routes/                # API route definitions
│   │   ├── quizzes.js         # Quiz management endpoints
│   │   ├── questions.js       # Question management endpoints
│   │   ├── users.js           # User management endpoints
│   │   └── auth.js            # Authentication endpoints
│   ├── controllers/           # Business logic
│   │   ├── quizController.js
│   │   ├── questionController.js
│   │   ├── userController.js
│   │   └── authController.js
│   ├── models/                # Mongoose schemas
│   │   ├── User.js            # User schema
│   │   ├── Quiz.js            # Quiz schema
│   │   ├── Question.js        # Question schema
│   │   └── Progress.js        # User progress tracking
│   ├── middleware/            # Custom middleware
│   │   ├── auth.js            # JWT verification
│   │   └── errorHandler.js    # Error handling
│   └── utils/                 # Utility functions
├── server.js                  # Entry point
├── package.json               # Dependencies
├── .env                       # Environment variables (git ignored)
├── .gitignore                 # Git ignore rules
└── README.md                  # This file
```

## 🔐 Authentication

The API uses JWT (JSON Web Tokens) for secure authentication:

- **User Registration**: Create a new account with email and password
- **Login**: Authenticate and receive a JWT token
- **Protected Routes**: Include the token in the `Authorization` header
  ```
  Authorization: Bearer <your_jwt_token>
  ```
- **Password Security**: Passwords are hashed using bcrypt before storage
- **Account Recovery**: Secure password reset mechanism for accessibility

## 📚 Core Features

### 1. Quiz Management
Create and manage language quizzes tailored for different proficiency levels:
- Beginner, Intermediate, Advanced levels
- Multiple language support
- Timed assessments
- Adaptive difficulty

### 2. Question System
Comprehensive question types for language learning:
```
- Multiple Choice
- Fill in the Blanks
- Listening Comprehension
- Speaking Practice
- Essay/Short Answer
```

### 3. Progress Tracking
Monitor learner progress across:
- Quiz completion rates
- Score history
- Time spent learning
- Proficiency level advancement
- Certificate generation

### 4. Multimedia Support
Integrated media management via Cloudinary:
- Audio files for pronunciation practice
- Images for vocabulary learning
- Video lessons
- Document uploads for supplementary materials

### 5. User Management
Secure user account system with:
- Profile management
- Learning preferences
- Privacy controls
- Account accessibility settings

## 📸 File Uploads

File uploads are handled via **Multer** and stored on **Cloudinary**:

- Supports images, audio, and documents
- Optimized for low-bandwidth environments
- Automatic cloud storage management
- Resizable images for mobile compatibility

## 📚 API Documentation

Interactive Swagger documentation is available at:
```
http://localhost:PORT/api-docs
```

Browse and test all API endpoints directly from the Swagger UI.

## 📦 API Response Structure

All API responses follow a standardized structure with consistent fields for easy client-side handling.

### Standard Response Format

```json
{
  "code": 200,
  "message": "Success message or description",
  "content": {}
}
```

### Response Fields

| Field | Type | Description |
|-------|------|-------------|
| `code` | number | HTTP status code (200, 201, 400, 404, 500, etc.) |
| `message` | string | Human-readable message describing the response |
| `content` | object \| array \| null | Response payload (null for errors, object/array for data) |

---

### Success Response Examples

#### 1. Array Response (Questions List)
```json
{
  "code": 200,
  "message": "Questions retrieved successfully",
  "content": [
    {
      "_id": "64f1c2e4a12b3456789abcde",
      "quizId": "64f1c2e4a12b3456789abcdf",
      "questionText": "What is the correct form of 'to be' for 'I'?",
      "type": "multiple_choice",
      "explanation": "The verb 'to be' conjugates to 'am' with 'I'",
      "points": 5,
      "order": 1,
      "createdAt": "2026-02-22T10:00:00.000Z",
      "updatedAt": "2026-02-22T10:00:00.000Z"
    }
  ]
}
```

#### 2. Object Response (Single Resource)
```json
{
  "code": 200,
  "message": "Quiz created successfully",
  "content": {
    "_id": "507f1f77bcf86cd799439011",
    "title": "Beginner English - Unit 1",
    "description": "Introduction to basic English for refugees",
    "language": "English",
    "level": "beginner",
    "totalQuestions": 10,
    "estimatedTime": 15,
    "createdAt": "2026-02-25T10:30:00Z",
    "updatedAt": "2026-02-25T10:30:00Z"
  }
}
```

#### 3. Nested Object Response
```json
{
  "code": 200,
  "message": "User profile retrieved",
  "content": {
    "_id": "user_123",
    "name": "Dmitry",
    "email": "ahmed@example.com",
    "proficiencyLevel": "beginner",
    "nativeLanguage": "Russian",
    "targetLanguage": "English",
    "avatar": "https://cloudinary.com/image.jpg",
    "progress": {
      "quizzesCompleted": 5,
      "averageScore": 78,
      "totalLearningHours": 12
    },
    "createdAt": "2026-01-15T08:00:00Z"
  }
}
```

---

### Error Response Examples

#### 1. Duplicate Resource Error
```json
{
  "code": 400,
  "message": "Category with this slug already exists",
  "content": null
}
```

#### 2. Validation Error
```json
{
  "code": 400,
  "message": "Validation failed",
  "content": null
}
```

#### 3. Authentication Error
```json
{
  "code": 401,
  "message": "Invalid or expired token",
  "content": null
}
```

#### 4. Not Found Error
```json
{
  "code": 404,
  "message": "Quiz not found",
  "content": null
}
```

#### 5. Server Error
```json
{
  "code": 500,
  "message": "Internal server error",
  "content": null
}
```

---

### HTTP Status Codes Reference

| Code | Status | Use Case | Content |
|------|--------|----------|---------|
| 200 | OK | Successful GET, PUT, PATCH | Response data (object/array) |
| 201 | Created | Successful POST | Created resource object |
| 400 | Bad Request | Validation/logic error | null |
| 401 | Unauthorized | Missing/invalid authentication | null |
| 403 | Forbidden | Insufficient permissions | null |
| 404 | Not Found | Resource doesn't exist | null |
| 409 | Conflict | Resource already exists (duplicate) | null |
| 500 | Server Error | Unexpected error | null |

---

## 🔑 Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `PORT` | Server port | 3000 |
| `MONGODB_URI` | MongoDB connection string | mongodb+srv://user:pass@cluster.mongodb.net/dbname |
| `JWT_SECRET` | Secret key for JWT signing | your_secret_key_here |
| `CLOUDINARY_CLOUD_NAME` | Cloudinary cloud name | your_cloud_name |
| `CLOUDINARY_API_KEY` | Cloudinary API key | your_api_key |
| `CLOUDINARY_API_SECRET` | Cloudinary API secret | your_api_secret |
| `NODE_ENV` | Environment (development/production) | development |

## 🛠️ Development

### Available Scripts
```bash
npm run dev    # Start development server
npm install    # Install dependencies
```

### Code Style & Best Practices
- Use ES6 modules (import/export)
- Follow RESTful API conventions
- Keep controllers lean and focused
- Document API endpoints with Swagger JSDoc comments
- Always return responses in the standard format
- Use appropriate HTTP status codes
- Return `content: null` for errors, and `content: data` for success
- Consider accessibility for displaced/refugee users


### MongoDB Connection Issues
- Verify `MONGODB_URI` is correct
- Check MongoDB server is running
- Ensure network access is allowed in MongoDB Atlas
- Check firewall settings for connectivity

### Cloudinary Upload Failures
- Verify API credentials in `.env`
- Check Cloudinary account is active
- Ensure file size is within limits
- Check internet connectivity

### API Response Issues
- Ensure all responses follow the standard format
- Check that `code` matches the HTTP status code
- Verify `content` is null for errors and contains data for success responses

---

## 👥 Contributors

| Name                   | IT Number  | GitHub Profile                          |
|------------------------|------------|-----------------------------------------|
| A.K.R.T.ALAWATHTHA     | IT23282872 | https://github.com/techtraaz            |
| G.G.R.P.JAYANATH       | IT23174108 | https://github.com/rushxdev             |
| A.T.M.S.S.B.THENNAKOON | IT23185852 | https://github.com/subhashanasandakelum |
| S.S.AMARASINGHE        | IT23316904 | https://github.com/senuAmarasinghe      |

---

**Last Updated**: 2026-02-25  
**Mission**: Empowering displaced populations through language education and integration support

