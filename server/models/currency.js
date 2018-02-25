const mongoose = require('mongoose')

const Currency = mongoose.model('Currency', {
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true
    }
})

module.exports = {
    Currency
}