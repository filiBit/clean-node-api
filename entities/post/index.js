const makeTextContent = require('./helpers/text-content')
const buildMakeCreatedOn = require('./helpers/created-on')
const buildMakeLastModifiedOn = require('./helpers/last-modified-on')
const makeAuthor = require('./helpers/author')

module.exports = function buildLastModifiedOn(DateApi) {
    const makeCreatedOn = buildMakeCreatedOn(Date)
    const makeLastModifiedOn = buildMakeLastModifiedOn(Date)

    return function makePost(postInfo) {
        const textContentResult = makeTextContent(postInfo.textContent)
        if (textContentResult.isError) return textContentResult

        const createdOnResult = makeCreatedOn(postInfo.createdOn)
        if (createdOnResult.isError) return textContentResult

        const lastModifiedOnResult = makeLastModifiedOn(postInfo.lastModifiedOn)
        if (lastModifiedOnResult.isError) return lastModifiedOnResult

        const authorResult = makeAuthor(postInfo.author)
        if (authorResult.isError) return authorResult

        return {
            isError: false,
            value: {
                textContent: textContentResult.value,
                lastModifiedOn: lastModifiedOnResult.value,
                createdOn: createdOnResult.value,
                author: authorResult.value
            }
        }
    }
}
