import Course from "../models/school_details/course-model.js";
import College from "../models/school_details/college_model.js";
import mongoose from "mongoose";

export const addCoursesService = async (collegeId, courses) => {
    if (!Array.isArray(courses) || courses.length === 0) {
        throw { status: 400, message: "Courses must be a non-empty array." };
    }

    const college = await College.findById(collegeId);
    
    if (!college) throw { status: 404, message: "College not found" };

    const savedCourses = [];

    for (const courseData of courses) {
        const {
            courseName,
            duration,
            fees,
            examType,
            category,
            rankType,
            maxRankOrPercentile
        } = courseData;

        if (!courseName || !duration || !fees || !examType || !category || !rankType || maxRankOrPercentile === undefined) {
            throw { status: 400, message: "Missing required fields in one of the courses." };
        }

        if (!["Rank", "Percentile", "Percentage"].includes(rankType)) {
            throw { status: 400, message: "Invalid rankType. Must be Rank / Percentile / Percentage." };
        }

        const newCourse = new Course({
            collegeId,
            courseName,
            duration,
            fees,
            examType,
            category,
            rankType,
            maxRankOrPercentile
        });

        const saved = await newCourse.save();
        savedCourses.push(saved);
    }

    return savedCourses;
};

export const getCoursesByCollegeService = async (collegeId) => {
    if (!mongoose.Types.ObjectId.isValid(collegeId)) {
        throw { status: 400, message: "Invalid College ID" };
    }

    const college = await College.findById(collegeId);
    if (!college) throw { status: 404, message: "College not found" };

    const courses = await Course.find({ collegeId });
    if (courses.length === 0) throw { status: 404, message: "No courses found for this college." };

    return courses;
};

export const updateCourseService = async (courseId, data) => {
    if (data.rankType && !["Rank", "Percentile", "Percentage"].includes(data.rankType)) {
        throw { status: 400, message: "Invalid rankType." };
    }

    const updated = await Course.findByIdAndUpdate(courseId, data, { new: true });
    if (!updated) throw { status: 404, message: "Course not found" };

    return updated;
};
