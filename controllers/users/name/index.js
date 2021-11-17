const buildGetUserByNameMethod = require('./get-user-by-name-method')
const buildPatchUserMethod = require('./patch-user-method')
const buildDeleteUserByNameMethod = require('./delete-user-by-name-method')
const buildUserPostsController = require('./posts')

module.exports = function buildUsersNameController({
    makeRequestPayload,
    findUserByName,
    editUser,
    removeUserByName,
    findAllPostsByUser
}) {
    const getUserByNameMethod = buildGetUserByNameMethod(findUserByName)
    const patchUserMethod = buildPatchUserMethod(makeRequestPayload, editUser)
    const deleteUserByNameMethod = buildDeleteUserByNameMethod(removeUserByName)

    const userPostsController = buildUserPostsController(findUserByName, findAllPostsByUser)

    return {
        methods: {
            getMethod: getUserByNameMethod,
            patchMethod: patchUserMethod,
            deleteMethod: deleteUserByNameMethod
        },
        controllers: {
            posts: userPostsController
        }
    }
}
