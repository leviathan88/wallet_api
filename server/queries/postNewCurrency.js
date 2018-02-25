const { Currency } = require('../models/currency')

module.exports = function postNewCurrency(name) {

    const currency = new Currency({
        name: name
    })

    return currency.save()
}