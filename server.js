const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const Staff = require('./models/Staff')

const AuthController = require('./controllers/Auth')

const app = express()

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const createSuperAdmin = async () => {
    let admin = Staff.findOne({email: 'admin'})
    if(admin){
        console.log("Super admin exists")
        return
    }

    var newAdmin = new Staff({
        email: "admin",
        password: "admin",
        name: "Super admin",
        userType: "Admin",
    })

    await newAdmin.save()
    console.log("Super admin created")

}

const dbURL = "mongodb://localhost/hms"
mongoose.connect(dbURL, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
    console.log("Mongodb is now connected.")
    createSuperAdmin()
}).on('error', () => {
    console.log("Couldn't connect to database.")
})

app.get('/', async (req,res)=>{
    res.send('server alive for hms app')
})

app.use('/auth',AuthController)


app.listen(5000,()=>{
    console.log("server running at port 5000")
    console.log(new Date())
})