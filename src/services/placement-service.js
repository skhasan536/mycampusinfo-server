import Placement from "../models/school_details/placement_model.js";
import College from "../models/school_details/college_model.js";
import mongoose from "mongoose";

export const addPlacementsService = async (collegeId, placements) => {
  if (!Array.isArray(placements) || placements.length === 0) {
    throw { status: 400, message: "Placements must be a non-empty array." };
  }

  const college = await College.findById(collegeId);
  if (!college) throw { status: 404, message: "College not found" };

  const saved = [];

  for (const p of placements) {
    const { year, totalStudents, placedStudents, highestPackage, averagePackage, topRecruiters } = p;

    if (!year || !totalStudents || !placedStudents || !highestPackage || !averagePackage) {
      throw { status: 400, message: "Missing required fields in placement entry." };
    }

    const newPlacement = new Placement({
      collegeId,
      year,
      totalStudents,
      placedStudents,
      highestPackage,
      averagePackage,
      topRecruiters,
    });

    const savedPlacement = await newPlacement.save();
    saved.push(savedPlacement);
  }

  return saved;
};

export const getPlacementsByCollegeService = async (collegeId) => {
  if (!mongoose.Types.ObjectId.isValid(collegeId)) {
    throw { status: 400, message: "Invalid College ID" };
  }

  const college = await College.findById(collegeId);
  if (!college) throw { status: 404, message: "College not found" };

  const placements = await Placement.find({ collegeId }).sort({ year: -1 });
  if (placements.length === 0) throw { status: 404, message: "No placement data found." };

  return placements;
};

export const updatePlacementService = async (placementId, data) => {
  const updated = await Placement.findByIdAndUpdate(placementId, data, { new: true });
  if (!updated) throw { status: 404, message: "Placement record not found" };

  return updated;
};
