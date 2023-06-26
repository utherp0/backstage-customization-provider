var express = require("express");
var router = express.Router();
const fs = require("fs");

/* GET data for tech radar. */
router.get("/", (req, res) => {
  fs.readFile("./data/tech-radar/data.json", (err, json) => {
    let obj = JSON.parse(json);
    res.json(obj);
  });
});

module.exports = router;
