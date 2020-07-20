require('dotenv').config();

const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const aylien = require('aylien_textapi');

// Start up an instance of app
const app = express();

// Setup empty JS object to act as endpoint for all routes
projectData = {};

// set aylien API credentials
const aylienapi = new aylien({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY,
});

// const distPath = path.join(__dirname, "..//..//dist");
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

app.use(express.static('dist'));

console.log(__dirname);

// Routes
app.get('/', (req, res) => {
  res.sendFile('dist/index.html');
});

app.get('/api', (req, res) => {
  let { url } = req.query;
  aylienapi.sentiment(url, (err, data) => {
    if (!err) {
      res.send(data);
    }
  });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
});
