const mongoose = require('mongoose')
const Schema = mongoose.Schema

const StudentSchema = new Schema({
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
    height: {
        type: String,
        unique:false,
        required: true,
        trim: true
    },
    weight: {
        type: String,
        unique:false,
        required: true,
        trim: true
    },
    dob: {
        type: Date,
        required: true,
        unique: false
    },
    roll_number: {
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
        unique: false,
        trim: true,
        default: "Student"
    },
    // see this: https://mongoosejs.com/docs/populate.html#population
    appointments: {
        type: [{ type: Schema.Types.ObjectId, ref: 'Appointment' }],
        default: [],
    }
},{
    timestamps: true
})


const Student = mongoose.model('Student', StudentSchema)

module.exports = Student;
