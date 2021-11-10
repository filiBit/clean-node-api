module.exports = function buildMakePost({
    makeTextContent,
    makeCreatedOn,
    makeLastModifiedOn,
    makeAuthorId
}) {
    return function makePost(postInfo) {
        const textContentResult = makeTextContent(postInfo.textContent)
        if (textContentResult.isError) return textContentResult

        const createdOnResult = makeCreatedOn(postInfo.createdOn)
        if (createdOnResult.isError) return textContentResult

        const lastModifiedOnResult = makeLastModifiedOn(postInfo.lastModifiedOn)
        if (lastModifiedOnResult.isError) return lastModifiedOnResult

        const authorIdResult = makeAuthorId(postInfo.author)
        if (authorIdResult.isError) return authorIdResult

        return {
            isError: false,
            value: {
                textContent: textContentResult.value,
                lastModifiedOn: lastModifiedOnResult.value,
                createdOn: createdOnResult.value,
                author: authorIdResult.value
            }
        }
    }
}
