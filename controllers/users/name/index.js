const buildGetUserByNameMethod = require('./get-user-by-name-method')
const buildDeleteUserByNameMethod = require('./delete-user-by-name-method')
const buildUserPostsController = require('./posts')

module.exports = function buildUsersNameController({findUserByName, removeUserByName, findAllPostsByUser}) {
    const getUserByNameMethod = buildGetUserByNameMethod(findUserByName)
    const deleteUserByNameMethod = buildDeleteUserByNameMethod(removeUserByName)

    const userPostsController = buildUserPostsController(findUserByName, findAllPostsByUser)

    return {
        methods: {
            getMethod: getUserByNameMethod,
            deleteMethod: deleteUserByNameMethod
        },
        controllers: {
            posts: userPostsController
        }
    }
}
