const buildMakeSession = require('./session')

module.exports = function buildSessionEntityTools(crypto, lifetimeInSeconds) {
    const makeSession = buildMakeSession(crypto, lifetimeInSeconds)

    return {
        makeSession
    }
}
