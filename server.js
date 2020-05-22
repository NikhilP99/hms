const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')

const AuthController = require('./controllers/Auth')

const app = express()

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const dbURL = "mongodb://localhost/hms"
mongoose.connect(dbURL, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
    console.log("Mongodb is now connected.")
}).on('error', () => {
    console.log("Couldn't connect to database.")
})

app.get('/', async (req,res)=>{
    res.send('server alive for hms app')
})

app.use('/auth',AuthController)


app.listen(5000,()=>{
    console.log("server running at port 5000")
})