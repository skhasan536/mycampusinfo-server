import mongoose from "mongoose";

const PlacementSchema = new mongoose.Schema(
  {
    collegeId: { type: mongoose.Schema.Types.ObjectId, ref: "college", required: true },

    year: { type: Number, required: true },

    totalStudents: { type: Number, required: true },
    placedStudents: { type: Number, required: true },

    highestPackage: { type: Number, required: true },
    averagePackage: { type: Number, required: true },

    topRecruiters: { type: [String], default: [] }
  },
  { timestamps: true }
);

const Placement = mongoose.models.Placement || mongoose.model("Placement", PlacementSchema);
export default Placement;
