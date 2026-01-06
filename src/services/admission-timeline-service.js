import AdmissionTimeline from "../models/school_details/admission-timeline-model.js";

/* ADD */
export const createAdmissionTimelineService = async (data) => {
  return await AdmissionTimeline.create(data);
};

/* GET BY COLLEGE ID */
export const getAdmissionTimelineByCollegeIdService = async (collegeId) => {
  return await AdmissionTimeline.findOne({ collegeId });
};

/* UPDATE BY COLLEGE ID */
export const updateAdmissionTimelineByCollegeIdService = async (collegeId, data) => {
  return await AdmissionTimeline.findOneAndUpdate({ collegeId }, data, { new: true });
};

/* DELETE BY COLLEGE ID */
export const deleteAdmissionTimelineByCollegeIdService = async (collegeId) => {
  return await AdmissionTimeline.findOneAndDelete({ collegeId });
};
