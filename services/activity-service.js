import Activities from "../models/activity_model.js";

/* ADD */
export const createActivitiesService = async (data) => {
  return await Activities.create(data);
};

/* GET BY COLLEGE ID */
export const getActivitiesByCollegeIdService = async (collegeId) => {
  return await Activities.findOne({ collegeId });
};

/* UPDATE BY COLLEGE ID */
export const updateActivitiesByCollegeIdService = async (collegeId, data) => {
  return await Activities.findOneAndUpdate({ collegeId }, data, { new: true });
};

/* DELETE BY COLLEGE ID */
export const deleteActivitiesByCollegeIdService = async (collegeId) => {
  return await Activities.findOneAndDelete({ collegeId });
};
