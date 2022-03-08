const http = require('http');
const app = require('./app/app');


var env = process.env.NODE_ENV || 'development';
if ('development' == env) {
    // configure stuff here
    require('dotenv').config()
}


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

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

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

const server = http.createServer(app);

server.on('error', errorHandler);
server.on('listening', () => {
    const address = server.address();
    const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + port;
    console.log('Listening on ' + bind);
    console.log('Launch Here ! ' + 'http://localhost:' + port + '/');
});


/* const io = require('socket.io')(server, {
    // includes local domain to avoid CORS error locally
    // configure it accordingly for production
    cors: {
        origin: '*',
        methods: ['GET', 'POST'],
        credentials: true,
        transports: ['websocket', 'polling'],
    },
    allowEIO3: true,
}) */

// console.log(io)

/* io.on("connection", (socket) => {
    console.log("socket.io: User connected: ", socket.id)

    socket.on("disconnect", () => {
        console.log("socket.io: User disconnected: ", socket.id)
    })
})
io.on("connect_error", (err) => {
    console.log(`connect_error due to ${err.message}`);
}); */

const all_routes = require('express-list-endpoints');
console.table(all_routes(app));

server.listen(port,
    /* (baseUrl, routes) => {
        var Table = require('cli-table');
        var table = new Table({ head: ["", "Path"] });
        console.log('\nAPI for ' + baseUrl);
        console.log('\n********************************************');

        for (var key in routes) {
            if (routes.hasOwnProperty(key)) {
                var val = routes[key];
                if (val.route) {
                    val = val.route;
                    var _o = {};
                    _o[val.stack[0].method] = [baseUrl + val.path];
                    table.push(_o);
                }
            }
        }

        console.log(table.toString());
        return table;

    } */
);

const mongoose = require('mongoose');

const ONLINE_DB = process.env.ONLINE_DB || '';
const OFFLINE_DB = process.env.OFFLINE_DB || 'mongodb://localhost:27017/manzhie';

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,

    //useCreateIndex: true,
    //useFindAndModify: false,
};

// config middleware to filter url request permission
// app.use(cors());
// app.use(cors({
//   origin: 'http://localhost:8080'
// }))
//setting up the connection
mongoose.connect(OFFLINE_DB, options)
    .then(() => console.log('Connection à MongoDB réussie !'))
    .catch((error) => console.log('Connection à MongoDB échouée ! \n' + error));


// const connection = mongoose.connection
// connection.once("open", () => {
//     console.log("MongoDB database connected")

//     console.log("Setting change streams")
//     const users = connection.collection("users").watch({ fullDocument: 'updateLookup' })

//     users.on("change", (change) => {
//         switch (change.operationType) {
//             case "insert":
//                 const Iuser = {...change.fullDocument }
//                 console.log(change)
//                 console.log(Iuser)
//                 Iuser.role == 'client' ? io.emit("newClient", Iuser) : (Iuser.role == 'driver' ? io.emit("newDriver", Iuser) : (Iuser.role == 'hotess' ? io.emit("newHotess", Iuser) : io.emit("newSupervisor", Iuser)))
//                 break
//             case "update":
//                 // const Uuser = {...change.documentKey, ...change.updateDescription }
//                 const Uuser = {...change.fullDocument }
//                 console.log(change)
//                 console.log(Uuser)
//                 Uuser.role == 'client' ? io.emit("updateClient", Uuser) : (Uuser.role == 'driver' ? io.emit("updateDriver", Uuser) : (Uuser.role == 'hotess' ? io.emit("updateHotess", Uuser) : io.emit("updateSupervisor", Uuser)))
//                 break
//         }
//     })
// })