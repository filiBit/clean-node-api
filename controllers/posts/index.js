const buildPostIdController = require('./id')

const buildPostPostMethod = require('./post-post-method')

module.exports = function buildPostsController(makeRequestPayload, postUseCases) {
    const {addPost} = postUseCases

    const postPostMethod = buildPostPostMethod(makeRequestPayload, addPost)

    const postIdController = buildPostIdController(makeRequestPayload, postUseCases)

    return {
        subParameter: 'id',
        methods: {
            postMethod: postPostMethod
        },
        controllers: {
            id: postIdController
        }
    }
}
