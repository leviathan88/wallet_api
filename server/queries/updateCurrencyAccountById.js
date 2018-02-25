const { CurrencyAccount } = require('../models/currencyAccount')

module.exports = function updateCurrencyAccountById(id, body) {
    return CurrencyAccount.findByIdAndUpdate(id, { $set: body }, { new: true })
}