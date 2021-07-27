"use strick"
const http = require("http");
const fs = require("fs");//File System
const path = require("path");
const morgan = require("morgan");//url request
const port = new Map();
//Settings
//Port
port.set("port", 3000);
//Morgan
let logger = morgan("dev");//It allows you to see, what is your clients aking 
const request = (req, res) => { 
    //require url with morgan
    logger(req, res, (err)=>{
        if(err){
            throw err
        }
    })
    if(req.url == "/"){
        fs.readFile("./src/public/html/index.html", "UTF-8", (err, html)=>{
            if(err){
                throw err
            }else{
                res.writeHead(200, {"content-type":"text/html"});
                res.end(html);
            }
        })
    }else if(req.url.match(/.css$/)){
        let urlPath = path.join(__dirname, "public", req.url);
        let fileStream = fs.createReadStream(urlPath, "UTF-8");
        res.writeHead(200, {"content-type":"text/css"});
        fileStream.pipe(res);
    }else if(req.url.match(/.js$/)){
        let urlPath = path.join(__dirname, "public", req.url);
        let fileStream = fs.createReadStream(urlPath, "UTF-8");
        res.writeHead(200, {"content-type":"text/js"});
        fileStream.pipe(res);
    }else if(req.url.match(/.jpg$/)){
        let urlPath = path.join(__dirname, "public", req.url );
        let fileStream = fs.createReadStream(urlPath);
        res.writeHead(200, {"content-type": "image/jpg"});
        fileStream.pipe(res);
    }else if(req.url.match(/.png$/)){
        let urlPath = path.join(__dirname, "public", req.url);
        let fileStream = fs.createReadStream(urlPath);
        res.writeHead(200, {"content-type": "image/png"});
        fileStream.pipe(res);
    }else{
        fs.readFile("./src/public/html/err.html", "UTF-8", (err, html)=>{
            if(err){
                throw err
            }else{
                res.writeHead(404, {"content-type":"text/html"});
                res.end(html);
            }
        });
    }   
}
const server = http.createServer(request);
//Active nodemon with npm run dev
server.listen(port.get("port"), (err)=>{
    if(err){
        throw `There is an error: ${err}`
    }else{
        console.log("The " + port.get("port") + "is staring right now");
    }
}); 
//Leer sobre peticiones web---> https://es.wikipedia.org/wiki/Protocolo_de_transferencia_de_hipertexto