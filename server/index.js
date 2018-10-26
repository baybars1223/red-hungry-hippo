const express = require('express');
const PORT = process.env.PORT || 3000;
const morgan = require('morgan');
const bodyParse = require('body-parser');
const path = require('path');
const routes = require('./routes');
const db = require('../database/index.js');
require('dotenv').config()

const app = express();

app.use(express.static(path.join(__dirname, '../client')));
app.use(express.static(path.join(__dirname, '../node_modules')));
// app.use(morgan());
app.use('/api', routes);

const parseJson = bodyParse.json();

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
