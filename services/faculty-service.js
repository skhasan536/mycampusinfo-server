import Faculty from "../models/faculty_model.js";

export const createFacultyService = async (data) => {
  return await Faculty.create(data);
};

export const getFacultyByCollegeIdService = async (collegeId) => {
  return await Faculty.findOne({ collegeId });
};

export const updateFacultyByCollegeIdService = async (collegeId, data) => {
  return await Faculty.findOneAndUpdate({ collegeId }, data, { new: true });
};

export const deleteFacultyByCollegeIdService = async (collegeId) => {
  return await Faculty.findOneAndDelete({ collegeId });
};
