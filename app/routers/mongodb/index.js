const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
    res.send("hello");
});

router.post('/tets', function(req, res) {
    console.log("dhsd");
    res.status(200).json({ success: "HI" });
});

module.exports = router;