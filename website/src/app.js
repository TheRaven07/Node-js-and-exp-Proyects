const http = require("http");
const fs = require("fs");
const path = require("path");
const colors = require("colors");
const morgan = require("morgan");
const port = new Map();
//Settings
port.set("port", 3000);
let logger = morgan("dev");
const requirement = (req, res) => {
    logger(req, res, (err)=>{
        if(err){
            throw err;
        }
    })
    if(req.url == "/"){
        fs.readFile("./public/index.html", "UTF-8", (err, html) => {
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
        res.writeHead(200, {"content-type": "text/css"});
        fileStream.pipe(res);
    }else if(req.url.match(/.jpg$/)){
        let urlPath = path.join(__dirname, "public", req.url );
        let fileStream = fs.createReadStream(urlPath);
        res.writeHead(200, {"content-type": "image/jpg"});
        fileStream.pipe(res);
    }else if(req.url.match(/.png$/)){
        let urlPath = path.join(__dirname, "public", req.url);
        let fileStream = fs.createReadStream(urlPath);
        res.writeHead(200, {"content-type" : "image/png"});
        fileStream.pipe(res); 
    }else{
        res.writeHead(404, {"content-type": "text/plain"});
        res.end("404 Error"); 
    }
}
const server = http.createServer(requirement);
//Para activar el server npm run dev
server.listen(port.get("port"), (err)=>{
    if(err){
        throw err
    }else{
        console.log("Your server is ready to work".bgBlue);
        console.log("The server is starting on port", port.get("port") )
    }
});