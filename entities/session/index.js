const isSessionExpired = require('./helpers/is-expired')

const buildMakeSession = require('./session')

module.exports = function buildSessionEntityTools(crypto, lifetimeInSeconds) {
    const makeSession = buildMakeSession(crypto, lifetimeInSeconds)

    return {
        makeSession,
        helpers: {
            isSessionExpired
        }
    }
}
