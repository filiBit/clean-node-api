module.exports = function buildQueryPostById({fs, path, dirPath, makeDataResult}) {
    return async function queryPostById(post) {
        const fileName = post + '.json'
        const filePath = path.join(dirPath, fileName)

        const postResult = fs
            .readFile(filePath, 'utf8')
            .then(post => {
                try {
                    return [null, JSON.parse(post)]
                } catch(exception) {
                    return [exception, null]
                }
            })
            .catch(error => [error.code == 'ENOENT' ? null : error, null])
            .then(result => makeDataResult(result))

        return postResult
    }
}
