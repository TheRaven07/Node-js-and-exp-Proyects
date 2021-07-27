const express = require("express");
const router = express.Router();

//Home
router.get("/", (req, res)=>{
    res.render("index.html", {title: "Proyecto N8"});
});


//Exports

module.exports = router;