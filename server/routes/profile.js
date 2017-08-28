var express=require('express');
var router=express.Router();
router.get('/profile',function(req,res,next){
    res.sendFile(__base+'client/profile.html')
})
module.exports= router;