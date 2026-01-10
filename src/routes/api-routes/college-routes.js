import express from "express";

/* ===== College Core ===== */
import {
    addCollege,
    getColleges,

    getCollegeByAuthId,

    updateCollegeByAuthId,

    deleteCollegeByAuthId,
} from "../../controllers/college-controller.js";

import {
  addAdmissionTimeline,
  getAdmissionTimelineByCollegeId,
  updateAdmissionTimeline,
  deleteAdmissionTimeline,
} from "../../controllers/admission-timeline-controller.js";
/* ===== Activities ===== */
import {
    addActivities,
    getActivitiesByCollegeId,
    updateActivities,
    deleteActivities,
} from "../../controllers/activity-controller.js";

/* ===== Alumni ===== */
import {
    addAlumni,
    getAlumniByCollegeId,
    updateAlumni,
    deleteAlumni,
} from "../../controllers/alumni-controller.js";

/* ===== Amenities ===== */
import {
    addAmenities,
    getAmenitiesByCollegeId,
    updateAmenities,
    deleteAmenities,
} from "../../controllers/amenity-controller.js";

/* ===== Other Details ===== */
import {
    addOtherDetails,
    getOtherDetailsByCollegeId,
    updateOtherDetails,
    deleteOtherDetails,
} from "../../controllers/diversity-controller.js";

/* ===== Faculty ===== */
import {
    addFaculty,
    getFacultyByCollegeId,
    updateFaculty,
    deleteFaculty,
} from "../../controllers/faculty-controller.js";

/* ===== Fees & Scholarships ===== */
import {
    addFeesAndScholarships,
    getFeesAndScholarshipsByCollegeId,
    updateFeesAndScholarships,
    deleteFeesAndScholarships,
} from "../../controllers/fee-scholarship-controller.js";
import { addCourse, getCoursesByCollege, updateCourse } from "../../controllers/course-controller.js";

/* ===== Hostel ===== */
import {
    addHostel,
    getHostelsByCollegeId,
    updateHostel,
    deleteHostel,
} from "../../controllers/hostel-controller.js";

/* ===== Infrastructure ===== */
import {
    addInfrastructure,
    getInfrastructureByCollegeId,
    updateInfrastructure,
    deleteInfrastructure,
} from "../../controllers/infrastructure-controller.js";

/* ===== International Exposure ===== */
import {
    addInternationalExposure,
    getInternationalExposureByCollegeId,
    updateInternationalExposure,
    deleteInternationalExposure,
} from "../../controllers/int-exposure-controller.js";



/* ===== Reviews ===== */
import {
    addReview,
    getReviewsByCollegeId,
    updateReviewStatus,
    deleteReview,
} from "../../controllers/review-controller.js";

/* ===== Safety & Security ===== */
import {
    addSafetyAndSecurity,
    getSafetyAndSecurityByCollegeId,
    updateSafetyAndSecurity,
    deleteSafetyAndSecurity,
} from "../../controllers/security-controller.js";

const router = express.Router();

/* ===================== CORE ===================== */
router.post("/add", addCollege);
router.get("/", getColleges);
router.get("/:collegeId", getCollegeByAuthId);

router.put("/:collegeId", updateCollegeByAuthId);

router.delete("/:collegeId", deleteCollegeByAuthId);

//courses

router.post("/courses/add", addCourse);
router.get("courses/college/:collegeId", getCoursesByCollege);
router.put("courses/:courseId", updateCourse);

/* ===================== ACTIVITIES ===================== */
router.post("/activities/add", addActivities);
router.get("/activities/:collegeId", getActivitiesByCollegeId);
router.put("/activities/:collegeId", updateActivities);
router.delete("/activities/:collegeId", deleteActivities);

/* ===================== ALUMNI ===================== */
router.post("/alumni/add", addAlumni);
router.get("/alumni/:collegeId", getAlumniByCollegeId);
router.put("/alumni/:collegeId", updateAlumni);
router.delete("/alumni/:collegeId", deleteAlumni);

/* ===================== AMENITIES ===================== */
router.post("/amenities/add", addAmenities);
router.get("/amenities/:collegeId", getAmenitiesByCollegeId);
router.put("/amenities/:collegeId", updateAmenities);
router.delete("/amenities/:collegeId", deleteAmenities);

/* ===================== OTHER DETAILS ===================== */
router.post("/other-details/add", addOtherDetails);
router.get("/other-details/:collegeId", getOtherDetailsByCollegeId);
router.put("/other-details/:collegeId", updateOtherDetails);
router.delete("/other-details/:collegeId", deleteOtherDetails);

/* ===================== FACULTY ===================== */
router.post("/faculty/add", addFaculty);
router.get("/faculty/:collegeId", getFacultyByCollegeId);
router.put("/faculty/:collegeId", updateFaculty);
router.delete("/faculty/:collegeId", deleteFaculty);

/* ===================== FEES & SCHOLARSHIPS ===================== */
router.post("/fees/add", addFeesAndScholarships);
router.get("/fees/:collegeId", getFeesAndScholarshipsByCollegeId);
router.put("/fees/:collegeId", updateFeesAndScholarships);
router.delete("/fees/:collegeId", deleteFeesAndScholarships);

/* ===================== HOSTEL ===================== */
router.post("/hostel/add", addHostel);
router.get("/hostel/:collegeId", getHostelsByCollegeId);
router.put("/hostel/:id", updateHostel);
router.delete("/hostel/:id", deleteHostel);

/* ===================== INFRASTRUCTURE ===================== */
router.post("/infrastructure/add", addInfrastructure);
router.get("/infrastructure/:collegeId", getInfrastructureByCollegeId);
router.put("/infrastructure/:collegeId", updateInfrastructure);
router.delete("/infrastructure/:collegeId", deleteInfrastructure);

/* ===================== INTERNATIONAL ===================== */
router.post("/international/add", addInternationalExposure);
router.get("/international/:collegeId", getInternationalExposureByCollegeId);
router.put("/international/:collegeId", updateInternationalExposure);
router.delete("/international/:collegeId", deleteInternationalExposure);

/* ===================== REVIEWS ===================== */
router.post("/reviews/add", addReview);
router.get("/reviews/:collegeId", getReviewsByCollegeId);
router.put("/reviews/status/:id", updateReviewStatus);
router.delete("/reviews/:id", deleteReview);

/* ===================== SAFETY ===================== */
router.post("/safety/add", addSafetyAndSecurity);
router.get("/safety/:collegeId", getSafetyAndSecurityByCollegeId);
router.put("/safety/:collegeId", updateSafetyAndSecurity);
router.delete("/safety/:collegeId", deleteSafetyAndSecurity);

/*===================== ADMISSION TIMELINE =============== */
router.post("/admission/add", addAdmissionTimeline);
router.get("/admission/:collegeId", getAdmissionTimelineByCollegeId);
router.put("/admission/:collegeId", updateAdmissionTimeline);
router.delete("/admission/:collegeId", deleteAdmissionTimeline);
export default router;
