module.exports = function buildAddPost({
    makePost,
    queryUserByName,
    insertPost,
    modifyUser,
    deletePostById
}) {
    return async function addPost(postInfo) {
        const postResult = makePost(postInfo)
        if (postResult.isError) return postResult

        const post = postResult.value

        const userResult = await queryUserByName(post.authorName)
        if (userResult.isError) return userResult

        const user = userResult.value

        if (user == null) {
            return {
                isError: true,
                reason: 'No user with such name'
            }
        }


        const postInsertResult = await insertPost(post)
        if (postInsertResult.isError) return postInsertResult

        user.posts.push(post.id)

        const modifyUserResult = await modifyUser(user)
        if (modifyUserResult.isError) {
            await deletePostById(post.id)
            return modifyUserResult
        }

        return postInsertResult
    }
}
