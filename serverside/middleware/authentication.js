
const { verifyToken }  = require('../security/jwt');

const UnAuthorise =  require('../error/UnAuthorize')

 const authentication = (req,res,next)=>{

    // header se token ko nikal le


    try{

     const { authorization } = req.headers
     if(authorization){

        const [,token] = authorization.split(" ");

       const payload =  verifyToken(token)

       req.userContext = payload;
      
        console.log("token is",token)
        next()
     
    
    }else{
        next(new UnAuthorise("Authorization token in missing in request header."));
    }
     }

    catch(error){
        next(new UnAuthorise("Your Tokens is invalid"))
    }
}

module.exports = {
    authentication
} 