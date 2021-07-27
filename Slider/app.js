const http = require("http");
const fs = require("fs");
const path = require("path");
// Map
const PORT = new Map;
PORT.set("PORT", process.env.PORT | 3000);
const server = http.createServer((req, res)=>{
    console.log(`${req.method} solicita ${req.url}`);

    if(req.url == "/"){
        fs.readFile("public/index.html", "UTF-8", (err, html) => {
            if(err){
                throw err
            }else{
                res.writeHead(200, {"Content-type": "text/html"});
                res.end(html);
            }
        });
    }else if(req.url.match(/.css$/)){
        const reqPath = path.join(__dirname, "public", req.url);
        const fileStream = fs.createReadStream(reqPath, "UTF-8");
        res.writeHead(200, {"Content-type": "text/css"});
        fileStream.pipe(res);
    }else if(req.url.match(/.jpg$/)){
        const reqPath = path.join(__dirname, "public", req.url);
        const fileStream = fs.createReadStream(reqPath);
        res.writeHead(200, {"Content-type" : "image/jpg"});
        fileStream.pipe(res);
    }else if(req.url.match(/.png$/)){
        const reqPath = path.join(__dirname, "public", req.url);
        const fileStream = fs.createReadStream(reqPath);
        res.writeHead(200, {"Content-type" : "image/png"});
        fileStream.pipe(res);
    }else if(req.url.match(/.js$/)){
        const reqPath = path.join(__dirname, "public", req.url);
        const fileStream = fs.createReadStream(reqPath, "UTF-8");
        res.writeHead(200, {"Content-type" : "text/js"});
        fileStream.pipe(res);
    }else{
        res.writeHead(404, {"content-type" : "text/plain"});
        res.end("404 Error");
    }
})
//Server 3000
server.listen(PORT.get("PORT"), (err)=>{
    if(err){
        throw `There is an ${err}`
    }else{
        console.log("This server is running right now ON.. " + PORT.get("PORT"));
    }
});
