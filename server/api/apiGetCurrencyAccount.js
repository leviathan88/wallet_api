const getCurrencyAccount = require('../queries/getCurrencyAccount')

module.exports = function apiGetCurrencyAccount(req, res) {
    getCurrencyAccount(req.user._id).then(currencyAccounts => {
        res.send({
            currencyAccounts
        })
    }, err => {
        res.status(400).send(err)
    })
}