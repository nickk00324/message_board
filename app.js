const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const db = require('./config/keys').mongoURI;
const passport = require('passport');
const app = express();

const users = require("./routes/api/users");
const topics = require('./routes/api/topics');
const posts = require('./routes/api/posts');
const comments = require('./routes/api/comments');

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('successfully connected to monogodb')
});

app.use(passport.initialize());
require('./config/passport')(passport)

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.use('/api/users', users);
app.use('/api/topics', topics);
app.use('/api/posts', posts);
app.use('/api/comments', comments);

const PORT = process.env.PORT || 5000;

app.listen( PORT, () => {
    console.log(`connected to port ${PORT}`)
});