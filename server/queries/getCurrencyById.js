const { Currency } = require('../models/currency')

module.exports = function getCurrencyById(id) {
    return Currency.findById(id)
}