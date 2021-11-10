module.exports = function buildMakeSession(crypto, lifetimeInSeconds) {
    return function makeSession() {
        return function(userId) {
            return {
                id: crypto.randomBytes(16).toString('base64'),
                userId: userId,
                issuedAt: Date.now() / 1000,
                expiresAt: Date.now() / 1000 + lifetimeInSeconds
            }
        }
    }
}
