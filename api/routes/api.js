var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
    res.send("<h2>API is working properly</h2>");
});

module.exports = router;
