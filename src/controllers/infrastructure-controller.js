import {
  createInfrastructureService,
  getInfrastructureByCollegeIdService,
  updateInfrastructureByCollegeIdService,
  deleteInfrastructureByCollegeIdService,
} from "../services/infrastructure-service.js";

export const addInfrastructure = async (req, res) => {
  try {
    const data = await createInfrastructureService(req.body);
    res.status(201).json({ success: true, message: "Infrastructure added", data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const getInfrastructureByCollegeId = async (req, res) => {
  try {
    const data = await getInfrastructureByCollegeIdService(req.params.collegeId);
    if (!data) return res.status(404).json({ success: false, message: "Not found" });
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const updateInfrastructure = async (req, res) => {
  try {
    const data = await updateInfrastructureByCollegeIdService(req.params.collegeId, req.body);
    if (!data) return res.status(404).json({ success: false, message: "Not found" });
    res.json({ success: true, message: "Infrastructure updated", data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const deleteInfrastructure = async (req, res) => {
  try {
    const data = await deleteInfrastructureByCollegeIdService(req.params.collegeId);
    if (!data) return res.status(404).json({ success: false, message: "Not found" });
    res.json({ success: true, message: "Infrastructure deleted" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
