const buildUsersController = require('./users')
const makeRequestPayload = require('./helpers/make-request-payload.js')
const buildPostsController = require('./posts')
const buildSessionsController = require('./sessions')

module.exports = function buildControllers(useCases) {
    console.log('Building Controllers...')
    const {userUseCases, postUseCases, sessionUseCases} = useCases

    const usersController = buildUsersController({userUseCases, postUseCases, makeRequestPayload})
    const postsController = buildPostsController(makeRequestPayload, postUseCases)
    const sessionsController = buildSessionsController(makeRequestPayload, sessionUseCases)
    return {
        methods: {
            getMethod(req, res) {
                res.statusCode = 200
                res.end()
            }
        },
        controllers: {
            users: usersController,
            posts: postsController,
            sessions: sessionsController
        }
    }
}
