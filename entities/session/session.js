module.exports = function buildMakeSession(crypto, lifetimeInSeconds) {
    return function makeSession(userName) {
        return {
            value: {
                id: crypto.randomBytes(16).toString('hex'),
                userName: userName,
                issuedAt: Date.now() / 1000,
                expiresAt: Date.now() / 1000 + lifetimeInSeconds
            }
        }
    }
}
