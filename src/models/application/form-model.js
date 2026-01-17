// models/form-model.js
import mongoose from "mongoose";

const FormSchema = new mongoose.Schema({
  collegeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'college',
    required: true,
  },

  studId: { 
    type: mongoose.Schema.Types.ObjectId,
    ref: 'students',
    required: true,
  },

  timelineId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'AdmissionTimeline',
    required: true,
  },

  applicationId: { 
    type: mongoose.Schema.Types.ObjectId,
    ref: 'StudentApplication',
    default: null,
  },

  applicationForm: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'pdfs',
    required: true,
  },

  amount: {
    type: Number,
    required: true,
  },

  status: {
    type: String,
    enum: ['Pending', 'Reviewed', 'Accepted', 'Rejected', 'Interview'],
    default: 'Pending',
  },

  interviewNote: {
    type: String,
    default: null
  },

  payment: {
    type: String,
    enum: ['Paid', 'Unpaid'],
    default: 'Unpaid',
  },

  paymentInfo: {
    orderId: { type: String, default: null },
    paymentId: { type: String, default: null },
    signature: { type: String, default: null },
    status: {
      type: String,
      enum: ['created', 'authorized', 'captured', 'failed'],
      default: 'created'
    }
  },
}, { timestamps: true });

const Form = mongoose.model('forms', FormSchema);
export default Form;
