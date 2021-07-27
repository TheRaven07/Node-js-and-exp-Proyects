const express = require("express");
const router = express.Router();
const TASK = require("../models/app");

//Principal route
router.get("/",  async (req, res)=>{
    const tasks = await TASK.find();
    res.render("index.html", {title: "Task APP", tasks});
})
router.post("/add", async (req, res)=>{
    const task = new TASK(req.body);
    await task.save();    
    res.redirect("/");
})
//Done
router.get("/turn/:id", async (req,res)=>{
    const {id} = req.params;
    const task = await TASK.findById(id);
    task.status = !task.status;
    await task.save();
    //res.send("received");
    res.redirect("/");
})
//Deleted
router.get("/delete/:id", async (req,res)=>{
    //console.log(req.params.id)//Permite ver la peticion
    //res.send("received.!!")
    const {id} = req.params;
    await TASK.remove({_id: id});
    res.redirect("/");
});
//Edit
router.get("/edit/:id", async (req,res)=>{
    const {id} = req.params;
    const task = await TASK.findById(id);
    res.render("edit.html", {title: "Update",
    task
    });
})
router.post("/edit/:id", async (req,res)=>{
    const {id} = req.params;
    await TASK.update({_id: id}, req.body);
    res.redirect("/")
})
module.exports = router;