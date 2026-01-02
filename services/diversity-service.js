import OtherDetails from "../models/diversity_model.js";

export const createOtherDetailsService = async (data) => {
  return await OtherDetails.create(data);
};

export const getOtherDetailsByCollegeIdService = async (collegeId) => {
  return await OtherDetails.findOne({ collegeId });
};

export const updateOtherDetailsByCollegeIdService = async (collegeId, data) => {
  return await OtherDetails.findOneAndUpdate({ collegeId }, data, { new: true });
};

export const deleteOtherDetailsByCollegeIdService = async (collegeId) => {
  return await OtherDetails.findOneAndDelete({ collegeId });
};
