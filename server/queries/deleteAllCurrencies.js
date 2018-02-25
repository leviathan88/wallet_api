const { Currency } = require('../models/currency')

module.exports = function deleteAllCurrencies() {
    return Currency.remove({})
}