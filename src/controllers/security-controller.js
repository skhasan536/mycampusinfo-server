import {
  createSafetyAndSecurityService,
  getSafetyAndSecurityByCollegeIdService,
  updateSafetyAndSecurityByCollegeIdService,
  deleteSafetyAndSecurityByCollegeIdService,
} from "../services/security-service.js";

export const addSafetyAndSecurity = async (req, res) => {
  try {
    const data = await createSafetyAndSecurityService(req.body);
    res.status(201).json({ success: true, message: "Safety & Security added", data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const getSafetyAndSecurityByCollegeId = async (req, res) => {
  try {
    const data = await getSafetyAndSecurityByCollegeIdService(req.params.collegeId);
    if (!data) return res.status(404).json({ success: false, message: "Not found" });
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const updateSafetyAndSecurity = async (req, res) => {
  try {
    const data = await updateSafetyAndSecurityByCollegeIdService(req.params.collegeId, req.body);
    if (!data) return res.status(404).json({ success: false, message: "Not found" });
    res.json({ success: true, message: "Safety & Security updated", data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const deleteSafetyAndSecurity = async (req, res) => {
  try {
    const data = await deleteSafetyAndSecurityByCollegeIdService(req.params.collegeId);
    if (!data) return res.status(404).json({ success: false, message: "Not found" });
    res.json({ success: true, message: "Safety & Security deleted" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
