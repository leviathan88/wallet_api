const { User } = require('../models/user')

module.exports = function deleteAllUsers() {
    return User.remove({})
}