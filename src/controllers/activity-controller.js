import {
  createActivitiesService,
  getActivitiesByCollegeIdService,
  updateActivitiesByCollegeIdService,
  deleteActivitiesByCollegeIdService,
} from "../services/activity-service.js";

/* ADD */
export const addActivities = async (req, res) => {
  try {
    const data = await createActivitiesService(req.body);
    res.status(201).json({ success: true, message: "Activities added", data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

/* GET */
export const getActivitiesByCollegeId = async (req, res) => {
  try {
    const data = await getActivitiesByCollegeIdService(req.params.collegeId);
    if (!data) return res.status(404).json({ success: false, message: "Not found" });
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

/* UPDATE */
export const updateActivities = async (req, res) => {
  try {
    const data = await updateActivitiesByCollegeIdService(req.params.collegeId, req.body);
    if (!data) return res.status(404).json({ success: false, message: "Not found" });
    res.json({ success: true, message: "Activities updated", data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

/* DELETE */
export const deleteActivities = async (req, res) => {
  try {
    const data = await deleteActivitiesByCollegeIdService(req.params.collegeId);
    if (!data) return res.status(404).json({ success: false, message: "Not found" });
    res.json({ success: true, message: "Activities deleted" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
