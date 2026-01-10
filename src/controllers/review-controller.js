import {
  createReviewService,
  getReviewsByCollegeIdService,
  updateReviewStatusService,
  deleteReviewService,
} from "../services/review-service.js";

export const addReview = async (req, res) => {
  try {
    const data = await createReviewService(req.body);
    res.status(201).json({ success: true, message: "Review submitted", data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const getReviewsByCollegeId = async (req, res) => {
  try {
    const data = await getReviewsByCollegeIdService(req.params.collegeId);
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const updateReviewStatus = async (req, res) => {
  try {
    const data = await updateReviewStatusService(req.params.id, req.body.status);
    res.json({ success: true, message: "Review updated", data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const deleteReview = async (req, res) => {
  try {
    await deleteReviewService(req.params.id);
    res.json({ success: true, message: "Review deleted" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
