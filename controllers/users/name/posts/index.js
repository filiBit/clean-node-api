const buildGetAllPostsByUserNameMethod = require('./get-all-posts-by-user-name-method')

module.exports = function buildUserPostController(findUserByName, findAllPostsByUser) {
    const getAllPostsByUserNameMethod = buildGetAllPostsByUserNameMethod(findUserByName, findAllPostsByUser)

    return {
        methods: {
            getMethod: getAllPostsByUserNameMethod
        }
    }
}
