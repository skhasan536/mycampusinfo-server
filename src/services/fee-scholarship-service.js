import FeesAndScholarships from "../models/school_details/fee_and_scholarship_model.js";

export const createFeesAndScholarshipsService = async (data) => {
  return await FeesAndScholarships.create(data);
};

export const getFeesAndScholarshipsByCollegeIdService = async (collegeId) => {
  return await FeesAndScholarships.findOne({ collegeId });
};

export const updateFeesAndScholarshipsByCollegeIdService = async (collegeId, data) => {
  return await FeesAndScholarships.findOneAndUpdate({ collegeId }, data, { new: true });
};

export const deleteFeesAndScholarshipsByCollegeIdService = async (collegeId) => {
  return await FeesAndScholarships.findOneAndDelete({ collegeId });
};
