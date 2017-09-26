var express=require('express');
var bodyparser=require('body-parser');
var path=require('path');
var jsonwebtoken=require('jsonwebtoken');
var cookieParser=require('cookie-parser');

var app=express();
global.__base = __dirname + '/';
app.set('port',(process.env.PORT||3000));


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extends:false}));
app.use(cookieParser());


app.use('/node_modules',express.static(path.join(__dirname,'node_modules')));
app.use('/public',express.static(path.join(__dirname,'public')));
app.use('/dist',express.static(path.join(__dirname,'dist')));


app.use(function(req,res,next){
if(req.headers&&req.headers.authorization    
    &&req.headers.authorization.split(' ')[0]==='JWT')    {
jsonwebtoken.verify(req.headers.authorization.split(' ')[1],'RESTFULLAPIs'
,function(err,decode){
    if(err) req.user=undefined;
    req.user=decode;
    next();  
        });
    }else{
        req.user=undefined;
        next();
    }    
});
var routes = require(path.join(__dirname, '/server/routes/approutes.js'));
routes(app);
app.listen(app.get('port'),function()
{
 
console.log('server has been inistiated at:'+app.get('port'));
});








