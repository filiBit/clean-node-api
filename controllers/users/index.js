const buildPostUserMethod = require('./post-user-method')
const buildGetUsersMethod = require('./get-users-method')
const buildUsersNameController = require('./name')

module.exports = function buildUsersController({userUseCases, postUseCases, makeRequestPayload}) {
    const {addUser, findAllUsers, findUserByName, editUser, removeUserByName} = userUseCases
    const {findAllPostsByUser} = postUseCases

    const postUserMethod = buildPostUserMethod(makeRequestPayload, addUser)
    const getUsersMethod = buildGetUsersMethod(findAllUsers)

    const usersNameController = buildUsersNameController({
        makeRequestPayload,
        findUserByName,
        editUser,
        removeUserByName,
        findAllPostsByUser
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
