const deleteCurrencyById = require('../queries/deleteCurrencyById')
const { ObjectId } = require('mongodb')

module.exports = function apiDeleteCurrencyById(req, res) {
    const { id } = req.params

    if (!ObjectId.isValid(id)) {
        return res.status(404).send()
    }
    deleteCurrencyById(id).then(currency => {
        if (!currency) {
            return res.status(404).send()
        }
        res.send({
            currency
        })
    }, err => {
        res.status(400).send(err)
    })
}