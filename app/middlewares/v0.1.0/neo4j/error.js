// import winston
const winston = require('winston');
// define request throwed function
module.exports = function(err, req, res, next) {
    winston.error(err.message, err);

    // error
    // warn
    // info
    // verbose
    // debug 
    // silly

    res.status(500).send('Something failed.');
}