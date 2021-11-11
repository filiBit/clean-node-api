const buildAddSession = require('./add-session')
const buildVerifySession = require('./verify-session')
const buildDeleteSession = require('./remove-session')

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

    const addSession = buildAddSession({queryUserByName, makePasswordHash, makeSession, insertSession})
    const verifySession = buildVerifySession({querySessionById, isSessionExpired})
    const deleteSession = buildDeleteSession(deleteSessionById)

    return {addSession, verifySession, deleteSession}
}
