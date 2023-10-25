const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
//const passport = require('passport');
const User = require('../models/User'); // Import your User model here

// POST /login - User login
router.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Check if both email and password are provided
  if (!email || !password) {
    return res.status(400).json({
      msg: 'Please provide both email and password.',
      success: false,
    });
  }

  // Find the user by email
  User.findOne({ email })
    .then(user => {
      if (!user) {
        return res.status(404).json({
          msg: 'Email does not exist',
          success: false,
        });
      }

      // Compare the provided password with the hashed password in the database
      bcrypt.compare(password, user.password)
        .then(isMatch => {
          if (isMatch) {
            // If the passwords match, create and sign a JWT token
            const payload = {
              _id: user._id,
              email: user.email,
            };
            const jwtSecretKey = 'your_secret_key_here'; // Replace with your secret key
            jwt.sign(payload, jwtSecretKey, { expiresIn: '1h' }, (err, token) => {
              if (err) {
                return res.status(500).json({
                  msg: 'Failed to create token',
                  success: false,
                });
              }
              res.status(200).json({
                success: true,
                user: user,
                token: `Bearer ${token}`,
                msg: 'Successfully logged in',
              });
            });
          } else {
            // Passwords do not match
            return res.status(401).json({
              msg: 'Incorrect password',
              success: false,
            });
          }
        });
    })
    .catch(error => {
      // Internal server error
      res.status(500).json({
        msg: 'Internal server error',
        success: false,
      });
    });
});

module.exports = router;
