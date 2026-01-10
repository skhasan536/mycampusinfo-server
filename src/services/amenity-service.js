import Amenities from "../models/school_details/amenities_model.js";

export const createAmenitiesService = async (data) => {
  return await Amenities.create(data);
};

export const getAmenitiesByCollegeIdService = async (collegeId) => {
  return await Amenities.findOne({ collegeId });
};

export const updateAmenitiesByCollegeIdService = async (collegeId, data) => {
  return await Amenities.findOneAndUpdate({ collegeId }, data, { new: true });
};

export const deleteAmenitiesByCollegeIdService = async (collegeId) => {
  return await Amenities.findOneAndDelete({ collegeId });
};
