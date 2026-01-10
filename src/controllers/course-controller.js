import{
    addCoursesService,
    getCoursesByCollegeService,
    updateCourseService
} from "../services/course-service.js";

export const addCourse = async (req, res) => {
    try {
        const { collegeId, courses } = req.body;
        const result = await addCoursesService(collegeId, courses);
        res.status(201).json({ message: "Courses added successfully", courses: result });
    } catch (err) {
        res.status(err.status || 500).json({ message: err.message || "Server Error" });
    }
};

export const getCoursesByCollege = async (req, res) => {
    try {
        const result = await getCoursesByCollegeService(req.params.collegeId);
        res.status(200).json(result);
    } catch (err) {
        res.status(err.status || 500).json({ message: err.message || "Server Error" });
    }
};

export const updateCourse = async (req, res) => {
    try {
        const updated = await updateCourseService(req.params.courseId, req.body);
        res.status(200).json({ message: "Course details updated", course: updated });
    } catch (err) {
        res.status(err.status || 500).json({ message: err.message || "Server Error" });
    }
};
