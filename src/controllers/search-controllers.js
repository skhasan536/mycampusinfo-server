import { searchCollegesService } from '../services/search-services.js';
import { toCollegeCardModels } from '../utils/utils.js';

export const searchColleges = async (req, res) => {

  try {
    let { search, cities, streams, state, collegeMode, genderType, feeRange, page = 1, limit = 10 } = req.query;

    page = parseInt(page);
    limit = parseInt(limit);
    const result = await searchCollegesService({ search, cities, streams, state, collegeMode, genderType, feeRange, page, limit });
    if (!result.data.length) {
      return res.status(404).json({ status: "failed", message: "No colleges found for the given search." });
    }

    const mappedColleges = await toCollegeCardModels(result.data);

    res.status(200).json({
      status: "success",
      message: "Colleges found for your search",
      data: mappedColleges,
      pagination: result.pagination
    });

  } catch (error) {
    res.status(error.status || 500).json({ status: "failed", message: error.message || "Internal Server Error" });
  }

};