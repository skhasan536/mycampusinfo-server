import {
  createAmenitiesService,
  getAmenitiesByCollegeIdService,
  updateAmenitiesByCollegeIdService,
  deleteAmenitiesByCollegeIdService,
} from "../services/amenity-service.js";

export const addAmenities = async (req, res) => {
  try {
    const data = await createAmenitiesService(req.body);
    res.status(201).json({ success: true, message: "Amenities added", data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const getAmenitiesByCollegeId = async (req, res) => {
  try {
    const data = await getAmenitiesByCollegeIdService(req.params.collegeId);
    if (!data) return res.status(404).json({ success: false, message: "Not found" });
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const updateAmenities = async (req, res) => {
  try {
    const data = await updateAmenitiesByCollegeIdService(req.params.collegeId, req.body);
    if (!data) return res.status(404).json({ success: false, message: "Not found" });
    res.json({ success: true, message: "Amenities updated", data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const deleteAmenities = async (req, res) => {
  try {
    const data = await deleteAmenitiesByCollegeIdService(req.params.collegeId);
    if (!data) return res.status(404).json({ success: false, message: "Not found" });
    res.json({ success: true, message: "Amenities deleted" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
