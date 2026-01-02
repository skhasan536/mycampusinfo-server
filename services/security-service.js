import SafetyAndSecurity from "../models/security_model.js";

export const createSafetyAndSecurityService = async (data) => {
  return await SafetyAndSecurity.create(data);
};

export const getSafetyAndSecurityByCollegeIdService = async (collegeId) => {
  return await SafetyAndSecurity.findOne({ collegeId });
};

export const updateSafetyAndSecurityByCollegeIdService = async (collegeId, data) => {
  return await SafetyAndSecurity.findOneAndUpdate({ collegeId }, data, { new: true });
};

export const deleteSafetyAndSecurityByCollegeIdService = async (collegeId) => {
  return await SafetyAndSecurity.findOneAndDelete({ collegeId });
};
