const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port =  process.env.PORT || 5000;

// cors - Cross Origin Resource Sharing
app.use(cors());
app.use(express.json());

// ATLAS_URI is the connection URI from mongoDB Atlas
// preferably change the uri in .env file.
const uri = process.env.ATLAS_URI;

// Before React JS v 6.0.6 - mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
mongoose.connect( uri, { } );
    
// Set up connection with mongoDB using mongoose connection method
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB connection established successfully");
})

// include routes for incoming requests
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

// use '/exercise' url in the tab bar for pages requesting exercise router
app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server is running on port : ${port}`);
})