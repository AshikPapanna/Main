var express=require('express');
var bodyparser=require('body-parser');
var path=require('path');
var index =require(path.join(__dirname, '/server/routes/index.js'));
var profile=require('./server/routes/profile.js');

var app=express();
global.__base = __dirname + '/';
app.set('port',(process.env.Port||5000));
app.set('directorypath',__dirname);

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extends:false}));

app.use(express.static(path.join(__dirname,'/public')));

app.get('/',index);
app.get('/profile',profile);

app.listen(app.get('port'),function()
{
console.log('server has been inistiated at:'+app.get('port'));
});








