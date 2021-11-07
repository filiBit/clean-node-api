const buildUsersController = require('./users')
const makeRequestPayload = require('./helpers/make-request-payload.js')

module.exports = function buildControllers(useCases) {
    console.log('Building Controllers...')
    const {userUseCases} = useCases
    const usersController = buildUsersController(
        userUseCases,
        makeRequestPayload
    )
    return {
        methods: {
            getMethod(req, res) {
                res.statusCode = 200
                res.end()
            }
        },
        controllers: {
            users: usersController
        }
    }
}
