import * as courseService from "../../service/course/courseService.js";

const createCourse = async (req, res) => {
    try {
        const course = await courseService.createCourse(req.body);
        return res.created("Course created successfully", course);
    } catch (error) {
        return res.badRequest(error.message);
    }
};

const getAllCourses = async (req, res) => {
    try {
        const filters = {
            categoryId: req.query.categoryId,
            level: req.query.level,
            language: req.query.language,
            createdById: req.query.createdById,
            isPublished: req.query.isPublished
        };
        const courses = await courseService.getAllCourses(filters);
        return res.success("Courses retrieved successfully", courses);
    } catch (error) {
        return res.error(error.message);
    }
};

const getCourseById = async (req, res) => {
    try {
        const course = await courseService.getCourseById(req.params.id);
        return res.success("Course retrieved successfully", course);
    } catch (error) {
        return res.notFound(error.message);
    }
};

const updateCourse = async (req, res) => {
    try {
        const course = await courseService.updateCourse(req.params.id, req.body);
        return res.success("Course updated successfully", course);
    } catch (error) {
        return res.badRequest(error.message);
    }
};

const deleteCourse = async (req, res) => {
    try {
        await courseService.deleteCourse(req.params.id);
        return res.success("Course deleted successfully");
    } catch (error) {
        return res.notFound(error.message);
    }
};

const publishCourse = async (req, res) => {
    try {
        const course = await courseService.publishCourse(req.params.id);
        return res.success("Course published successfully", course);
    } catch (error) {
        return res.badRequest(error.message);
    }
};

const unpublishCourse = async (req, res) => {
    try {
        const course = await courseService.unpublishCourse(req.params.id);
        return res.success("Course unpublished successfully", course);
    } catch (error) {
        return res.badRequest(error.message);
    }
};

const getCoursesByCreator = async (req, res) => {
    try {
        const courses = await courseService.getCoursesByCreator(req.params.creatorId);
        return res.success("Courses retrieved successfully", courses);
    } catch (error) {
        return res.error(error.message);
    }
};

const getCourseStatistics = async (req, res) => {
    try {
        const statistics = await courseService.getCourseStatistics(req.params.id);
        return res.success("Course statistics retrieved successfully", statistics);
    } catch (error) {
        return res.notFound(error.message);
    }
};

export {
    createCourse,
    getAllCourses,
    getCourseById,
    updateCourse,
    deleteCourse,
    publishCourse,
    unpublishCourse,
    getCoursesByCreator,
    getCourseStatistics
};