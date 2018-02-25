const postNewCurrency = require('../queries/postNewCurrency')

module.exports = function apiPostNewCurrency(req, res) {
    postNewCurrency(req.body.name).then(currency => {
        res.send(currency)
    }, err => {
        res.status(400).send(err)
    })
}