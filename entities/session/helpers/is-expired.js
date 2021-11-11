module.exports = function isSessionExpired(session) {
    return session.expiresAt > (Date.now() / 1000)
}
