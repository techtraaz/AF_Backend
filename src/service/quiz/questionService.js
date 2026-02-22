import Question from "../../models/quiz/Question.js";
import Option from "../../models/quiz/Option.js";
import Quiz from "../../models/quiz/Quiz.js";

const createQuestion = async (questionData) => {
    // Verify quiz exists
    const quiz = await Quiz.findById(questionData.quizId);
    if (!quiz) {
        throw new Error("Quiz not found");
    }

    // Auto-assign order if not provided
    if (!questionData.order) {
        const maxOrder = await Question.findOne({ quizId: questionData.quizId })
            .sort({ order: -1 })
            .select('order');
        questionData.order = maxOrder ? maxOrder.order + 1 : 1;
    }

    const question = await Question.create(questionData);
    return question;
};

const createQuestionWithOptions = async (questionData, optionsData) => {
    // Create question first
    const question = await createQuestion(questionData);

    // Create options
    const options = await Option.insertMany(
        optionsData.map(opt => ({
            ...opt,
            questionId: question._id
        }))
    );

    // Validate at least one correct answer for non-fill_blank types
    if (questionData.type !== 'fill_blank') {
        const hasCorrectAnswer = options.some(opt => opt.isCorrect);
        if (!hasCorrectAnswer) {
            // Cleanup
            await Question.findByIdAndDelete(question._id);
            await Option.deleteMany({ questionId: question._id });
            throw new Error("At least one option must be marked as correct");
        }
    }

    return { question, options };
};

const getAllQuestionsByQuiz = async (quizId) => {
    const questions = await Question.find({ quizId })
        .sort({ order: 1 })
        .populate('quizId', 'title');
    
    return questions;
};

const getQuestionById = async (questionId) => {
    const question = await Question.findById(questionId)
        .populate('quizId', 'title');
    
    if (!question) {
        throw new Error("Question not found");
    }
    
    return question;
};

const getQuestionWithOptions = async (questionId) => {
    const question = await getQuestionById(questionId);
    const options = await Option.find({ questionId });
    
    return { question, options };
};

const updateQuestion = async (questionId, updateData) => {
    // Prevent changing quizId
    delete updateData.quizId;

    const question = await Question.findByIdAndUpdate(
        questionId,
        updateData,
        { new: true, runValidators: true }
    );

    if (!question) {
        throw new Error("Question not found");
    }

    return question;
};

const deleteQuestion = async (questionId) => {
    const question = await Question.findByIdAndDelete(questionId);
    
    if (!question) {
        throw new Error("Question not found");
    }

    // Delete associated options
    await Option.deleteMany({ questionId });

    return question;
};

const reorderQuestions = async (quizId, questionOrders) => {
    // questionOrders: [{ questionId, order }, ...]
    const bulkOps = questionOrders.map(({ questionId, order }) => ({
        updateOne: {
            filter: { _id: questionId, quizId },
            update: { order }
        }
    }));

    await Question.bulkWrite(bulkOps);

    const questions = await Question.find({ quizId }).sort({ order: 1 });
    return questions;
};

export {
    createQuestion,
    createQuestionWithOptions,
    getAllQuestionsByQuiz,
    getQuestionById,
    getQuestionWithOptions,
    updateQuestion,
    deleteQuestion,
    reorderQuestions
};