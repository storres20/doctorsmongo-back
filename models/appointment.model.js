const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    doctor_id: {
        required: true,
        type: String
    },
    user_id: {
        required: true,
        type: String
    },
    datetime: {
        required: true,
        type: String
    },
    city: {
        required: true,
        type: String
    },
})

module.exports = mongoose.model('Appointment', dataSchema)