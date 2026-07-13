const express = require("express");
const bcrypt = require("bcrypt");
const Customer = require("../models/Customer");

const router= express.Router();
//SIGNUP
router.post("/signup", async(req,res)=>{
    try{
        const {name, email, password}= req.body;
        const existingUser = await Customer.findOne({name});

        if (existingUser){
            return res.send(400).json({
                message:"User or password already exists "
            });
        }
        const hashedPassword= await bcrypt.hash(password, 10);

        const newUser = new Customer({name, email, password: hashedPassword});
        await newUser.save();

         res.status(201).json({
            message:"Signup Successful"
        });
    }catch(error){
        res.status(500).json({
            message: error.message
        });
    }

});

//LOGIN

router.post("/login", async(req, res)=>{
    try{
        const {name, password} = req.body;

        const user = await Customer.findOne({name});

        if(!user){
            return res.status(400).json({
                message:"User not found"
            });
        }
        const isMatch =
        await bcrypt.compare(password,user.password );

        if(!isMatch){
            return res.status(400).json({
                message:"Invalid Password"
            });
        }

        res.status(200).json({
            message:"Login Successful",

            user:{id:user._id,name:user.name,email:user.email }
        });

    }

    catch(error){
        res.status(500).json({
            message:error.message
        });
    }

});

module.exports = router;