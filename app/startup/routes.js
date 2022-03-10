// import express
const express = require('express');
// import journeys routes
const journeys = require('../routers/v0.1.0/neo4j/journeys.js');
// import middleware error
const error = require('../middlewares/v0.1.0/neo4j/error.js');
// export function define app used 
module.exports = function(app) {
    app.use(express.json());
    app.use('/api/v0.1.0', journeys);
    app.use(error);
};