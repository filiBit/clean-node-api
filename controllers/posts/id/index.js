const buildGetPostByIdMethod = require('./get-post-by-id-method')
const buildPatchPostMethod = require('./patch-post-method')
const buildDeletePostByIdMethod = require('./delete-post-by-id-method')

module.exports = function buildPostIdController({makeRequestPayload, postUseCases, authorize}) {
    const { findPostById, editPost, removePostById} = postUseCases
    const getPostByIdMethod = buildGetPostByIdMethod(findPostById)
    const patchPostMethod = buildPatchPostMethod({makeRequestPayload, findPostById, editPost, authorize})
    const deletePostByIdMethod = buildDeletePostByIdMethod({authorize, findPostById, removePostById})

    return {
        methods: {
            getMethod: getPostByIdMethod,
            patchMethod: patchPostMethod,
            deleteMethod: deletePostByIdMethod
        }
    }
}
