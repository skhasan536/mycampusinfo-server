import {
  addScholarshipService,
  getScholarshipsByCollegeService,
} from "../services/fee-scholarship-service.js";

export const addScholarship = async (req, res) => {
  try {
    const data = await addScholarshipService(req.body);
    res.status(201).json({ message: "Scholarship added", data });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getScholarshipsByCollege = async (req, res) => {
  try {
    const data = await getScholarshipsByCollegeService(req.params.collegeId);
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
