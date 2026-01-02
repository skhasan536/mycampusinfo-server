import {
  createInternationalExposureService,
  getInternationalExposureByCollegeIdService,
  updateInternationalExposureByCollegeIdService,
  deleteInternationalExposureByCollegeIdService,
} from "../services/int-exposure-service.js";

export const addInternationalExposure = async (req, res) => {
  try {
    const data = await createInternationalExposureService(req.body);
    res.status(201).json({ success: true, message: "International Exposure added", data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const getInternationalExposureByCollegeId = async (req, res) => {
  try {
    const data = await getInternationalExposureByCollegeIdService(req.params.collegeId);
    if (!data) return res.status(404).json({ success: false, message: "Not found" });
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const updateInternationalExposure = async (req, res) => {
  try {
    const data = await updateInternationalExposureByCollegeIdService(req.params.collegeId, req.body);
    if (!data) return res.status(404).json({ success: false, message: "Not found" });
    res.json({ success: true, message: "International Exposure updated", data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const deleteInternationalExposure = async (req, res) => {
  try {
    const data = await deleteInternationalExposureByCollegeIdService(req.params.collegeId);
    if (!data) return res.status(404).json({ success: false, message: "Not found" });
    res.json({ success: true, message: "International Exposure deleted" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
