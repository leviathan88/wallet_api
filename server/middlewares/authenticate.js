const { User } = require('../models/user')

const authenticateUser = (req, res, next) => {
    const token = req.header('x-auth')

    User.findByToken(token).then(user => {
        if (!user) return Promise.reject()

        req.user = user
        req.token = token
        next()
    }).catch(err => {
        res.send(401).send()
    })

}

const authenticateAdmin = (req, res, next) => {
    const token = req.header('x-auth')

    User.findByToken(token).then(user => {
        if (!user || user.role !== 'admin') return Promise.reject()

        req.user = user
        req.token = token
        next()
    }).catch(err => {
        res.send(401).send()
    })

}

module.exports = {
    authenticateUser,
    authenticateAdmin
}