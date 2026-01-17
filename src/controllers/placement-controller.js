import {
  addCoursePlacementService,
  getCoursePlacementsService,
  updateCoursePlacementService,
  getPlacementsByCollegeService,
} from "../services/placement-service.js";

/* ================= ADD ================= */
export const addCoursePlacement = async (req, res) => {
  try {
    const data = await addCoursePlacementService(req.body);
    res.status(201).json({ message: "Placement added", data });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* ================= GET BY COURSE ================= */
export const getCoursePlacements = async (req, res) => {
  try {
    const data = await getCoursePlacementsService(req.params.courseId);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* ================= GET BY COLLEGE (NEW) ================= */
export const getPlacementsByCollege = async (req, res) => {
  try {
    const data = await getPlacementsByCollegeService(req.params.collegeId);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* ================= UPDATE ================= */
export const updateCoursePlacement = async (req, res) => {
  try {
    const data = await updateCoursePlacementService(
      req.params.placementId,
      req.body
    );
    res.status(200).json({ message: "Placement updated", data });
  } catch (err) {
    res.status(err.status || 500).json({ message: err.message });
  }
};
