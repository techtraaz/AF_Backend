
import Lesson from "../models/lesson.js";
import Reading from "../models/reading.js";
import Listening from "../models/listening.js";
import Vocabulary from "../models/vocab.js";
import Video from "../models/Video.js";

const createLesson = async (data) => {
    const lesson = await Lesson.create({
        categoryId: data.categoryId,
        title: data.title,
        description: data.description,
        difficulty: data.difficulty,
        estimatedMinutes: data.estimatedMinutes,
        order: data.order,
        thumbnail: data.thumbnail,
        isPublished: false
    });
    return lesson;
};

const getAllLessons = async (categoryId) => {
    const filter = categoryId ? { categoryId } : {};
    return await Lesson.find(filter).populate('reading').populate('listening').populate('vocabulary').populate('video');
};

const getLessonById = async (id) => {
    const lesson = await Lesson.findById(id)
        .populate('reading')
        .populate('listening')
        .populate('vocabulary')
        .populate('video');
    if (!lesson) throw new Error("Lesson not found");
    return lesson;
};

const updateLesson = async (id, data) => {
    const lesson = await Lesson.findByIdAndUpdate(id, data, { new: true });
    if (!lesson) throw new Error("Lesson not found");
    return lesson;
};

const deleteLesson = async (id) => {
    const lesson = await Lesson.findByIdAndDelete(id);
    if (!lesson) throw new Error("Lesson not found");
    // clean up all sections
    await Reading.findOneAndDelete({ lessonId: id });
    await Listening.findOneAndDelete({ lessonId: id });
    await Vocabulary.findOneAndDelete({ lessonId: id });
    await Video.findOneAndDelete({ lessonId: id });
    return lesson;
};

const publishLesson = async (id) => {
    const lesson = await Lesson.findById(id);
    if (!lesson) throw new Error("Lesson not found");
    // make sure all sections exist before publishing
    if (!lesson.reading || !lesson.listening || !lesson.vocabulary || !lesson.video) {
        throw new Error("All sections must be added before publishing");
    }
    lesson.isPublished = true;
    await lesson.save();
    return lesson;
};

export  { createLesson, getAllLessons, getLessonById, updateLesson, deleteLesson, publishLesson };