const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  gender: String,
  parentalStatus: String,
  userId: String,
  userPhone: String,
  userEmail: String,
  specialNeed: String,
  category: String,
  instName: String,
  instTelephone: String,
  currentClass: String,
  admissionNo: String,
  bankName: String,
  sponsorName: String,
  sponsorRelation: String,
  sponsorContact: String,
  deathCertificate: String, // You can store the file path or URL
  feeStatement: String, // You can store the file path or URL
});

const Application = mongoose.model('Application', applicationSchema);

module.exports = Application;