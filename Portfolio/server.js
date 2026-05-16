var express = require("express");
var app = express();

app.set('view engine', 'ejs');

app.get('/',(req,res) =>{
   
    res.render('portfolio.ejs')
});
app.listen(8080);