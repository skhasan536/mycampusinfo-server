import College from "../models/school_details/college_model.js";
import { toCollegeCardModels } from "../utils/utils.js";

/* ADD COLLEGE */
export const createCollegeService = async (data) => {
  return await College.create(data);
};

/* GET ALL COLLEGES */
export const getAllCollegesService = async () => {
  let colleges =
    await College.find().sort({ createdAt: -1 });
 let mapColleges = await toCollegeCardModels(colleges);
  return mapColleges;
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
