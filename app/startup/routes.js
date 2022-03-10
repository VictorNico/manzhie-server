const express = require('express');
const journeys = require('../routers/v0.1.0/neo4j/journeys.js');
const error = require('../middlewares/v0.1.0/neo4j/error.js');

module.exports = function(app) {
    app.use(express.json());
    app.use('/api/v0.1.0', journeys);
    app.use(error);
};