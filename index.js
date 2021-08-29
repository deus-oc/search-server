const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');

const connectDB = require('./config/db');
dotenv.config({path: './config/config.env'});


connectDB();
const search = require('./routes/search');
const app = express();
app.use(cors());

app.use('/search', search);


const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));