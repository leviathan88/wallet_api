const deleteCurrencyAccountById = require('../queries/deleteCurrencyAccountById')
const { ObjectId } = require('mongodb')

module.exports = function apiDeleteCurrencyAccById(req, res) {
    const { id } = req.params

    if (!ObjectId.isValid(id)) {
        return res.status(404).send()
    }
    deleteCurrencyAccountById(id).then(currencyAccount => {
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