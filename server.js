// protocole http and application setting importation
const http = require('http');
const app = require('./app/app');

// check node environment
var env = process.env.NODE_ENV || 'development';
if ('development' == env) {
    // configure stuff here
    require('dotenv').config()
}

// define normalize port function  use parse port to good integer format
const normalizePort = val => {
    const port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }
    if (port >= 0) {
        return port;
    }
    return false;
};

// normalied port from node environment config 
const port = normalizePort(process.env.PORT || '3000');
// set application port 
app.set('port', port);

// definition of error handler method for server error
const errorHandler = error => {
    if (error.syscall !== 'listen') {
        throw error;
    }
    const address = server.address();
    const bind = typeof address === 'string' ? 'pipe ' + address : 'port: ' + port;
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges.');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use.');
            process.exit(1);
            break;
        default:
            throw error;
    }
};

// create http instance server based on express app previously import
const server = http.createServer(app);

// set trigger error handler method to server
server.on('error', errorHandler);

// define trigger listening address and port callback function 
server.on('listening', () => {
    const address = server.address();
    const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + port;
    console.log('Listening on ' + bind);
    console.log('Launch Here ! ' + 'http://localhost:' + port + '/');
});

// import package express-list-endpoints of the server
const all_routes = require('express-list-endpoints');
// console print of express list endpoints as table
console.table(all_routes(app));
// launch server on normalized defined port 
server.listen(port);