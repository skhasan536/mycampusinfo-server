import Hostel from "../models/school_details/hostel_model.js";

export const createHostelService = async (data) => {
  return await Hostel.create(data);
};

export const getHostelByCollegeIdService = async (collegeId) => {
  return await Hostel.find({ collegeId }); // multiple hostels possible
};

export const updateHostelService = async (id, data) => {
  return await Hostel.findByIdAndUpdate(id, data, { new: true });
};

export const deleteHostelService = async (id) => {
  return await Hostel.findByIdAndDelete(id);
};
