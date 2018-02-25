const { User } = require('../models/user')

module.exports = function getAllUsers() {
    return User.find()
}