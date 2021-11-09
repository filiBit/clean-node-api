module.exports = function buildDeleteUser({fs, path, dirPath, makeDataResult}) {
    return async function deleteUser(id) {
        const fileName = id + '.json'
        const filePath = path.join(dirPath, fileName)
        const promiseOperation = fs
            .rm(filePath)
            .then(() => [null, id])
            .catch(error => [error, null])

        return await makeDataResult(promiseOperation)
    }
}
