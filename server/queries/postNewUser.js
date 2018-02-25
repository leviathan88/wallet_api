const { User } = require('../models/user')

module.exports = function postNewUser(email, password) {

    const user = new User({
        email,
        password,
        role: 'user'
    })

    return user.save()
}