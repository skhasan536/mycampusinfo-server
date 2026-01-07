import AdmissionTimeline from "../models/school_details/admission-timeline-model.js";

/* ADD */
export const createAdmissionTimelineService = async (data) => {
  const { collegeId, timelines } = data;

  if (!collegeId || !Array.isArray(timelines) || timelines.length === 0) {
    throw new Error("collegeId and timelines are required");
  }

  return await AdmissionTimeline.findOneAndUpdate(
    { collegeId },
    {
      $push: {
        timelines: { $each: timelines }
      }
    },
    {
      new: true,
      upsert: true // 🔥 THIS IS THE KEY
    }
  );
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
