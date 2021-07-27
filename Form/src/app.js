const express = require("express");
const app = express(); 
const colors = require("colors");
const path = require("path");

const morgan = require("morgan");

//Setting
app.set("port", 3000);
app.set("views", path.join(__dirname, "./views"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "ejs");

/**
 * =======
 * Routers
 * =======
 */

//Principal route
app.get("/", (req, res)=>{
    res.render("index.html", {title: "Contact Form"});
});
//router
app.use(require("./routers/app"));
//404

/**
 * ===========
 * static file
 * ===========
 */

app.use(express.static(path.join(__dirname, "./public")));
app.use(morgan("dev"));

// npm run dev
//Port 3000
app.listen(app.get("port"), (err)=>{
    if(err){
        throw `There is an : ${err}`.bgRed
    }else{
        console.log("This server was created by eumt07".bgGreen)
        console.log("This server is starting right now... on " + app.get("port"));
    }
});