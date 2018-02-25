const { CurrencyAccount } = require('../models/currencyAccount')

module.exports = function deleteCurrencyAccountById(id) {
    return CurrencyAccount.findByIdAndRemove(id)
}