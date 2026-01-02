import {
  createAlumniService,
  getAlumniByCollegeIdService,
  updateAlumniByCollegeIdService,
  deleteAlumniByCollegeIdService,
} from "../services/alumni-service.js";

/* ADD */
export const addAlumni = async (req, res) => {
  try {
    const data = await createAlumniService(req.body);
    res.status(201).json({ success: true, message: "Alumni added", data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

/* GET */
export const getAlumniByCollegeId = async (req, res) => {
  try {
    const data = await getAlumniByCollegeIdService(req.params.collegeId);
    if (!data) return res.status(404).json({ success: false, message: "Not found" });
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

/* UPDATE */
export const updateAlumni = async (req, res) => {
  try {
    const data = await updateAlumniByCollegeIdService(req.params.collegeId, req.body);
    if (!data) return res.status(404).json({ success: false, message: "Not found" });
    res.json({ success: true, message: "Alumni updated", data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

/* DELETE */
export const deleteAlumni = async (req, res) => {
  try {
    const data = await deleteAlumniByCollegeIdService(req.params.collegeId);
    if (!data) return res.status(404).json({ success: false, message: "Not found" });
    res.json({ success: true, message: "Alumni deleted" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
