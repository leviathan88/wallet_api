const { Currency } = require('../models/currency')

module.exports = function updateCurrencyById(id, body) {
    return Currency.findByIdAndUpdate(id, { $set: body }, { new: true })
}