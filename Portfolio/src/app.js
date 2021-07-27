"use strick"

const express = require('express');
const colors = require('colors');
const path = require('path');
const morgan = require('morgan');

const app = express();

// Setting
app.set('PORT', process.env.PORT | 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);


//router Home
app.use(require('./router/app'));

//static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('dev'));

//Server 
app.listen(app.get('PORT'), (err)=>{
    if(err){
         throw err
    }else{
        console.log('This server is creating by'.bgBlue + 'eumt07 '.bgGreen);
        console.log('Server is running on port'.bgRed, app.get('PORT'));
}
});
