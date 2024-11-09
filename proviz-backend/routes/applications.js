const express = require('express');
const router = express.Router();
const Application = require('../models/Application');

// Submit new application
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, statement } = req.body;

    // Basic validation
    if (!name || !email || !phone || !statement) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Check for existing application with same email
    const existingApplication = await Application.findOne({ email });
    if (existingApplication) {
      return res.status(400).json({ message: 'An application with this email already exists' });
    }

    const application = new Application({
      name,
      email,
      phone,
      statement
    });

    await application.save();

    res.status(201).json({
      message: 'Application submitted successfully',
      applicationId: application._id
    });
  } catch (error) {
    console.error('Application submission error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router; 