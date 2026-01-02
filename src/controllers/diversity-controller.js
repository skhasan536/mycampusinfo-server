import {
  createOtherDetailsService,
  getOtherDetailsByCollegeIdService,
  updateOtherDetailsByCollegeIdService,
  deleteOtherDetailsByCollegeIdService,
} from "../services/diversity-service.js";

export const addOtherDetails = async (req, res) => {
  try {
    const data = await createOtherDetailsService(req.body);
    res.status(201).json({ success: true, message: "Other details added", data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const getOtherDetailsByCollegeId = async (req, res) => {
  try {
    const data = await getOtherDetailsByCollegeIdService(req.params.collegeId);
    if (!data) return res.status(404).json({ success: false, message: "Not found" });
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const updateOtherDetails = async (req, res) => {
  try {
    const data = await updateOtherDetailsByCollegeIdService(req.params.collegeId, req.body);
    if (!data) return res.status(404).json({ success: false, message: "Not found" });
    res.json({ success: true, message: "Other details updated", data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const deleteOtherDetails = async (req, res) => {
  try {
    const data = await deleteOtherDetailsByCollegeIdService(req.params.collegeId);
    if (!data) return res.status(404).json({ success: false, message: "Not found" });
    res.json({ success: true, message: "Other details deleted" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
