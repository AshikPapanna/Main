

exports.gethome=function(req,res){  
   res.set({'Content-Type': 'text/plain',
   'Content-Length': '123'});
    res.sendFile(__base+'index.html');
  
}

   



