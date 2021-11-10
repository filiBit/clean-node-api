const makeTextContent = require('./helpers/text-content')
const makeCreatedOn = require('./helpers/created-on')
const makeLastModifiedOn = require('./helpers/last-modified-on')
const makeAuthorId = require('./helpers/author-id')
const buildMakePost = require('./post.js')

module.exports = function buildLastModifiedOn() {
    const makePost = buildMakePost({
        makeTextContent,
        makeCreatedOn,
        makeLastModifiedOn,
        makeAuthorId
    })

    return {
        makePost,
        helpers: {
            makeTextContent,
            makeCreatedOn,
            makeLastModifiedOn,
            makeAuthorId
        }
    }
}
