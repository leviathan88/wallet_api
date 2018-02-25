const getAllCurrencies = require('../queries/getAllCurrencies')

module.exports = function apiGetAllCurrencies(req, res) {
    getAllCurrencies().then(currencies => {
        res.send({
            currencies
        })
    }, err => {
        res.status(400).send(err)
    })
}