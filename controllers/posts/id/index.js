const buildGetPostByIdMethod = require('./get-post-by-id-method')
const buildPatchPostMethod = require('./patch-post-method')
const buildDeletePostByIdMethod = require('./delete-post-by-id-method')

module.exports = function buildPostIdController(makeRequestPayload, postUseCases) {
    const { findPostById, editPost, removePostById} = postUseCases
    const getPostByIdMethod = buildGetPostByIdMethod(findPostById)
    const patchPostMethod = buildPatchPostMethod(makeRequestPayload, editPost)
    const deletePostByIdMethod = buildDeletePostByIdMethod(removePostById)

    return {
        methods: {
            getMethod: getPostByIdMethod,
            patchMethot: patchPostMethod ,
            deleteMethod: deletePostByIdMethod
        }
    }
}
