// models/course_exam_model.js
import mongoose from "mongoose";

const CourseExamSchema = new mongoose.Schema(
  {
    courseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },

    examName: { type: String, required: true },

    marksType: {
      type: String,
      enum: ["Rank", "Percentile", "Percentage"],
      required: true,
    },

    minMarks: { type: Number, required: true },
    maxMarks: { type: Number, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.CourseExam ||
  mongoose.model("CourseExam", CourseExamSchema);
