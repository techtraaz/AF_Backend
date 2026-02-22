import Option from "../../models/quiz/Option.js";
import Question from "../../models/quiz/Question.js";

const createOption = async (optionData) => {
    // Verify question exists
    const question = await Question.findById(optionData.questionId);
    if (!question) {
        throw new Error("Question not found");
    }

    const option = await Option.create(optionData);
    return option;
};

const getOptionsByQuestion = async (questionId) => {
    const options = await Option.find({ questionId });
    return options;
};

const updateOption = async (optionId, updateData) => {
    // Prevent changing questionId
    delete updateData.questionId;

    const option = await Option.findByIdAndUpdate(
        optionId,
        updateData,
        { new: true, runValidators: true }
    );

    if (!option) {
        throw new Error("Option not found");
    }

    return option;
};

const deleteOption = async (optionId) => {
    const option = await Option.findByIdAndDelete(optionId);
    
    if (!option) {
        throw new Error("Option not found");
    }

    return option;
};

export {
    createOption,
    getOptionsByQuestion,
    updateOption,
    deleteOption
};