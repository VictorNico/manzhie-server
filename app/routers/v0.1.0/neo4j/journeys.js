const express = require('express');
const router = express.Router();
const journeysController = require('../../../controllers/v0.1.0/journeys/neo4j');


router.post('/create', journeysController.create);

router.post("/getAll", journeysController.getAll);
router.get("/getAll", journeysController.getAll);

router.post('/get', journeysController.get);
router.get('/get/:name', (req, res) => { res.send(req.params.name) });

router.patch('/update/start/:start/type/:typeR/end/:end', journeysController.update);

router.delete('/delete/start/:start/type/:typeR/end/:end', journeysController.delete);

module.exports = router;