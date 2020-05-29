const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AppointmentSchema = new Schema({
    patient: {
        type: Schema.Types.ObjectId,
        ref: 'Student'
    },
    doctor: {
        type: Schema.Types.ObjectId,
        ref: 'Doctor'
    },
    problem: {
        type: String,
        trim: true,
        required: true,
        unique: false
    },
    description: {
        type: String,
        trim: true,
        default: "",
        unique: false
    },
    status: {
        type: String,
        trim: true,
        required: true,
        unique: false
    },
    // TODO add more appropraite date structure
    datetime: {
        type: Date,
        required: true
    }
},{
    timestamps: true
})


const Appointment = mongoose.model('Appointment', AppointmentSchema)

module.exports = Appointment;
