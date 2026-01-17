// models/scholarship_model.js
import mongoose from "mongoose";

const ScholarshipSchema = new mongoose.Schema(
  {
    collegeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "college",
      required: true,
    },

    name: { type: String, required: true },
    amount: { type: Number, required: true, min: 0 },

    type: {
      type: String,
      enum: [
        "Merit",
        "Socio-economic",
        "Cultural",
        "Sports",
        "Community",
        "Academic Excellence",
        "Other",
      ],
      required: true,
    },

    documentsRequired: {
      type: [String],
      enum: [
        "Income Certificate",
        "Caste Certificate",
        "Aadhar Card",
        "Previous Marksheet",
        "Bonafide Certificate",
        "Sports Achievement Certificate",
        "Domicile Certificate",
        "Other",
      ],
    },
  },
  { timestamps: true }
);

export default mongoose.models.Scholarship ||
  mongoose.model("Scholarship", ScholarshipSchema);
