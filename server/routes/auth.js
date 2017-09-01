var jwt=require('jwt-simple');

var auth={
    login :function(req,res,next){
        var username=req.body.username||'';
        var password=req.body.password||'';

        if(username===''||password===''){
            res.status(401);
            res.json({
              "status": 401,
              "message": "Invalid credentials"
            });
            return;
        }
        var dbUserObj=auth.validate(username,password);
        if(dbUserObj){
            res.json(genToken(dbUserObj));
        }else{
            res.status(401);
            res.json({
              "status": 401,
              "message": "Invalid credentials"
            });
            return;
        }
        
    },
    validate:function(username,password){
        return{
 name:'ashik',
 role:'admin',
 username:'ashik.p@gmail.com'
        };
    },
    validateUser:function(username){
        
    }
}