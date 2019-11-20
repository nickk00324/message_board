const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const db = require('./config/keys').mongoURI;
const users = require('./routes/api/users');
const passport = require('passport');
const app = express();



mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('successfully connected to monogodb')
});

app.use(passport.initialize());
require('./config/passport')(passport)
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.use('/api/users', users);

const PORT = process.env.PORT || 5000;

app.listen( PORT, () => {
    console.log(`connected to port ${PORT}`)
});