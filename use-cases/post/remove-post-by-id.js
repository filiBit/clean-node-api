module.exports = function buildRemovePostById({queryPostById, deletePostById, queryUserByName, modifyUser}) {
    return async function removePostById(id) {
        const postResult = await queryPostById(id)
        if (postResult.isError || postResult.value == null) return postResult
        const post = postResult.value

        const deleteResult = await deletePostById(id)
        if (deleteResult.isError) return deleteResult

        console.log(deleteResult)

        const userResult = await queryUserByName(post.authorName)
        if (userResult.isError || userResult.value == null) return deleteResult
        const user = userResult.value

        const index = user.postsIds.indexOf(id)
        user.postsIds.splice(index, 1)

        await modifyUser(user.name, user)

        return deleteResult
    }
}
