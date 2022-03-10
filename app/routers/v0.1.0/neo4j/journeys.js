// import express
const express = require('express');
// create express router instance
const router = express.Router();
// import journeys controller
const journeysController = require('../../../controllers/v0.1.0/journeys/neo4j');

// set rote create with POST method access to create journeys
router.post('/create', journeysController.create);

// set getAll with Post alternatively for GET fixing cannot GET of express handler
router.post("/getAll", journeysController.getAll);
// set getAll with GET method acces to retrieve all journeys datas
router.get("/getAll", journeysController.getAll);
// set get with POST alternatively for GET fixing cannot GET of express handler
router.post('/get', journeysController.get);
// set getAll with GET method acces to retrieve specific place with link journeys datas
router.get('/get/:name', journeysController.get);

//router.get('/get/:name', (req, res) => { res.send(req.params.name) });

// set update/start/:start/type/:typeR/end/:end with PATCH method access to update a journeys informations
router.patch('/update/start/:start/type/:typeR/end/:end', journeysController.update);

// set delete/start/:start/type/:typeR/end/:end with PATCH method access to delete a journeys informations
router.delete('/delete/start/:start/type/:typeR/end/:end', journeysController.delete);

module.exports = router;