const buildPostAuthenticationInfoMethod = require('./post-authentication-info-method')
const buildSessionIdController = require('./id')

module.exports = function buildSessionsController(makeRequestPayload, sessionUseCases) {
    const {addSession, removeSession} = sessionUseCases

    const sessionIdController = buildSessionIdController(removeSession)

    const postAuthenticationInfoMethod = buildPostAuthenticationInfoMethod(makeRequestPayload, addSession)

    return {
        methods: {
            postMethod: postAuthenticationInfoMethod,
        },
        subParameter: 'id',
        controllers: {
            id: sessionIdController
        }
    }
}
