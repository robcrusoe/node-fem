/* NodeJS core imports */
const path = require('path');

/* 3rd party imports */
const express = require('express');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');

/* Registering our app */
const app = express();

/* Registering for our static files */
app.use(express.static(path.join(__dirname, 'public')));

/* Registering a (req) body-parser */
app.use(bodyParser.urlencoded({ extended: false }));

/* Registering our app favicon */
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

/* Registering a default middleware */
app.use('/', (req, res, next) => {
  res.send('<h1>Hello, World!</h1>');
});
app.listen(3000);
