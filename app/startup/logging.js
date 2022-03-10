// import winston error logger
const winston = require('winston');
// import express async errors
require('express-async-errors');
// define errors trigger actions
module.exports = function() {
    winston.exceptions.handle(
        new winston.transports.Console({ colorize: true, prettyPrint: true }),
        new winston.transports.File({ filename: 'uncaughtExceptions.log' })
    );

    process.on('unhandledRejection', ex => {
        throw ex;
    });

    winston.add(
        new winston.transports.File({
            filename: 'logfile.log',
            handleExceptions: true
        })
    );
};