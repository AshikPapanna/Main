var express=require('express');
var router=express.Router();
var mongo =require('../DB/mongo');

router.get('/',function(req,res,next){
   
    res.json(mongo.user);
})
module.exports= router;