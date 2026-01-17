import {
  addCoursesService,
  getCoursesByCollegeService,
  updateCourseService,
} from "../services/course-service.js";

export const addCourse = async (req, res) => {
  try {
    const { collegeId, courses } = req.body;
    const data = await addCoursesService(collegeId, courses);
    res.status(201).json({ message: "Courses added", data });
  } catch (err) {
    res.status(err.status || 500).json({ message: err.message });
  }
};

export const getCoursesByCollege = async (req, res) => {
  try {
    const data = await getCoursesByCollegeService(req.params.collegeId);
    res.json(data);
  } catch (err) {
    res.status(err.status || 500).json({ message: err.message });
  }
};

export const updateCourse = async (req, res) => {
  try {
    const data = await updateCourseService(req.params.courseId, req.body);
    res.json({ message: "Course updated", data });
  } catch (err) {
    res.status(err.status || 500).json({ message: err.message });
  }
};
