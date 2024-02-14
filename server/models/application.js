const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  studentFullName:String,
  gender: String,
  parentName: String,
  occupation: String,
  userId: String,
  userPhone: String,
  userEmail: String,
  ward: String,
  location: String,
  subLocation: String,
  category: String,
  instName: String,
  currentClass: String,
  admissionNo: String,
  sponsorInst: String,
  sponsorRelationship: String,
  sponsorContact: String,
});

const Application = mongoose.model('Application', applicationSchema);

module.exports = Application;