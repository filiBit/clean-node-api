const buildPostIdController = require('./id')

const buildPostPostMethod = require('./post-post-method')
const buildPutPostMethod = require('./put-post-method')

module.exports = function buildPostsController(makeRequestPayload, postUseCases) {
    const {addPost, editPost} = postUseCases

    const postPostMethod = buildPostPostMethod(makeRequestPayload, addPost)
    const putPostMethod = buildPutPostMethod(makeRequestPayload, editPost)

    const postIdController = buildPostIdController(postUseCases)

    return {
        subParameter: 'id',
        methods: {
            postMethod: postPostMethod,
            putMethod:putPostMethod
        },
        controllers: {
            id: postIdController
        }
    }
}
