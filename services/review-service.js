import Review from "../models/review_model.js";

export const createReviewService = async (data) => {
  return await Review.create(data);
};

export const getReviewsByCollegeIdService = async (collegeId) => {
  return await Review.find({ collegeId, status: "Accepted" }).sort({ createdAt: -1 });
};

export const updateReviewStatusService = async (id, status) => {
  return await Review.findByIdAndUpdate(id, { status }, { new: true });
};

export const deleteReviewService = async (id) => {
  return await Review.findByIdAndDelete(id);
};
