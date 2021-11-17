module.exports = function buildQueryAllUserNames({path, fs, dirPath, makeDataResult}) {
    return async function queryAllUserNames() {
        const allUsersResult = await fs
            .readdir(dirPath)
            .then(fileList => {
                const names = fileList
                    .filter(fileName => path.extname(fileName) === '.json')
                    .map(fileName => path.basename(fileName, '.json'))
                return [null, names]
            })
            .catch(error => [error, null])
            .then(result => makeDataResult(result))

        return allUsersResult
    }
}
