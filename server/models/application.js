const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  gender: String,
  parentalStatus: String,
  parentName: String,
  occupation: String,
  familyIncome: String,
  userId: String,
  userPhone: String,
  userEmail: String,
  specialNeed: String,
  ward: String,
  category: String,
  instTelephone: String,
  instType: String,
  instName: String,
  currentClass: String,
  admissionNo: String,
  bankName: String,
  sponsorInst: String,
  sponsorRelation: String,
  sponsorContact: String,
  deathCertificate: String, // You can store the file path or URL
  feeStatement: String, // You can store the file path or URL
});

const Application = mongoose.model('Application', applicationSchema);

module.exports = Application;