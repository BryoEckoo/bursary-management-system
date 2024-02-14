const express = require('express');
const router = express.Router();
const multer = require('multer');
const Document = require('../models/documents');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post('/upload', upload.fields([{ name: 'deathCertificate' }, { name: 'feeStatement' }]), async (req, res) => {
  try {
    const deathCertificateFile = req.files['deathCertificate'][0];
    const feeStatementFile = req.files['feeStatement'][0];

    if (!deathCertificateFile || !feeStatementFile) {
      return res.status(400).json({ message: 'Both files are required' });
    }

    const deathCertificateDocument = new Document({
      deathCertificate: {
        filename: deathCertificateFile.originalname,
        data: deathCertificateFile.buffer,
        contentType: deathCertificateFile.mimetype,
      },
    });

    const feeStatementDocument = new Document({
      feeStatement: {
        filename: feeStatementFile.originalname,
        data: feeStatementFile.buffer,
        contentType: feeStatementFile.mimetype,
      },
    });

    await deathCertificateDocument.save();
    await feeStatementDocument.save();

    return res.status(201).json({ message: 'Both documents saved successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Failed to save documents' });
  }
});

module.exports = router;
