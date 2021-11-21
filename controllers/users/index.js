const buildPostUserMethod = require('./post-user-method')
const buildGetUsersMethod = require('./get-users-method')
const buildUsersNameController = require('./name')

module.exports = function buildUsersController({userUseCases, postUseCases, sessionUseCases, makeRequestPayload}) {
    const {addUser, findAllUsers, findUserByName, editUser, removeUserByName} = userUseCases
    const {authorize} = sessionUseCases
    const {findAllPostsByUser} = postUseCases

    const postUserMethod = buildPostUserMethod(makeRequestPayload, addUser)
    const getUsersMethod = buildGetUsersMethod(findAllUsers, authorize)

    const usersNameController = buildUsersNameController({
        makeRequestPayload,
        findUserByName,
        editUser,
        removeUserByName,
        findAllPostsByUser,
        authorize
    })

    return {
        methods: {
            postMethod: postUserMethod,
            getMethod: getUsersMethod
        },
        subParameter: 'name',
        controllers: {
            name: usersNameController
        }
    }
}
