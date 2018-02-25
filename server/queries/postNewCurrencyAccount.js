const { CurrencyAccount } = require('../models/currencyAccount')

module.exports = function postNewCurrencyAccount(name, userId) {

    const currency = new CurrencyAccount({
        name: name,
        _creator: userId,
        uniqueIdentifier: name + userId.toHexString()
    })

    return currency.save()
}