module.exports = function buildAddPost(
    makePost,
    queryUserById,
    insertPost,
    modifyUser,
    deletePost
) {
    return async function addPost(postInfo) {
        const postResult = makePost(postInfo)
        if (postResult.isError) return postResult
        const post = postResult.value

        const userResult = await queryUserById(post.author)
        if (userResult.isError || userResult.value == null) return userResult
        const user = userResult.value

        const postInsertResult = await insertPost(post)
        if (postInsertResult.isError) return postInsertResult

        user.posts.push(post.id)
        const modifyUserResult = await modifyUser(user)
        if (modifyUserResult.isError) {
            await deletePost(post.id)
            return modifyUserResult
        }

        return postInsertResult
    }
}
