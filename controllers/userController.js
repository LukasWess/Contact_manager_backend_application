const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

//@desc Register a user
//@route Post /api/users/register
//@access Public
const registerUser = asyncHandler(async (req, res) => {
    const { username, email, phone, password } = req.body;
    if(!username || !email || !phone || !password) {
        res.status(400);
        throw new Error("Please fill in all fields");
    }
    const userAvailable = await User.findOne({ email });
    if(userAvailable) {
        res.status(400);
        throw new Error("User already exists");
    }
    
    res.json({ message: "Register the user"});
});

//@desc Login a user
//@route Post /api/users/login
//@access Public
const loginUser = asyncHandler(async (req, res) => {
    res.json({ message: "Login the user"});
});

//@desc Current user information
//@route Post /api/users/current
//@access private
const currentUser = asyncHandler(async (req, res) => {
    res.json({ message: "Current user information"});
});

module.exports = { registerUser, loginUser, currentUser };