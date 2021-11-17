module.exports = function buildQueryUserByName({path, fs, dirPath, makeDataResult}) {
    return async function queryUserByName(name) {
        const fileName = name + '.json'
        const filePath = path.join(dirPath, fileName)

        const userResult = await fs
            .readFile(filePath, 'utf8')
            .then(user => {
                try {
                    return [null, JSON.parse(user)]
                } catch(exception) {
                    return [exception, null]
                }
            })
            .catch(error => [error.code == 'ENOENT' ? null : error, null])
            .then(result => makeDataResult(result))

        return userResult
    }
}
