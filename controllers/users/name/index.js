const buildGetUserByNameMethod = require('./get-user-by-name-method')
const buildPatchUserMethod = require('./patch-user-method')
const buildDeleteUserByNameMethod = require('./delete-user-by-name-method')
const buildUserPostsController = require('./posts')

module.exports = function buildUsersNameController({
    makeRequestPayload,
    findUserByName,
    editUser,
    removeUserByName,
    findAllPostsByUser,
    authorize
}) {
    const getUserByNameMethod = buildGetUserByNameMethod(findUserByName)
    const patchUserMethod = buildPatchUserMethod({makeRequestPayload, editUser, authorize})
    const deleteUserByNameMethod = buildDeleteUserByNameMethod(removeUserByName, authorize)

    const userPostsController = buildUserPostsController({findUserByName, findAllPostsByUser, authorize})

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
