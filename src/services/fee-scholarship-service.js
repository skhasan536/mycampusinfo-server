import Scholarship from "../models/school_details/fee_and_scholarship_model.js";

export const addScholarshipService = async (data) => {
  return await Scholarship.create(data);
};

export const getScholarshipsByCollegeService = async (collegeId) => {
  return await Scholarship.find({ collegeId });
};
