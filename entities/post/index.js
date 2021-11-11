const makeTextContent = require('./helpers/text-content')
const makeCreatedOn = require('./helpers/created-on')
const makeLastModifiedOn = require('./helpers/last-modified-on')
const makeAuthorName = require('./helpers/author-name')
const buildMakePost = require('./post.js')

module.exports = function buildLastModifiedOn() {
    const makePost = buildMakePost({
        makeTextContent,
        makeCreatedOn,
        makeLastModifiedOn,
        makeAuthorName
    })

    return {
        makePost,
        helpers: {
            makeTextContent,
            makeCreatedOn,
            makeLastModifiedOn,
            makeAuthorName
        }
    }
}
