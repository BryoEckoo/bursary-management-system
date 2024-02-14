// const jwtStrategy = new JwtStrategy({
//     secretOrKey: 'YOUR_SECRET_OR_KEY',
//     jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
//   }, function(payload, done) {
//     // Verify the payload and call done with the user if it is valid
//   });
// const ExtractJwt = require('passport-jwt').ExtractJwt;
// const User = require('../models/User');
// const key = process.env.secret;

// const opts = {};
// opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
// opts.secretOrKey = key;

// module.exports = passport => {
//     passport.use(
//         new JwtStrategy(opts, (jwt_payload, done) =>{
//             User.findById(jwt_payload._id).then(user => {
//                 if(user) return done(null,user);
//                 return done(null, false);
//             }).catch(err => {
//                 console.log(err)
//             });
//         })
//     );
// };