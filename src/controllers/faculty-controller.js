import {
  createFacultyService,
  getFacultyByCollegeIdService,
  updateFacultyByCollegeIdService,
  deleteFacultyByCollegeIdService,
} from "../services/faculty-service.js";

export const addFaculty = async (req, res) => {
  try {
    const data = await createFacultyService(req.body);
    res.status(201).json({ success: true, message: "Faculty added", data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const getFacultyByCollegeId = async (req, res) => {
  try {
    const data = await getFacultyByCollegeIdService(req.params.collegeId);
    if (!data) return res.status(404).json({ success: false, message: "Not found" });
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const updateFaculty = async (req, res) => {
  try {
    const data = await updateFacultyByCollegeIdService(req.params.collegeId, req.body);
    if (!data) return res.status(404).json({ success: false, message: "Not found" });
    res.json({ success: true, message: "Faculty updated", data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const deleteFaculty = async (req, res) => {
  try {
    const data = await deleteFacultyByCollegeIdService(req.params.collegeId);
    if (!data) return res.status(404).json({ success: false, message: "Not found" });
    res.json({ success: true, message: "Faculty deleted" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
