const buildGetAllPostsByUserNameMethod = require('./get-all-posts-by-user-name-method')

module.exports = function buildUserPostController({findUserByName, findAllPostsByUser, validateSession}) {
    const getAllPostsByUserNameMethod = buildGetAllPostsByUserNameMethod({findUserByName, findAllPostsByUser, validateSession})

    return {
        methods: {
            getMethod: getAllPostsByUserNameMethod
        }
    }
}
