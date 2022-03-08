/* eslint-disable no-unused-vars */

// import express
const express = require('express');

// import path
//const path = require("path");


// create express app
const app = express();

// import body-parser
const bodyParser = require('body-parser');

//Loads the handlebars module
//const handlebars = require('express-handlebars');
// app.set("view engine", "ejs")
var history = require('connect-history-api-fallback');
app.use(express.static("public"));
app.use(express.json());
//instead of app.set('view engine', 'handlebars'); 
/* app.set('view engine', 'hbs');
const hbs = handlebars.create({
    layoutsDir: path.join(__dirname, '..', '/views/PAGES/layouts'),
    partialsDir: path.join(__dirname, '..', '/views/PAGES/partials'),
    defaultLayout: false,
    //new configuration parameter
    extname: '.hbs'
});
// console.log(hbs);
//instead of app.engine('handlebars', handlebars({
app.engine('hbs', hbs.engine);
app.set('views', path.join(__dirname, '..', '/views/PAGES/layouts'));
 */


// For Parse Response Body when files has not send
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }))

// middlewares importation
const ind = require('./middlewares');

// routes inportation
const route = require('./routers/mongodb');


//enables cors
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    // res.setHeader('Access-Control-Allow-Credentials', true);

    next();
});

// set app url manager context
app.use(express.urlencoded({ extended: true }));

// For Vue.js Url Hastag remove
app.use(history());

//use following routes in application
app.use('/in', route);

/* console.table(app._router.stack // registered routes
    .filter(r => r.route) // take out all the middleware
    .map(r => r.route.path) // get all the paths
) */

module.exports = app;