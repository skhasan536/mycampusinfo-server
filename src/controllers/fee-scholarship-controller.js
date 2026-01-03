import {
    createFeesAndScholarshipsService,
    getFeesAndScholarshipsByCollegeIdService,
    updateFeesAndScholarshipsByCollegeIdService,
    deleteFeesAndScholarshipsByCollegeIdService,
} from "../services/fee-scholarship-service.js"

export const addFeesAndScholarships = async (req, res) => {
    try {
        const data = await createFeesAndScholarshipsService(req.body);
        res.status(201).json({ success: true, message: "Fees & Scholarships added", data });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

export const getFeesAndScholarshipsByCollegeId = async (req, res) => {
    try {
        const data = await getFeesAndScholarshipsByCollegeIdService(req.params.collegeId);
        if (!data) return res.status(404).json({ success: false, message: "Not found" });
        res.json({ success: true, data });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

export const updateFeesAndScholarships = async (req, res) => {
    try {
        const data = await updateFeesAndScholarshipsByCollegeIdService(req.params.collegeId, req.body);
        if (!data) return res.status(404).json({ success: false, message: "Not found" });
        res.json({ success: true, message: "Fees & Scholarships updated", data });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

export const deleteFeesAndScholarships = async (req, res) => {
    try {
        const data = await deleteFeesAndScholarshipsByCollegeIdService(req.params.collegeId);
        if (!data) return res.status(404).json({ success: false, message: "Not found" });
        res.json({ success: true, message: "Fees & Scholarships deleted" });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};
