module.exports = function buildQueryListOfPostsByIds({
    fs,
    path,
    dirPath,
    queryPostById,
    makeDataResult
}) {
    return async function queryListOfPostsByIds(ids) {
        const postList = []

        for (let i = 0; i < ids.length - 1; i++) {
            const postResult = await queryPostById(id)
            if (postResult.isError) return postResult

            postList.push(postResult.value)
        }

        return {value: postList}
    }
}
