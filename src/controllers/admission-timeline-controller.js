import {
  createAdmissionTimelineService,
  getAdmissionTimelineByCollegeIdService,
  updateAdmissionTimelineByCollegeIdService,
  deleteAdmissionTimelineByCollegeIdService,
} from "../services/admission-timeline-service.js";

/* ADD */
export const addAdmissionTimeline = async (req, res) => {
  try {
    const data = await createAdmissionTimelineService(req.body);
    res.status(201).json({ success: true, message: "Admission timeline added", data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

/* GET */
export const getAdmissionTimelineByCollegeId = async (req, res) => {
  try {
    const data = await getAdmissionTimelineByCollegeIdService(req.params.collegeId);
    if (!data) return res.status(404).json({ success: false, message: "Not found" });
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

/* UPDATE */
export const updateAdmissionTimeline = async (req, res) => {
  try {
    const data = await updateAdmissionTimelineByCollegeIdService(req.params.collegeId, req.body);
    if (!data) return res.status(404).json({ success: false, message: "Not found" });
    res.json({ success: true, message: "Admission timeline updated", data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

/* DELETE */
export const deleteAdmissionTimeline = async (req, res) => {
  try {
    const data = await deleteAdmissionTimelineByCollegeIdService(req.params.collegeId);
    if (!data) return res.status(404).json({ success: false, message: "Not found" });
    res.json({ success: true, message: "Admission timeline deleted" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
