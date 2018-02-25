const updateCurrencyById = require('../queries/updateCurrencyById')
const { ObjectId } = require('mongodb')

module.exports = function apiPutCurrencyById(req, res) {
    const { id } = req.params
    const { name } = req.body

    if (!ObjectId.isValid(id)) {
        return res.status(404).send()
    }

    const body = {
        name
    }

    updateCurrencyById(id, body).then(currency => {
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