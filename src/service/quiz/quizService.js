import Quiz from "../../models/quiz/Quiz.js";
import Question from "../../models/quiz/Question.js";
import Option from "../../models/quiz/Option.js";

const createQuiz = async (quizData) => {
    // Validate that courseId or lessonId is provided
    if (!quizData.courseId && !quizData.lessonId) {
        throw new Error("Quiz must belong to either a course or a lesson");
    }

    const quiz = await Quiz.create(quizData);
    return quiz;
};

const getAllQuizzes = async (filters = {}) => {
    const query = {};
    
    if (filters.courseId) query.courseId = filters.courseId;
    if (filters.lessonId) query.lessonId = filters.lessonId;
    if (filters.isPublished !== undefined) query.isPublished = filters.isPublished;

    const quizzes = await Quiz.find(query)
        .sort({ createdAt: -1 })
        .populate('courseId', 'title')
        .populate('lessonId', 'title');
    
    return quizzes;
};

const getQuizById = async (quizId) => {
    const quiz = await Quiz.findById(quizId)
        .populate('courseId', 'title description')
        .populate('lessonId', 'title description');
    
    if (!quiz) {
        throw new Error("Quiz not found");
    }
    
    return quiz;
};

const updateQuiz = async (quizId, updateData) => {
    // Prevent changing courseId/lessonId after creation
    delete updateData.courseId;
    delete updateData.lessonId;

    const quiz = await Quiz.findByIdAndUpdate(
        quizId,
        updateData,
        { new: true, runValidators: true }
    );

    if (!quiz) {
        throw new Error("Quiz not found");
    }

    return quiz;
};

const deleteQuiz = async (quizId) => {
    const quiz = await Quiz.findByIdAndDelete(quizId);
    
    if (!quiz) {
        throw new Error("Quiz not found");
    }

    // Delete associated questions and options
    const questions = await Question.find({ quizId });
    const questionIds = questions.map(q => q._id);
    
    await Option.deleteMany({ questionId: { $in: questionIds } });
    await Question.deleteMany({ quizId });

    return quiz;
};

const publishQuiz = async (quizId) => {
    // Validate quiz has questions before publishing
    const questionCount = await Question.countDocuments({ quizId });
    
    if (questionCount === 0) {
        throw new Error("Cannot publish quiz without questions");
    }

    const quiz = await Quiz.findByIdAndUpdate(
        quizId,
        { isPublished: true },
        { new: true }
    );

    if (!quiz) {
        throw new Error("Quiz not found");
    }

    return quiz;
};

const unpublishQuiz = async (quizId) => {
    const quiz = await Quiz.findByIdAndUpdate(
        quizId,
        { isPublished: false },
        { new: true }
    );

    if (!quiz) {
        throw new Error("Quiz not found");
    }

    return quiz;
};

export { 
    createQuiz, 
    getAllQuizzes, 
    getQuizById, 
    updateQuiz, 
    deleteQuiz,
    publishQuiz,
    unpublishQuiz
};