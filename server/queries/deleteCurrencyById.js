const { Currency } = require('../models/currency')

module.exports = function deleteCurrencyById(id) {
    return Currency.findByIdAndRemove(id)
}