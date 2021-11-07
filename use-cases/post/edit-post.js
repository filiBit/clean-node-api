module.exports = function buildEditPost(queryPostById, makePost, modifyPost) {
    return async function editPost(modifiedPostInfo) {
        const existingPostResult = await queryPostById(modifiedPostInfo.id)
        if (existingPostResult.isError) return existingPostResult
        const existingPost = existingPostResult.value

        const mergedPost = {
            ...existingPost,
            textContent: modifiedPostInfo.textContent
        }

        const modifiedPost = makePost(mergedPost)

        return await modifyPost(modifiedPost)
    }
}
