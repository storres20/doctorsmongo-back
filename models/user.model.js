const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    username: {
        required: true,
        type: String
    },
})

module.exports = mongoose.model('User', dataSchema)