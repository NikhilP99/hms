const express = require('express')
const router = express.Router()
const Staff = require('../models/Staff')
const Doctor = require('../models/Doctor')
const Student = require('../models/Student')
const jwt = require('jsonwebtoken')

//for  student/patiennt only
router.post('/register',async (req,res)=>{

    var {email,password,name,height,weight,roll_number,dob,gender} = req.body

    if(email==="" || password==="" || name===""){ //better validation here
        res.json({
            status: 400,
            success: false,
            message: "bad request"
        })
    }

    var s1 = await Student.findOne({email: email})
    var s2 = await Student.findOne({roll_number: roll_number})

    if(s1 || s2){
        res.json({
            status: 400,
            success: false,
            message: "Student with same email or roll number already exists!"
        })
    }

    var newUser = new Student({
        email,
        name,
        password,
        height,
        weight,
        dob,
        roll_number,
        gender
    })
    console.log("created Student:",{email,password,name})
    await newUser.save()

    res.json({
        success: true,
        email,
        message: "User created successfully. Proceed to login."
    })

})



router.post('/login', async (req,res) => {
    var {email, password, userType} = req.body

    if(email==="" || password==="" || userType===""){   //better validation
        res.status(400)
        res.json({
            status: 400,
            success: false,
            message: "bad request"
        })
    }

    let user;

    switch(userType){
        case "Doctor":
            user = await Doctor.findOne({email: email})
            break;
        case "Student":
            user = await Student.findOne({email: email})
            break;
        default: //staff
            user = await Staff.findOne({email: email})
            if(user.userType !== userType){
                user = null
            }
            break;
    }
    
    if(!user){
        res.json({
            status: 400,
            success: false,
            message: "user does not exists"
        })
    }

    if(user.password !== password){
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
        console.log(userType + ": " + email + " has Logged in successfully!")
        console.log(token)
        res.json({
            success: true,
            email: user.email,
            name: user.name,
            userType: user.userType,
            token: token
        })
    })

})



module.exports = router