module.exports = function buildDeleteUserByName({fs, path, dirPath, makeDataResult}) {
    return async function deleteUserByName(name) {
        const fileName = name + '.json'
        const filePath = path.join(dirPath, fileName)

        const deleteResult = await fs
            .rm(filePath)
            .then(() => [null, name])
            .catch(error => [error.code == 'ENOENT' ? null : error, null])
            .then(result => makeDataResult(result))

        return deleteResult
    }
}
