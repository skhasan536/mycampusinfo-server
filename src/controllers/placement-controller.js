import {
  addPlacementsService,
  getPlacementsByCollegeService,
  updatePlacementService,
} from "../services/placement-service.js";

export const addPlacement = async (req, res) => {
  try {
    const { collegeId, placements } = req.body;
    const result = await addPlacementsService(collegeId, placements);
    res.status(201).json({ message: "Placement data added", placements: result });
  } catch (err) {
    res.status(err.status || 500).json({ message: err.message || "Server Error" });
  }
};

export const getPlacementsByCollege = async (req, res) => {
  try {
    const result = await getPlacementsByCollegeService(req.params.collegeId);
    res.status(200).json(result);
  } catch (err) {
    res.status(err.status || 500).json({ message: err.message || "Server Error" });
  }
};

export const updatePlacement = async (req, res) => {
  try {
    const updated = await updatePlacementService(req.params.placementId, req.body);
    res.status(200).json({ message: "Placement updated", placement: updated });
  } catch (err) {
    res.status(err.status || 500).json({ message: err.message || "Server Error" });
  }
};
