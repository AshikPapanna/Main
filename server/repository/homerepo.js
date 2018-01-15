

exports.gethome=function(req,res,next){  
    console.log('home route');
   return    res.sendFile(__base+'index.html'); 
}

   



