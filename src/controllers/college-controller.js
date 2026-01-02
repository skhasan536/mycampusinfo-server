import {
  createCollegeService,
  getAllCollegesService,
  getCollegeByAuthIdService,
  updateCollegeByAuthIdService,
  deleteCollegeByAuthIdService,
} from "../services/college-service.js";

/* ADD */
export const addCollege = async (req, res) => {
  try {
    const college = await createCollegeService(req.body);
    res.status(201).json({ success: true, message: "College added", data: college });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

/* GET ALL */
export const getColleges = async (req, res) => {
  try {
    const colleges = await getAllCollegesService();
    res.json({ success: true, data: colleges });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};



/* GET BY AUTH ID */
export const getCollegeByAuthId = async (req, res) => {
  try {
    const college = await getCollegeByAuthIdService(req.params.authId);
    if (!college) return res.status(404).json({ success: false, message: "College not found" });
    res.json({ success: true, data: college });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

/* UPDATE BY AUTH ID */
export const updateCollegeByAuthId = async (req, res) => {
  try {
    const updated = await updateCollegeByAuthIdService(req.params.authId, req.body);
    if (!updated) return res.status(404).json({ success: false, message: "College not found" });
    res.json({ success: true, message: "College updated", data: updated });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};



/* DELETE BY AUTH ID */
export const deleteCollegeByAuthId = async (req, res) => {
  try {
    const deleted = await deleteCollegeByAuthIdService(req.params.authId);
    if (!deleted) return res.status(404).json({ success: false, message: "College not found" });
    res.json({ success: true, message: "College deleted" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
