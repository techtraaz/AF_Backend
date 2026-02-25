import Course from "../../models/course/Course.js";

const createCourse = async (courseData) => {
    const course = await Course.create(courseData);
    return course;
};

const getAllCourses = async (filters = {}) => {
    const query = {};
    
    if (filters.categoryId) query.categoryId = filters.categoryId;
    if (filters.level) query.level = filters.level;
    if (filters.language) query.language = filters.language;
    if (filters.createdById) query.createdById = filters.createdById;
    if (filters.isPublished !== undefined) query.isPublished = filters.isPublished;

    const courses = await Course.find(query)
        .sort({ createdAt: -1 })
        .populate('createdById', 'email role')
        .populate('categoryId', 'name slug description');
    
    return courses;
};

const getCourseById = async (courseId) => {
    const course = await Course.findById(courseId)
        .populate('createdById', 'email role')
        .populate('categoryId', 'name slug description icon');
    
    if (!course) {
        throw new Error("Course not found");
    }
    
    return course;
};

const updateCourse = async (courseId, updateData) => {
    // Prevent changing createdById and categoryId after creation
    delete updateData.createdById;
    delete updateData.categoryId;
    
    // Prevent manual update of totalLessons and totalEnrollments
    delete updateData.totalLessons;
    delete updateData.totalEnrollments;

    const course = await Course.findByIdAndUpdate(
        courseId,
        updateData,
        { new: true, runValidators: true }
    )
    .populate('createdById', 'email role')
    .populate('categoryId', 'name slug description');

    if (!course) {
        throw new Error("Course not found");
    }

    return course;
};

const deleteCourse = async (courseId) => {
    const course = await Course.findByIdAndDelete(courseId);
    
    if (!course) {
        throw new Error("Course not found");
    }

    // Note: In production, you might want to:
    // 1. Delete associated lessons, quizzes, enrollments
    // 2. Or prevent deletion if enrollments exist
    // For now, we'll just delete the course

    return course;
};

const publishCourse = async (courseId) => {
    const course = await Course.findByIdAndUpdate(
        courseId,
        { isPublished: true },
        { new: true }
    )
    .populate('createdById', 'email role')
    .populate('categoryId', 'name slug description');

    if (!course) {
        throw new Error("Course not found");
    }

    return course;
};

const unpublishCourse = async (courseId) => {
    const course = await Course.findByIdAndUpdate(
        courseId,
        { isPublished: false },
        { new: true }
    )
    .populate('createdById', 'email role')
    .populate('categoryId', 'name slug description');

    if (!course) {
        throw new Error("Course not found");
    }

    return course;
};

const incrementTotalLessons = async (courseId) => {
    const course = await Course.findByIdAndUpdate(
        courseId,
        { $inc: { totalLessons: 1 } },
        { new: true }
    );

    if (!course) {
        throw new Error("Course not found");
    }

    return course;
};

const decrementTotalLessons = async (courseId) => {
    const course = await Course.findByIdAndUpdate(
        courseId,
        { $inc: { totalLessons: -1 } },
        { new: true }
    );

    if (!course) {
        throw new Error("Course not found");
    }

    return course;
};

const incrementTotalEnrollments = async (courseId) => {
    const course = await Course.findByIdAndUpdate(
        courseId,
        { $inc: { totalEnrollments: 1 } },
        { new: true }
    );

    if (!course) {
        throw new Error("Course not found");
    }

    return course;
};

const decrementTotalEnrollments = async (courseId) => {
    const course = await Course.findByIdAndUpdate(
        courseId,
        { $inc: { totalEnrollments: -1 } },
        { new: true }
    );

    if (!course) {
        throw new Error("Course not found");
    }

    return course;
};

const getCoursesByCreator = async (creatorId) => {
    const courses = await Course.find({ createdById: creatorId })
        .sort({ createdAt: -1 })
        .populate('categoryId', 'name slug description');
    
    return courses;
};

const getCourseStatistics = async (courseId) => {
    const course = await Course.findById(courseId);

    if (!course) {
        throw new Error("Course not found");
    }

    return {
        totalLessons: course.totalLessons,
        totalEnrollments: course.totalEnrollments,
        isPublished: course.isPublished,
        level: course.level,
        language: course.language
    };
};

export {
    createCourse,
    getAllCourses,
    getCourseById,
    updateCourse,
    deleteCourse,
    publishCourse,
    unpublishCourse,
    incrementTotalLessons,
    decrementTotalLessons,
    incrementTotalEnrollments,
    decrementTotalEnrollments,
    getCoursesByCreator,
    getCourseStatistics
};