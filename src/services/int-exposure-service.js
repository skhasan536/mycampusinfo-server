import InternationalExposure from "../models/international_exposure.model.js";

export const createInternationalExposureService = async (data) => {
  return await InternationalExposure.create(data);
};

export const getInternationalExposureByCollegeIdService = async (collegeId) => {
  return await InternationalExposure.findOne({ collegeId });
};

export const updateInternationalExposureByCollegeIdService = async (collegeId, data) => {
  return await InternationalExposure.findOneAndUpdate({ collegeId }, data, { new: true });
};

export const deleteInternationalExposureByCollegeIdService = async (collegeId) => {
  return await InternationalExposure.findOneAndDelete({ collegeId });
};
