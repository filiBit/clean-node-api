const buildPostAuthenticationInfoMethod = require('./post-authentication-info-method')
const buildDeleteSessionById = require('./delete-session-by-id.js')

module.exports = function buildSessionsController(makeRequestPayload, sessionUseCases) {
    const {addSession, removeSession} = sessionUseCases
    const postAuthenticationInfoMethod = buildPostAuthenticationInfoMethod(makeRequestPayload, addSession)
    const deleteSessionById = buildDeleteSessionById(removeSession)

    return {
        postMethod: postAuthenticationInfoMethod,
        deleteMethod: deleteSessionById
    }
}
