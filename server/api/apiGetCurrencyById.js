const getCurrencyById = require('../queries/getCurrencyById')
const { ObjectId } = require('mongodb')

module.exports = function apiGetCurrencyById(req, res) {
    const { id } = req.params

    if (!ObjectId.isValid(id)) {
        return res.status(404).send()
    }

    getCurrencyById(id).then(currency => {
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