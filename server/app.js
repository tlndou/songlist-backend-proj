// import modules
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const songsRouter = require('./routes/songs');
require("dotenv").config();

//app
const app = express()

//middleware
app.use(morgan("dev"));
app.use(cors({ origin: true , credentials: true }));
app.use("/songs", songsRouter)


//port
const port = process.env.PORT || 8080;

//listener
const server = app.listen(port, () => 
    console.log(`Server is running on ${port}`)
);