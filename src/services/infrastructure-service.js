import Infrastructure from "../models/school_details/infrastructure_model.js";

export const createInfrastructureService = async (data) => {
  return await Infrastructure.create(data);
};

export const getInfrastructureByCollegeIdService = async (collegeId) => {
  return await Infrastructure.findOne({ collegeId });
};

export const updateInfrastructureByCollegeIdService = async (collegeId, data) => {
  return await Infrastructure.findOneAndUpdate({ collegeId }, data, { new: true });
};

export const deleteInfrastructureByCollegeIdService = async (collegeId) => {
  return await Infrastructure.findOneAndDelete({ collegeId });
};
