var express=require('express');
var router=express.Router();

router.get('/',function(req,res,next){
    res.sendFile( __base+'client/Index.html');
})
module.exports= router;