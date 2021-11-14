const buildPostUserMethod = require('./post-users-method')
const buildGetUsersMethod = require('./get-users-method')
const buildPutUserMethod = require('./put-user-method')
const buildUsersNameController = require('./name')

module.exports = function buildUsersController({userUseCases, postUseCases, makeRequestPayload}) {
    const {addUser, findAllUsers, findUserByName, editUser, removeUserByName} = userUseCases
    const {findAllPostsByUser} = postUseCases

    const postUserMethod = buildPostUserMethod(makeRequestPayload, addUser)
    const getUsersMethod = buildGetUsersMethod(findAllUsers)
    const putUserMethod = buildPutUserMethod(makeRequestPayload, editUser)

    const usersNameController = buildUsersNameController({findUserByName, removeUserByName, findAllPostsByUser})

    return {
        methods: {
            postMethod: postUserMethod,
            getMethod: getUsersMethod,
            putMethod: putUserMethod
        },
        subParameter: 'name',
        controllers: {
            name: usersNameController
        }
    }
}
