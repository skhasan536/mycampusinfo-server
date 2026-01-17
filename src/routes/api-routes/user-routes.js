import express from "express";

import ensureAuthenticated from "../../middlewares/validate-token-middleware.js";
import {
    addToShortlist,
    getShortlistedSchools,
    removeShortlist,
    getShortlistCount,

} from "../../controllers/shortlist-controllers.js";
import {
  addPreference,
  updatePreference,
  getPreference,
    
} from "../../controllers/pref-controllers.js";
import {
  generateAndSaveStudentPdf,
   viewStudentPDF,
   listStudentPdfs,
  downloadStudentPdf,
} from "../../controllers/student-pdf-controllers.js";
import {
    addStudent,
    updateStudent,
    deleteStudent,
    getStudent
} from "../../controllers/user-controllers.js";

const router = express.Router();


router.post('/', ensureAuthenticated, addStudent);
router.get('/:authId', ensureAuthenticated, getStudent);
router.put('/:authId', ensureAuthenticated, updateStudent);
router.delete('/', deleteStudent);

router.post("/shortlist", addToShortlist);
router.get("/shortlist/:authId", getShortlistedSchools);
router.get("/shortlist/count/:authId", getShortlistCount);
router.post("/shortlist/remove", removeShortlist);

router.post("/preferences/", addPreference);
router.put("/preferences/:studId", updatePreference);
router.get("/preferences/:studId", getPreference);


router.post("/pdf/generate/:studId/:applicationId", generateAndSaveStudentPdf);
router.get("/pdf/download/:studId/:applicationId", downloadStudentPdf);
router.get("/pdf/view/:studId/:applicationId", viewStudentPDF);

router.get("/list/:studId", listStudentPdfs);

export default router;