const buildPostIdController = require('./id')

const buildPostPostMethod = require('./post-post-method')

module.exports = function buildPostsController({makeRequestPayload, postUseCases, sessionUseCases}) {
    const {addPost} = postUseCases
    const {authorize} = sessionUseCases

    const postPostMethod = buildPostPostMethod({makeRequestPayload, addPost, authorize})

    const postIdController = buildPostIdController({makeRequestPayload, postUseCases, authorize})

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
