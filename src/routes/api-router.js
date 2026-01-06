import express from "express";
import { authRoutes, collegeRoutes, userRoutes, applicationRoutes } from './api-routes/index.js';

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/colleges", collegeRoutes);
router.use("/users", userRoutes);
router.use("/application", applicationRoutes);

export default router;