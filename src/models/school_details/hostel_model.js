import mongoose from "mongoose";

const HostelSchema = new mongoose.Schema(
  {
    collegeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "college",
      required: true
    },
    hostelName: {
      type: String,
      required: true
    },
    hostelAmenities: {
      type: [String],
      required: true
    },
    campusAmenities:{
      type:[String],
      required:true
    },
    hostelInfo: {
      type: String,
      required: true
    },
    photos: {
      type: [String] 
    },
    videos: {
      type: [String] 
    }
  },
  { timestamps: true }
);

const Hostel = mongoose.model("Hostel", HostelSchema);
export default Hostel;