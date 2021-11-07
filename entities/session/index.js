module.exports = function makeSession(crypto, DateApi, lifetimeInSeconds) {
    return function(userId) {
        return {
            id: crypto.randomBytes(16).toString('base64'),
            userId: userId,
            issuedAt: DateApi.now() / 100,
            expiresAt: DateApi.now() / 100 + lifetimeInSeconds
        }
    }
}
