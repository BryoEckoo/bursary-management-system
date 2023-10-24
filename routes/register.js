const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const key = require('../config/key').secret
const User = require('../models/User');

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

    // // Check for a unique email
    // User.findOne({ email: email }).then((user) => {
    //     if (user) {
    //         return res.status(400).json({
    //             msg: "email exists"
    //         });
    //     } else {
    //         // Register the user if the data is valid
    //         const newUser = new User({
    //             email,
    //             password
    //         });
    //         }
    //          // Hash the password
    //          try{
    //             bcrypt.genSalt(10, (err, salt) => {
    //                 if (err) throw err;
    //                 bcrypt.hash(newUser.password, salt, (err, hash) => {
    //                     if (err) throw err;
    //                     newUser.password = hash;
    //                     newUser.save().then((User) => {
    //                         return res.status(201).json({
    //                             success: true,
    //                             msg: "user registered"
    //                         });
    //                     });
    //                 })
    //                 User.create({email, password:hashPassword})
    
    //             });
    //          }catch (error){

    //         }
             
    //     }
    // });
});

//singing in user
router.post('/login', async (req, res) => {
    const { name, password } = req.body;
    const { _id, password: userPassword } = await User.findOne({ email });
    const match = await bcrypt.compare(password, userPassword);
    if (match) {
      const token = await jwt.sign({ email, _id }, SECRET);
      return res.json({ token });
    }
    res.status(401);
  });
// router.post('/login', (req,res) => {
//     User.findOne({ email: req.body.email}).then(user => {
//         if(!user) {
//             return res.status(404).json({
//                 msg:"email does not exist",
//                 success:false
//             });
//         }
//         //if user exists, compare the passwords
//         bcrypt.compare(req.body.password, user.password).then(isMatch => {
//             if(isMatch){
//                 //user's password is correct and we need to send the JSON token for that user
//                 const payload = {
//                     _id: user._id,
//                     email: user.email
//                 }
//                 jwt.sign(payload, key, { expiresIn: 604800}, (err, token) => {
//                     res.status(200).json({
//                         success: true,
//                         user: user,
//                         token: `Bearer ${token}`,
//                         msg:"succesfully loged in"
//                     })
//                 })
//             }else{
//                 return res.status(404).json({
//                     msg:"Incorrect password",
//                     success:false
//                 });
//             }
//         })
//     })
// })

//return user data
router.get('/profile', passport.authenticate('jwt', {session: false}), (req, res) =>{
    return res.json({
        user: req.user
    });
});



module.exports = router;
