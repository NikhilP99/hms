const mongoose = require('mongoose')
const Schema = mongoose.Schema

const DoctorSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    name: {
        type: String,
        required: true,
        unique: false,
        trim: true
    },
    password: {
        type: String,
        required: true,
        unique: false,
        trim: false
    },
    dob: {
        type: Date,
        required: true,
        unique: false
    },
    employee_id: {
        type: String,
        uppercase: true,
        unique: true,
        required: true,
        trim: true 
    },
    gender: {
        type: String,
        required: true,
        unique: false,
        trim: true
    },
    userType: {
        type: String,
        required: true,
        trim: true,
        unique: false,
        default: "Doctor"
    },
    // see this: https://mongoosejs.com/docs/populate.html#population
    expertise: {
        type: [{ type: String, trim:true }],
        default: [],
    },
    // TODO figure out how to save schedule/availability
    // schedule: {
    //     type: [{

    //     }]
    // }
},{
    timestamps: true
})


const Doctor = mongoose.model('Doctor', DoctorSchema)

module.exports = Doctor;
