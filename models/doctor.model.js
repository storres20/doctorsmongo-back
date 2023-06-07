const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    lastname: {
        required: true,
        type: String
    },
    speciality: {
        required: true,
        type: Number
    },
    experience: {
        required: true,
        type: Number
    },
    consultation: {
        required: true,
        type: String
    },
    image: {
        required: true,
        type: String
    },
})

module.exports = mongoose.model('Doctor', dataSchema)