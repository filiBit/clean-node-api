module.exports = function buildMakePost({
    makeId,
    makeTextContent,
    makeCreatedOn,
    makeLastModifiedOn,
    makeAuthorName
}) {
    return function makePost(postInfo) {
        const idResult = postInfo.id ? {value: postInfo.id} : makeId()
        if (idResult.isError) return idResult

        const textContentResult = makeTextContent(postInfo.textContent)
        if (textContentResult.isError) return textContentResult

        const createdOnResult = makeCreatedOn(postInfo.createdOn)
        if (createdOnResult.isError) return textContentResult

        const lastModifiedOnResult = makeLastModifiedOn(postInfo.lastModifiedOn)
        if (lastModifiedOnResult.isError) return lastModifiedOnResult

        const authorNameResult = makeAuthorName(postInfo.authorName)
        if (authorNameResult.isError) return authorNameResult

        return {
            isError: false,
            value: {
                id: idResult.value,
                textContent: textContentResult.value,
                lastModifiedOn: lastModifiedOnResult.value,
                createdOn: createdOnResult.value,
                authorName: authorNameResult.value
            }
        }
    }
}
