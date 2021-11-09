module.exports = function buildQueryUserByName({path, fs, dirPath, makeDataResult}) {
    return async function queryUserByName(name) {
        const fileName = name + '.json'
        const filePath = path.join(dirPath, fileName)

        const promiseOperation = fs
            .readFile(filePath)
            .then(user => [null, user])
            .catch(error => [error.code == 'ENOENT' ? null : error, null])

        return await makeDataResult(promiseOperation)
    }
}
