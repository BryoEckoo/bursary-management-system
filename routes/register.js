const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const key = require('../config/key').secret
const User = require('../models/User');
const saltRounds = 10;

//registering user
router.post('/register', async (req, res) => {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return res.json({ err: 'user already exists' }).status(401);
    }
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const user = new User({
        email,
        password: hashedPassword
    })
    await user.save();
    res.json(user).status(201);
});

//singing in user
// router.post('/login', async (req, res) => {
//     const { email, password } = req.body;
//     const { _id, password: userPassword } = await User.findOne({ email });
//     const match = await bcrypt.compare(password, userPassword);
//     if (match) {
//       const token = await jwt.sign({ email, _id }, SECRET);
//       return res.json({ token }); // Use return to ensure response is sent
//     }
//     return res.status(401).json({ error: 'Invalid username or password' });
//   });
  
router.post('/login', (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            msg: "Please provide both email and password.",
            success: false
        });
    }

    User.findOne({ email })
        .then(user => {
            if (!user) {
                return res.status(404).json({
                    msg: "Email does not exist",
                    success: false
                });
            }

            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if (isMatch) {
                        const payload = {
                            _id: user._id,
                            email: user.email
                        };

                        jwt.sign(payload, key, { expiresIn: '1h' }, (err, token) => {
                            if (err) {
                                return res.status(500).json({
                                    msg: "Failed to create token",
                                    success: false
                                });
                            }

                            res.status(200).json({
                                success: true,
                                user: user,
                                token: `Bearer ${token}`,
                                msg: "Successfully logged in"
                            });
                        });
                    } else {
                        return res.status(401).json({
                            msg: "Incorrect password",
                            success: false
                        });
                    }
                });
        })
        .catch(error => {
            res.status(500).json({
                msg: "Internal server error",
                success: false
            });
        });
});





module.exports = router;
