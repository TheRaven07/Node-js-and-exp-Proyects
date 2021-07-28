//Node js server
//Creat a folder: Public
//Css/style.css
//js/app.js
const http = require('http');
const fs = require('fs');
const path = require('path');

//Map
const PORT = new Map;
PORT.set("PORT", process.env.PORT || 3000)

const serverFunction = (req, res) =>{
console.log(`${req.method} request ${req.url}`);

if(req.url == '/'){
    fs.readFile('./public/index.html', 'UTF-8', (err, html) => {
    res.writeHead(200, {'Content-type' : 'text/html' });
    res.end(html);
})
}else if(req.url.match(/.css$/)){
    const reqPath = path.join(__dirname, 'public', req.url);
    const fileStream = fs.createReadStream(reqPath, 'UTF-8');
    res.writeHead(200, {'Content-type' : 'text/css'});
    fileStream.pipe(res);
}else if(req.url.match(/.jpg$/)){
    const reqPath = path.join(__dirname, 'public', req.url);
    const fileStream = fs.createReadStream(reqPath);
    res.writeHead(200, {'Content-typ' : 'image/jpg'});
    fileStream.pipe(res);
}else{
    res.writeHead(404, {'content-type' : 'text/plain'});
    res.end('404 Error');
}
};


const server = http.createServer(serverFunction);


server.listen(PORT.get("PORT"), (err)=>{
    if(err){
        throw err
    }else{
        console.log('Server was made By this usuer');
        console.log('Server is running on port 3000');
    }
    
});