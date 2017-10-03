var express=require('express');
var bodyparser=require('body-parser');
var path=require('path');
var jsonwebtoken=require('jsonwebtoken');
var cookieParser=require('cookie-parser');
var appconfig=require('./appconfig.js');

var app=express();
global.__base = __dirname + '/';
app.set('port',(process.env.PORT||5000));


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extends:false}));
app.use(cookieParser());


app.use('/node_modules',express.static(path.join(__dirname,'node_modules')));
app.use('/public',express.static(path.join(__dirname,'public')));
app.use('/dist',express.static(path.join(__dirname,'dist')));


app.use(function(req,res,next){
if(req.headers&&req.headers.authorization    
    &&req.headers.authorization.split(' ')[0]==='JWT')    {
jsonwebtoken.verify(req.headers.authorization.split(' ')[1],appconfig.secrete
,function(err,decode){
    if(err){ 
               console.log(err);
              req.user=undefined;
           }
    else   {
              console.log(decode);
              console.log('decoded');
              req.user=decode;
           }
              next();  
        });
    }else if(req.query && req.query.token)
    {
        console.log(req.query.token);
        jsonwebtoken.verify(req.query.token,appconfig.secrete
        ,function(err,decode){
            if(err) 
           {
            console.log(err);
        req.user=undefined;
        }else{   console.log(decode); 
            req.user=decode;}
    next();  
    })
    }
    else
    {
        console.log('no auth pro');
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








