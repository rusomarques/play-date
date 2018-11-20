const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = express.json();
const cors = require('cors');
const conf = require('./config.js');
const router = require('./router.js');
require('dotenv').config();

const app = express();

app.use(cookieParser());
app.use(cors());
app.use(bodyParser);
app.use(express.static(conf.clientPath));
app.use(router);

module.exports = app;
