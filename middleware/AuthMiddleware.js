const AuthTokenModel = require("../models/AuthTokenModel")
const jwt = require("jsonwebtoken")

exports.verifyToken = [(req, res, next) => {
    // const token = req.headers.authorization.split(' ')[1];

    const token_text = req.header('Authorization')
    const token = token_text.split(' ')[1]    

    console.log("Received Token is ", token)
    if (!token){  // If the token is not found "Access is Denied"
        return res.status(401).json({ error: 'Access denied' })
    }else{

        const decoded = jwt.verify(token, "this-can-be-any-random-key")

        AuthTokenModel.findOne({token: token, user: decoded.userid})
        .then((foundToken)=>{
            if(foundToken)
                next()
            else
                return res.status(401).json({ error: 'Token is invalid!' })
        })
        .catch((err)=>{
            res.send(err)
        })
    }      
}]

