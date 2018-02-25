const { CurrencyAccount } = require('../models/currencyAccount')

module.exports = function getCurrencyAccount(userId) {
    return CurrencyAccount.find({
        _creator: userId
    })
}