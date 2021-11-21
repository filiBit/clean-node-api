const buildLogin = require('./login')
const buildAuthorize = require('./authorize')
const buildLogout = require('./logout')

module.exports = function buildSessionUseCases({
    sessionEntityTools,
    sessionDataAccess,
    userEntityTools,
    userDataAccess
}) {
    const {insertSession, querySessionById, deleteSessionById} = sessionDataAccess
    const {makeSession, helpers: {isSessionExpired}} = sessionEntityTools
    const {helpers: {makePasswordHash}} = userEntityTools
    const {queryUserByName} = userDataAccess

    const login = buildLogin({queryUserByName, makePasswordHash, makeSession, insertSession})
    const authorize = buildAuthorize({querySessionById, isSessionExpired})
    const logout = buildLogout(deleteSessionById)

    return {login, authorize, logout}
}
