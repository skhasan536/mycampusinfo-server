import mongoose from "mongoose";

const PreferenceSchema = new mongoose.Schema(
    {
        collegeId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "college",
            required: true
        },
        state: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
       
        preferredStream: {
            type: String,
            required: true,
            enum: ['Engineering', 'Medical']
        },
        interests: {
            type: String,
            enum: [
                'Focusing on Academics',
                'Focuses on Practical Learning',
                'Focuses on Theoretical Learning',
                'Empowering in Sports',
                'Empowering in Arts',
                'Special Focus on Mathematics',
                'Special Focus on Science',
                'Special Focus on Physical Education',
                'Leadership Development',
                'STEM Activities',
                'Cultural Education',
                'Technology Integration',
                'Environmental Awareness'
            ],
        },
        collegeType: {
            type: String,
            required: true,
            enum: ['convent', 'private', 'government']
        },
        shifts: { type: [String], required: true, enum: ['morning', 'afternoon', 'night college', 'online'] },

    },
    {
        timestamps: true
    }
);

const Preference = mongoose.model("preferences", PreferenceSchema);
export default Preference;