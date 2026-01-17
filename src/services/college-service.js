import College from "../models/school_details/college_model.js";
import { toCollegeCardModels } from "../utils/utils.js";
import mongoose from "mongoose";
/* ADD COLLEGE */
export const createCollegeService = async (data) => {
  const {
    authId, name, city, state, country, ranking, estYear, lat, long, 
    area, acceptanceRate, collegeInfo, address, pinCode, collegeMode,
     genderType, shifts, feeRange, stream, email, mobileNo, specialist, tags,
      website, status, languageMedium, transportAvailable, TeacherToStudentRatio,
       score, instagramHandle, twitterHandle, linkedinHandle

  } = data;

  const college = new College({
  _id : new mongoose.Types.ObjectId(authId),authId, name, city, state, country, ranking, estYear, lat, long, area, 
   acceptanceRate, collegeInfo, address, pinCode, collegeMode, genderType, 
   shifts, feeRange, stream, email, mobileNo, specialist, tags, website, status,
    languageMedium, transportAvailable, TeacherToStudentRatio, score, instagramHandle,
     twitterHandle, linkedinHandle
  });

  return await college.save();
};

/* GET ALL COLLEGES */
export const getAllCollegesService = async () => {
  let colleges =
    await College.find().sort({ createdAt: -1 });
  let mapColleges = await toCollegeCardModels(colleges);
  return mapColleges;
};


/* GET COLLEGE BY AUTH ID */
export const getCollegeByIdService = async (collegeId) => {
  return await College.findById(collegeId );
};



/* UPDATE BY AUTH ID */
export const updateCollegeByAuthIdService = async (authId, data) => {
  return await College.findOneAndUpdate({ authId }, data, { new: true });
};


/* DELETE BY AUTH ID */
export const deleteCollegeByAuthIdService = async (authId) => {
  return await College.findOneAndDelete({ authId });
};
