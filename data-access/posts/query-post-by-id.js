module.exports = function buildQueryPostById({fs, path, dirPath, makeDataResult}) {
    return async function queryPostById(id) {
        const fileName = id + '.json'
        const filePath = path.join(dirPath, fileName)

        const postResult = await fs
            .readFile(filePath, 'utf8')
            .then(post => {
                try {
                    return [null, JSON.parse(post)]
                } catch(exception) {
                    return [{}, null]
                }
            })
            .catch(error => [error.code == 'ENOENT' ? null : error, null])
            .then(result => makeDataResult(result))

        return postResult
    }
}
