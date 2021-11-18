const buildMakeId = require('./helpers/id')
const makeTextContent = require('./helpers/text-content')
const makeCreatedOn = require('./helpers/created-on')
const makeLastModifiedOn = require('./helpers/last-modified-on')
const makeAuthorName = require('./helpers/author-name')
const buildMakePost = require('./post.js')

module.exports = function buildLastModifiedOn(crypto) {
    const makeId = buildMakeId(crypto)

    const makePost = buildMakePost({
        makeId,
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
