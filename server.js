var express = require('express'); 
var app = express();
var port = process.env.PORT || 3000;
app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine','ejs');

app.use('/', function(req,res,next){
    console.log('Request Url:' + req.url);
    next();
});

app.get('/',function (req,res){
    res.send(`<html><head><link href=assets/style.css type=text/css rel=stylesheet /></head>
    <body><h1>Hello world!<h1></body></html>`);
});

app.get('/person/:id', (req,res)=>{
    res.render('person',{ID: req.params.id, Qrst: req.query.qrst});
});

app.get('/person2/:id', (req,res)=>{
    res.render('person2',{ID: req.params.id, Message: req.query.message, Times: req.query.times});
});


app.listen(port);