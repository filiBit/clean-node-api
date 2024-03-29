module.exports = function buildDeletePostById({fs, path, dirPath, makeDataResult}) {
    return async function deletePostById(id) {
        const fileName = id + '.json'
        const filePath = path.join(dirPath, fileName)

        const deleteResult = await fs
            .rm(filePath)
            .then(() => [null, id])
            .catch(error => [error.code == 'ENOENT' ? null : error, null])
            .then(result => makeDataResult(result))

        return deleteResult
    }
}
