const express = require('express')
const router = express.Router()
const User = require('../models/User')
const jwt = require('jsonwebtoken')

router.post('/register',async (req,res)=>{
    var {email,password,userType,name} = req.body

    if(email==="" || password==="" || name==="" || userType===""){
        res.status(400)
        res.json({
            status: 400,
            success: false,
            message: "bad request"
        })
    }

    console.log({user: email,password,userType,name})

    var user = await User.findOne({email: email})

    if(user){
        res.status(400)
        res.json({
            status: 400,
            success: false,
            message: "user already exists"
        })
    }

    var newUser = new User({
        email: email,
        name: name,
        password: password,
        userType: userType
    })

    await newUser.save()

    res.json({
        success: true,
        message: "User created successfully. Proceed to login."
    })

})



router.post('/login', async (req,res) => {
    var {email, password} = req.body

    if(email==="" || password===""){
        res.status(400)
        res.json({
            status: 400,
            success: false,
            message: "bad request"
        })
    }

    var user = await User.findOne({email: email})

    if(!user){
        res.status(400)
        res.json({
            status: 400,
            success: false,
            message: "user does not exists"
        })
    }

    if(user.password !== password){
        res.status(401)
        res.json({
            status: 401,
            success: false,
            message: "Wrong credentials"
        })
    }

    let userData = {
        email,
        userType: user.userType
    }

    jwt.sign(userData,"secretkey", {expiresIn: '2d'}, (err,token) => {
        console.log("User " + email + ": Logged in successfully!")
        console.log(token)
        res.json({
            success: true,
            token: token
        })
    })

})



module.exports = router