// /**
//  * Career Model
//  * Schema for storing career / job application submissions
//  */

// import mongoose from 'mongoose';

// const careerSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: [true, 'Name is required'],
//     trim: true,
//     minlength: [2, 'Name must be at least 2 characters'],
//     maxlength: [100, 'Name cannot exceed 100 characters'],
//   },
//   email: {
//     type: String,
//     required: [true, 'Email is required'],
//     trim: true,
//     lowercase: true,
//     match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email'],
//   },
//   mobile: {
//     type: String,
//     required: [true, 'Mobile number is required'],
//     trim: true,
//     minlength: [10, 'Mobile must be at least 10 digits'],
//     maxlength: [20, 'Mobile cannot exceed 20 digits'],
//   },
//   subject: {
//     type: String,
//     required: [true, 'Subject is required'],
//     trim: true,
//     maxlength: [200, 'Subject cannot exceed 200 characters'],
//   },
//   age: {
//     type: String,
//     required: [true, 'Age is required'],
//     trim: true,
//   },
//   experience: {
//     type: String,
//     required: [true, 'Experience is required'],
//     trim: true,
//     maxlength: [200, 'Experience cannot exceed 200 characters'],
//   },
//   location: {
//     type: String,
//     required: [true, 'Location is required'],
//     trim: true,
//     maxlength: [200, 'Location cannot exceed 200 characters'],
//   },
//   applyFor: {
//     type: String,
//     required: [true, 'Please select a position'],
//     enum: {
//       values: ['Client Servicing Executive', 'Business Development Executive', 'Graphic Designer', 'Web Developer', 'App Developer', 'Other'],
//       message: 'Invalid position selected',
//     },
//   },
//   resumeUrl: { type: String, default: '' },
//   resumeOriginalName: { type: String, default: '' },
//   status: {
//     type: String,
//     enum: ['new', 'reviewing', 'shortlisted', 'rejected'],
//     default: 'new',
//   },
// }, { timestamps: true });

// careerSchema.index({ createdAt: -1 });
// careerSchema.index({ email: 1 });
// careerSchema.index({ status: 1 });
// careerSchema.index({ applyFor: 1 });

// careerSchema.methods.toJSON = function () {
//   const obj = this.toObject();
//   delete obj.__v;
//   return obj;
// };

// careerSchema.statics.hasRecentApplication = async function (email, applyFor) {
//   const recent = await this.findOne({
//     email,
//     applyFor,
//     createdAt: { $gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) },
//   });
//   return !!recent;
// };

// const Career = mongoose.model('Career', careerSchema);
// export default Career;
















































import mongoose from 'mongoose';

const careerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    lowercase: true,
    trim: true,
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email'],
  },
  mobile: {
    type: String,
    required: [true, 'Mobile number is required'],
    trim: true,
  },
  subject: {
    type: String,
    required: [true, 'Subject is required'],
    trim: true,
  },
  age: {
    type: String,
    required: [true, 'Age is required'],
  },
  experience: {
    type: String,
    required: [true, 'Experience is required'],
  },
  location: {
    type: String,
    required: [true, 'Location is required'],
  },
  applyFor: {
    type: String,
    required: [true, 'Please select a position'],
    // Remove the enum validator or make it dynamic
    // enum: {...} // COMMENT THIS OUT IF IT EXISTS
  },
  resumeUrl: {
    type: String,
    required: [true, 'Resume is required'],
  },
  resumeOriginalName: {
    type: String,
  },
  status: {
    type: String,
    enum: ['new', 'reviewing', 'shortlisted', 'rejected'],
    default: 'new',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Add index for better query performance
careerSchema.index({ email: 1, applyFor: 1, createdAt: -1 });

// Static method to check recent applications
careerSchema.statics.hasRecentApplication = async function(email, position, days = 7) {
  const recentDate = new Date();
  recentDate.setDate(recentDate.getDate() - days);
  
  const count = await this.countDocuments({
    email: email.toLowerCase().trim(),
    applyFor: position,
    createdAt: { $gte: recentDate }
  });
  
  return count > 0;
};

export default mongoose.model('Career', careerSchema);