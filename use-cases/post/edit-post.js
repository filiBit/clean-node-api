module.exports = function buildEditPost({queryPostById, makePost, modifyPost}) {
    return async function editPost(postId, editedPostInfo) {
        const existingPostResult = await queryPostById(postId)
        if (existingPostResult.isError) return existingPostResult
        const existingPost = existingPostResult.value

        if (existingPost == null) {
            return {
                isError: true,
                reason: 'No Post with such Id.'
            }
        }

        const mergedPostInfo = {...existingPost, textContent: editedPostInfo.textContent}

        const editedPostResult = makePost(mergedPostInfo)
        const editedPost = editedPostResult.value

        return await modifyPost(editedPost)
    }
}
