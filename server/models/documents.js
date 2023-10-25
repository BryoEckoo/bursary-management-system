const mongoose = require('mongoose');

// Create a schema for your documents
const documentSchema = new mongoose.Schema({
  deathCertificate: {
    filename: String,
    data: Buffer,
    contentType: String,
  },
  feeStatement: {
    filename: String,
    data: Buffer,
    contentType: String,
  },
  // Add any other fields you need to store with the documents
});

// Create a model using the schema
const Document = mongoose.model('Document', documentSchema);

module.exports = Document;
