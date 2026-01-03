import mongoose from 'mongoose';

// This sub-schema defines a single admission timeline entry
const TimelineEntrySchema = new mongoose.Schema({
    admissionStartDate: {
        type: Date,
        required: true
    },
    admissionEndDate: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        enum: ['Ongoing', 'Ended', 'Starting Soon'],
        required: true
    },
    applicationFee: {
        type: Number,
        required: true
    },
    documentsRequired: {
        type: [String],
        default: []
    },
    eligibility: {
        courseName: {
            type: String,
            required: true,
            description: "The course for which this admission timeline applies."
        },
        minQualification: {
            type: String,
            trim: true,
            description: "e.g.,diploma, ssc pass"
        },
        otherInfo: {
            type: String,
            trim: true,
            description: "Any other eligibility information."
        }
    }
});

// This main schema links the list of timelines to a single school
const AdmissionTimelineSchema = new mongoose.Schema({
    schoolId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'schools',
        required: true,
        unique: true
    },
    // The main field is now an array of the sub-schema defined above
    timelines: [TimelineEntrySchema]
}, { timestamps: true });

const AdmissionTimeline = mongoose.model('AdmissionTimeline', AdmissionTimelineSchema);

export default AdmissionTimeline;