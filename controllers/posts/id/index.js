const buildGetPostByIdMethod = require('./get-post-by-id-method')
const buildDeletePostByIdMethod = require('./delete-post-by-id-method')

module.exports = function buildPostIdController(postUseCases) {
    const { findPostById, removePostById} = postUseCases
    const getPostByIdMethod = buildGetPostByIdMethod(findPostById)
    const deletePostByIdMethod = buildDeletePostByIdMethod(removePostById)

    return {
        methods: {
            getMethod: getPostByIdMethod,
            deleteMethod: deletePostByIdMethod
        }
    }
}
