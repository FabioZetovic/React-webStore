const { json } = require("express");
const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next)=>{
    const authHeader = req.headers.token;
    console.log(authHeader);
    if(authHeader){
        //kljucno
        const token = authHeader.split(" ")[1];
       
       jwt.verify(token, process.env.JWT_SEC, (err,useru)=>{
       if(err) {
        console.log(err);
            res.status(403).json("Token is invalid")
        };
        console.log(useru);
       req.user = useru;
       next();

       })
    }else{
        return res.status(401).json("You are not authenticated");
    }
}

const verifyTokenAndAuthorization = (req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user.id === req.params.id || req.user.isAdmin){
            next();
        }else{
            res.status(403).json(" You are not allowed to do that");
        }
    })
}



const verifyTokenAndAdmin = (req,res,next)=>{
    verifyToken(req,res,()=>{
        console.log(req.user);
        if(req.user.isAdmin){
            next();
        }else{
            res.status(403).json(" You are not allowed to do that");
        }
    })
}

module.exports = {verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin};