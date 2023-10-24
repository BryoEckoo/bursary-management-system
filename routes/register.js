const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/User');
const saltRounds = 10;

// Registering user
router.post('/register', async (req, res) => {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return res.status(401).json({ err: 'User already exists' });
    }
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const user = new User({
        email,
        password: hashedPassword
    });
    await user.save();
    res.status(201).json({ user, msg: 'Registered successfully' });
});

module.exports = router;
