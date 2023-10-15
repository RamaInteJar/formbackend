const mongoose = require('mongoose');

const FacultySchema = new mongoose.Schema(
  {
    staffName: {
      type: String,
      required: true,
    },
    requestingDate: {
      type: String,
      required: true,
    },
    subNeed: {
      type: Boolean,
      required: true,
    },
    fullDay: {
      type: Boolean,
    },
    times: {
      type: String,
      enum: ['AM', 'PM'],
    },
    AfterSchoolDuty: {
      type: Boolean,
      required: true,
    },
    duty: {
      type: String,
      required: true,
    },
    reason: {
      type: String,
      enum: ['Personal', 'Professional', 'Others'],
      required: true,
    },
    staffSignature: {
      type: String,
      required: true,
    }
  },
  { timestamps: true } //created_at and updated_at
);

const Request = mongoose.model('Request', FacultySchema);

module.exports = Request;
