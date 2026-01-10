import College from "../models/school_details/college_model.js";

/* ADD COLLEGE */
export const createCollegeService = async (data) => {
  return await College.create(data);
};

/* GET ALL COLLEGES */
export const getAllCollegesService = async () => {
  return await College.find().sort({ createdAt: -1 });
};


/* GET COLLEGE BY AUTH ID */
export const getCollegeByAuthIdService = async (authId) => {
  return await College.findOne({ authId });
};



/* UPDATE BY AUTH ID */
export const updateCollegeByAuthIdService = async (authId, data) => {
  return await College.findOneAndUpdate({ authId }, data, { new: true });
};


/* DELETE BY AUTH ID */
export const deleteCollegeByAuthIdService = async (authId) => {
  return await College.findOneAndDelete({ authId });
};
