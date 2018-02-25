const { Currency } = require('../models/currency')

module.exports = function getAllCurrencies() {
    return Currency.find()
}