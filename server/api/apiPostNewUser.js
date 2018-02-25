const postNewUser = require('../queries/postNewUser')

module.exports = function apiPostNewUser(req, res) {
    const { email, password } = req.body

    postNewUser(email, password).then(user => {
        user.generateAuthToken().then(token => {
            res.header('x-auth', token).send(user)
        })
    }, err => {
        res.status(400).send(err)
    })
}