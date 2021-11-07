const buildIndividualUserController = require('./individual-user-controller')

const buildGetUsersMethod = require('./get-users-method')
const buildPostUserMethod = require('./post-users-method')

module.exports = function buildUsersController() {
    const getUsersMethod = buildGetUsersMethod()
    const postUserMethod = buildPostUserMethod()

    const individualUserController = buildIndividualUserController()

    return {
        methods: {
            getMethod: getUsersMethod,
            postMethod: postUserMethod
        },
        subParameter: 'name',
        controllers: {
            name: individualUserController
        }
    }
}
