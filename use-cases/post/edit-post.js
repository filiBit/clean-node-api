module.exports = function buildEditPost({queryPostById, makePost, modifyPost}) {
    return async function editPost(editedPostInfo) {
        const existingPostResult = await queryPostById(editedPostInfo.id)
        if (existingPostResult.isError) return existingPostResult
        const existingPost = existingPostResult.value

        if (existingPost == null) {
            return {
                isError: true,
                reason: 'No Post with such Id.'
            }
        }

        const mergedPostInfo = {...existingPost, textContent: editedPostInfo.textContent}

        const editedPost = makePost(mergedPostInfo)

        return await modifyPost(editedPost)
    }
}
