import Review from '../models/school_details/review_model.js';
import Amenities from '../models/school_details/amenities_model.js';
// import { getSchoolScoreById } from '../controllers/school-controllers.js';

export const toCollegeCardModel = (college, ratings = 0, amenities = []) => {
    return {
        collegeId: college._id,
        name: college.name,
        feeRange: college.feeRange,
        location: `${college.city}, ${college.state}`,
        board: college.board,
        genderType: college.genderType,
        shifts: college.shifts,
        collegeMode: college.collegeMode,
        latitude: college.latitude,
        longitude: college.longitude,
        // score: schoolScore || 0,
        coverImage: college.logo ?? (college.photos?.length > 0 ? college.photos[0] : null),
        amenities,
        ratings,
    };
};

export const toCollegeCardModels = async (colleges = []) => {
    let mapped = Promise.all(
        colleges.map(async (college) => {
            // const score = await getSchoolScoreById(college._id);
            const review = await Review.findOne({ collegeId: college._id });
            const amenities = await Amenities.findOne({ collegeId: college._id });
            return toCollegeCardModel(college, review?.ratings || 0, amenities?.predefinedAmenities || amenities?.customAmenities || []);
        })
    );
    return mapped;
};
