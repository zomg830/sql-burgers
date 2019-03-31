var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
  burger.selectAll(data => {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/", (req, res) => {
  burger.insertOne(req.body.burger_name, function() {
    res.redirect("/");
  });
});

router.put("/:id", (req, res) => {
  var id = req.params.id;

  console.log("id", id);

  burger.updateOne(id, () => {
    res.redirect("/");
  });
});

module.exports = router;
