const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");


const validateToken = asyncHandler(async (req, res, next) => {
    let token;
    let authHeader = req.headers.Authorization || req.headers.authorization;
    if(authHeader && authHeader.startsWith("Bearer")) {
        try {
            token = authHeader.split(" ")[1];
            jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
                if(err) {
                    res.status(401);
                    throw new Error("Invalid token/Not authorized");
                }
                console.log("Decoded token: ", decoded);
                req.user = decoded.user;
                next();
            });

            if(!token) {
                res.status(401);
                throw new Error("Not authorized, no token");
            };
        } catch (error) {
            res.status(401);
            throw new Error("Not authorized, token failed");
        }
    }
});

module.exports = validateToken;