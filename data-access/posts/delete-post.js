module.exports = function buildDeletePost({fs, path, dirPath, makeDataResult}) {
    return async function deletePost(id) {
        const fileName = id + '.json'
        const filePath = path.join(dirPath, fileName)
        const promiseOperation = fs
            .rm(filePath)
            .then(() => [null, id])
            .catch(error => [error, null])

        return await makeDataResult(promiseOperation)
    }
}
