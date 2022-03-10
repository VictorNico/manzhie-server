/* eslint-disable no-unused-vars */

// import express
const express = require('express');


// create express app
const app = express();

// import body-parser
const bodyParser = require('body-parser');
// For Parse Response Body when files has not send
app.use(bodyParser.json());
// import connect-history-api-fallback
var history = require('connect-history-api-fallback');

// For Vue.js Url Hastag remove
app.use(history());

// set app url manager context
app.use(express.urlencoded({ extended: true }));

// set static public directory
app.use(express.static("public"));

//enables cors
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    // res.setHeader('Access-Control-Allow-Credentials', true);

    next();
});


// define logging trigger actions
require('./startup/logging.js')();
//use following routes in application
require('./startup/routes.js')(app);
// define not found trigger
app.get('*', (req, res) => { res.send('hahahah') });

module.exports = app;