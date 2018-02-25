const { Currency } = require('../models/currency')

module.exports = function postManyCurrencies(currencies) {
    return Currency.insertMany(currencies)
}