const mongoose = require('mongoose');

const HELP_OPTIONS = [
  'Learning Programs',
  'Staffing & Hiring',
  'Product Demo',
  'Partnership & Alliances',
  'Career Opportunities',
  'Something Else',
];

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
      maxlength: 120,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, 'Enter a valid email'],
    },
    company: {
      type: String,
      trim: true,
      maxlength: 160,
      default: '',
    },
    topic: {
      type: String,
      enum: HELP_OPTIONS,
      default: 'Learning Programs',
    },
    message: {
      type: String,
      required: [true, 'Message is required'],
      trim: true,
      maxlength: 3000,
    },
    // Basic metadata, useful later for support/debugging
    ip: { type: String },
    userAgent: { type: String },
  },
  { timestamps: true } // adds createdAt / updatedAt
);

module.exports = mongoose.model('Contact', contactSchema);
module.exports.HELP_OPTIONS = HELP_OPTIONS;