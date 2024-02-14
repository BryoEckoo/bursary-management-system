const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const bodyparser = require('body-parser');
// const passport = require('passport');
require('dotenv').config();
const PORT = 7000;

// Middleware
// JSON body middleware should come first
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(cors());

app.use(cors({
  origin: '*',  // Update with the correct origin of your Vue.js app
  credentials: true,
}));


 

// // Use passport middleware and define passport strategy
// app.use(passport.initialize());
// require('./config/passport')(passport);

// Connect to the MongoDB database
mongoose.connect('mongodb+srv://brian:1234@cluster0.bkbs5ip.mongodb.net/bursary-system?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch(err => {
    console.log(`Unable to connect to the database: ${err}`);
  });

// Define and use routes
const register = require('./routes/register');
app.use('/', register);

const login = require('./routes/login');
app.use('/', login);

const applications = require('./routes/application');
app.use('/applications', applications);

// const documents = require('./routes/documents');
// app.use('/documents', documents);

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
