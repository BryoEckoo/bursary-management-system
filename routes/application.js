const express = require('express');
const router = express.Router();
const Application = require('../models/application');

// Handle form submission
router.post('/submit', async (req, res) => {
  try {
    const newApplication = new Application(req.body);
    await newApplication.save();
    res.status(201).json({ success: true, message: 'Application submitted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error submitting application' });
  }
});

module.exports = router;
