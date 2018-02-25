const { API, CURRENCIES, USERS, CURRENCY_ACCOUNT, ID } = require('../constants')
const apiGetAllCurrencies = require('./apiGetAllCurrencies')
const apiPostNewCurrency = require('./apiPostNewCurrency')
const apiGetCurrencyById = require('./apiGetCurrencyById')
const apiDeleteCurrencyById = require('./apiDeleteCurrencyById')
const apiPutCurrencyById = require('./apiPutCurrencyById')
const apiPostNewUser = require('./apiPostNewUser')
const apiPostLoginUser = require('./apiPostLoginUser')
const apiDeleteUserToken = require('./apiDeleteUserToken')
const apiPostNewCurrencyAccount = require('./apiPostNewCurrencyAccount')
const apiGetCurrencyAccount = require('./apiGetCurrencyAccount')
const apiDeleteCurrencyAccById = require('./apiDeleteCurrencyAccById')
const apiPutCurrencyAccById = require('./apiPutCurrencyAccById')
const { authenticateUser, authenticateAdmin } = require('../middlewares/authenticate')

module.exports = {
    initRestAPI: function(app) {

        // GET
        app.get(API + CURRENCIES, (req, res) => apiGetAllCurrencies(req, res))
        app.get(API + CURRENCIES + ID, (req, res) => apiGetCurrencyById(req, res))
        app.get(API + CURRENCY_ACCOUNT, authenticateUser, (req, res) => apiGetCurrencyAccount(req, res))

        // POST
        app.post(API + CURRENCIES, authenticateAdmin, (req, res) => apiPostNewCurrency(req, res))
        app.post(API + USERS, (req, res) => apiPostNewUser(req, res))
        app.post(API + USERS + '/login', (req, res) => apiPostLoginUser(req, res))
        app.post(API + CURRENCY_ACCOUNT, authenticateUser, (req, res) => apiPostNewCurrencyAccount(req, res))

        // DELETE
        app.delete(API + CURRENCIES + ID, authenticateAdmin, (req, res) => apiDeleteCurrencyById(req, res))
        app.delete(API + USERS + '/token', authenticateUser, (req, res) => apiDeleteUserToken(req, res))
        app.delete(API + CURRENCY_ACCOUNT + ID, authenticateUser, (req, res) => apiDeleteCurrencyAccById(req, res))

        // PUT
        app.put(API + CURRENCIES + ID, authenticateAdmin, (req, res) => apiPutCurrencyById(req, res))
        app.put(API + CURRENCY_ACCOUNT + ID, authenticateUser, (req, res) => apiPutCurrencyAccById(req, res))
    },
}