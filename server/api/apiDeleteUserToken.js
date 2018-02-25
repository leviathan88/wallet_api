module.exports = function apiDeleteUserToken(req, res) {
    req.user.removeToken(req.token).then(() => {
        res.status(200).send()
    }, () => {
        res.status(400).send
    })
}