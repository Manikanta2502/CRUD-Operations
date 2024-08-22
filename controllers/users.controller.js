const mongoose = require('mongoose');
const User = require('../Models/users_sch');
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');

const register = async (req,res) =>{
    
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({message: errors.array()});
    }
    const email_exist = await User.findOne({email: req.body.email})
    if (email_exist){
        return res.status(400).json("The user already exist");
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password,salt);
    console.log(hashPassword);

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashPassword
    });
    try{
        const savedUser = await user.save();
        res.send({user: user._id});
    }
    catch(error){
        res.status(400).send(error.message)
    }

}

const login = async (req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({message: errors.array()});
    }
    const user = await User.findOne({email: req.body.email});
    if(!user){
         return res.status(400).json("Email does not exist");
    }
    const validPass = await bcrypt.compare(req.body.password,user.password);
    if(!validPass){
        return res.status(400).json("Not a valid password");
    }

    // const token = jwt.sign({_id: user._id},process.env.TOKEN_SECRET);
    // res.header('auth-token',token).send(token);
    res.status(200).json("Logged IN ");

}

exports.login = login;
exports.register = register;