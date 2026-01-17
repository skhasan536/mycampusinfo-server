// models/course-model.js
import mongoose from "mongoose";

const CourseSchema = new mongoose.Schema(
  {
    collegeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "college",
      required: true,
    },

    courseName: { type: String, required: true },
    duration: { type: String, required: true },
    intake: { type: Number, required: true },
    category: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.Course || mongoose.model("Course", CourseSchema);
