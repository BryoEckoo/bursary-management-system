const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const bodyparser = require('body-parser');
const passport = require('passport');
require('dotenv').config();
const port = process.env.PORT || 4000;
const db = process.env.mongoURL;

// Middleware
// JSON body middleware should come first
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(cors());
app.use(cors({
  origin: 'https://bursary-management-system-frontend.vercel.app'
}));

// Use passport middleware and define passport strategy
app.use(passport.initialize());
require('./config/passport')(passport);

// Connect to the MongoDB database
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch(err => {
    console.log(`Unable to connect to the database: ${err}`);
  });

// Define and use routes
const users = require('./routes/register');
app.use('/users', users);

const user = require('./routes/login');
app.use('/user', user);

const applications = require('./routes/application');
app.use('/applications', applications);

const documents = require('./routes/documents');
app.use('/documents', documents);

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
