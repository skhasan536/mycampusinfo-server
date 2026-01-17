import {
  addCourseExamsService,
  getCollegeExamsService,
} from "../services/exam-service.js";

export const addCourseExams = async (req, res) => {
  try {
    const { courseId, exams } = req.body;

    const data = await addCourseExamsService(courseId, exams);

    res.status(201).json({
      message: "Exams added successfully",
      data,
    });
  } catch (err) {
    res.status(err.status || 500).json({
      message: err.message || "Server error",
    });
  }
};

export const getCollegeExams = async (req, res) => {
  try {
    const { id: collegeId } = req.params;

    const data = await getCollegeExamsService(collegeId);

    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: err.message || "Server error",
    });
  }
};
