import {
  createHostelService,
  getHostelByCollegeIdService,
  updateHostelService,
  deleteHostelService,
} from "../services/hostel-service.js";

export const addHostel = async (req, res) => {
  try {
    const data = await createHostelService(req.body);
    res.status(201).json({ success: true, message: "Hostel added", data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const getHostelsByCollegeId = async (req, res) => {
  try {
    const data = await getHostelByCollegeIdService(req.params.collegeId);
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const updateHostel = async (req, res) => {
  try {
    const data = await updateHostelService(req.params.id, req.body);
    if (!data) return res.status(404).json({ success: false, message: "Not found" });
    res.json({ success: true, message: "Hostel updated", data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const deleteHostel = async (req, res) => {
  try {
    const data = await deleteHostelService(req.params.id);
    if (!data) return res.status(404).json({ success: false, message: "Not found" });
    res.json({ success: true, message: "Hostel deleted" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
