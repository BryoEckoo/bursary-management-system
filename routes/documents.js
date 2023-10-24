const express = require('express');
const router = express.Router();
const multer = require('multer');
const Document = require('../models/documents'); // Replace with your Document model

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post('/upload', upload.fields([{ name: 'deathCertificate' }, { name: 'feeStatement' }]), (req, res) => {
  const deathCertificateFile = req.files['deathCertificate'][0];
  const feeStatementFile = req.files['feeStatement'][0];

  if (!deathCertificateFile || !feeStatementFile) {
    return res.status(400).json({ message: 'Both files are required' });
  }

  const deathCertificateDocument = new Document({
    filename: deathCertificateFile.originalname,
    data: deathCertificateFile.buffer,
    contentType: deathCertificateFile.mimetype,
  });

  const feeStatementDocument = new Document({
    filename: feeStatementFile.originalname,
    data: feeStatementFile.buffer,
    contentType: feeStatementFile.mimetype,
  });

  deathCertificateDocument.save((err) => {
    if (err) {
      return res.status(500).json({ message: 'Failed to save death certificate' });
    }

    feeStatementDocument.save((err) => {
      if (err) {
        return res.status(500).json({ message: 'Failed to save fee statement' });
      }

      return res.status(201).json({ message: 'Both documents saved successfully' });
    });
  });
});

module.exports = router;
