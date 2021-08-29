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
if(process.env.NODE_ENV  === 'development') {
  app.use(morgan('dev'));
}

app.use(cors());

app.use('/search', search);


// if (process.env.NODE_ENV === 'production') {
//   // Serve any static files
//   app.use(express.static('client/build'));

//   // Handle React routing, return all requests to React app
//   app.get('*', function(req, res) {
//       res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'));
//   });
// }

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));