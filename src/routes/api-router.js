import express from "express";
import { authRoutes, collegeRoutes, userRoutes, applicationRoutes } from './api-routes/index.js';

const router = express.Router();

router.use("/auth", authRoutes);
app.use("/colleges", collegeRoutes);
app.use("/users", userRoutes);
app.use("/application", applicationRoutes);

export default router;