const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const bodyparser = require('body-parser');
const port = process.env.PORT || 4000;
const db = require('./config/key').mongoURL
const passport = require('passport');
//middleware
//form data middleware
app.use(bodyparser.urlencoded({
    extended:false
}));

// json body middleware
app.use(bodyparser.json());

//use passport middleware
app.use(passport.initialize());

//bring in the passport strategy
require('./config/passport')(passport);

//corsmiddleware
app.use(cors());

mongoose.connect(db, { useNewUrlParser:true, useUnifiedTopology: true, }).then(()=>{
    console.log("connected to mongodb")
}).catch(err => console.log(`unable to connect to database ${err}`))

app.get('/', (req, res) =>{
    res.send("<h1>hello world</h1>");
} );

//defining the user route
const users = require('./routes/register');
app.use('/users', users);

app.listen(port)

console.log("server started at " + port)
