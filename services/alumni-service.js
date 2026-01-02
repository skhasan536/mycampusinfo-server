import Alumni from "../models/alumni_model.js";

/* ADD */
export const createAlumniService = async (data) => {
  return await Alumni.create(data);
};

/* GET BY COLLEGE ID */
export const getAlumniByCollegeIdService = async (collegeId) => {
  return await Alumni.findOne({ collegeId });
};

/* UPDATE BY COLLEGE ID */
export const updateAlumniByCollegeIdService = async (collegeId, data) => {
  return await Alumni.findOneAndUpdate({ collegeId }, data, { new: true });
};

/* DELETE BY COLLEGE ID */
export const deleteAlumniByCollegeIdService = async (collegeId) => {
  return await Alumni.findOneAndDelete({ collegeId });
};
