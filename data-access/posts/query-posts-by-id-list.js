module.exports = function buildQueryPostsByIdList(queryPostById) {
    return async function queryPostsByIdList(ids) {
        const postList = []

        for (let i = 0; i < ids.length - 1; i++) {
            const postResult = await queryPostById(ids[i])
            if (postResult.isError) return postResult

            postList.push(postResult.value)
        }

        return {value: postList}
    }
}
