const express = require("express");
const path = require("path");
const colors = require("colors");
const morgan = require("morgan");
//const { urlencoded } = require("express");
const mongoose = require("mongoose");
const app = express();

//Data Base
/*
 https://stackoverflow.com/questions/57895175/server-discovery-and-monitoring-engine-is-deprecated
 */
mongoose.set("useNewUrlParser", true);
mongoose.set("useUnifiedTopology", true);
mongoose.connect("mongodb://localhost/crud-mongo")
    .then(db => console.log("DB Connected".green))
    .catch(err => console.log(err))
//setting
app.set("PORT", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);
//middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({extended: false}))//This allow understand the data from form html, is necessary to use this in ordert to saves data.. 
//routes
app.use(require("./routes/app"));
//Server
app.listen(app.get("PORT"), (err)=>{
    if(err){
        throw `There is an : ${err}`
    }else{
        console.log("This server was made by EumT07".bgGreen);
        console.log("This Server is Running on Port :".bgRed, app.get("PORT"));
    }
});