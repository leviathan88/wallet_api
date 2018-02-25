const mongoose = require('mongoose')

const CurrencyAccount = mongoose.model('CurrencyAccount', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    deposit: {
        type: Number,
        default: 0
    },
    _creator: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    uniqueIdentifier: {
        type: String,
        required: true,
        unique: true
    }
})

module.exports = {
    CurrencyAccount
}