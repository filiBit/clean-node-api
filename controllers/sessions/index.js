const buildPostAuthenticationInfoMethod = require('./post-authentication-info-method')
const buildSessionIdController = require('./id')

module.exports = function buildSessionsController(makeRequestPayload, sessionUseCases) {
    const {login, logout} = sessionUseCases

    const sessionIdController = buildSessionIdController(logout)

    const postAuthenticationInfoMethod = buildPostAuthenticationInfoMethod(makeRequestPayload, login)

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
