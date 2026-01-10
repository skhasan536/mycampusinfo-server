import express from "express";
import {
  getFormsByStudent,
  getFormsBySchool,
  getFormsByTimeline,
  trackForm,
  getFormDetails,
  submitForm,
  getFormsByApplication,
  submitBulkForms,
  updateFormStatus,
  deleteForm,
  isFormApplied,
} from "../../controllers/forms-controllers.js";

import ensureAuthenticated from "../../middlewares/validate-token-middleware.js";

const router = express.Router();

/**
 * Get all forms submitted by a student (for all their family applications)
 * Optional query param: ?applicationId=<specific_application_id>
 */
router.get("/student/:studId", getFormsByStudent);

/**
 * Get all forms submitted to a timeline (for all their family applications)
 * Optional query param: ?applicationId=<specific_application_id>
 */
router.get("/timeline/:timelineId", getFormsByTimeline);

/**
 * Get all forms received by a school
 */
router.get("/school/:collegeId", getFormsBySchool);

router.get("/application/:applicationId", getFormsByApplication);
/**
 * Track a specific form (used by both parent and school)
 */
router.get("/track/:formId", trackForm);

/**
 * Check if a form is applied
 * Optional query param: ?applicationId=<specific_application_id>
 */
router.get("/is-applied/:studId/:collegeId", isFormApplied);

/**
 * Get form details (protected route)
 */
router.get("/:formId", ensureAuthenticated, getFormDetails);

/**
 * Bulk form submission
 * Body: { forms: [collegeId1, collegeId2, ...], applicationId?: "<application_id>" }
 */
router.post("/bulk-forms/:studId/:formId", submitBulkForms);

/**
 * Submit a single form for a specific student (and optional application)
 * Optional: send applicationId in body or query (?applicationId=<id>)
 */
router.post("/:collegeId/:studId/:timelineId/:formId", submitForm);

/**
 * Update form status (Interview / Accepted / etc.)
 */
router.put("/:formId", updateFormStatus);

/**
 * Delete a form (protected)
 */
router.delete("/:formId", ensureAuthenticated, deleteForm);

export default router;
