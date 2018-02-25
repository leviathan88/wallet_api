const postNewCurrencyAccount = require('../queries/postNewCurrencyAccount')

module.exports = function apiPostNewCurrencyAccount(req, res) {

    postNewCurrencyAccount(req.body.name, req.user._id).then(currencyAccount => {
        res.send(currencyAccount)
    }, err => {
        res.status(400).send(err)
    })
}