const updateCurrencyAccountById = require('../queries/updateCurrencyAccountById')
const { ObjectId } = require('mongodb')

module.exports = function apiPutCurrencyAccById(req, res) {
    const { id } = req.params
    const { deposit } = req.body

    if (!ObjectId.isValid(id)) {
        return res.status(404).send()
    }

    const body = {
        deposit
    }

    updateCurrencyAccountById(id, body).then(currencyAccount => {
        if (!currencyAccount) {
            return res.status(404).send()
        }
        res.send({
            currencyAccount
        })
    }, err => {
        res.status(400).send(err)
    })
}