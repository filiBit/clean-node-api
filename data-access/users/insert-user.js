module.exports = function buildInsertUser({fs, path, dirPath, makeDataResult}) {
    return async function insertUser(user) {
        const fileName = user.id + '.json'
        const filePath = path.join(dirPath, fileName)

        const promiseOperation = fs
            .writeFile(filePath, user, {flag: 'wx'})
            .then(() => [null, user])
            .catch(error => [error, null])

        return await makeDataResult(promiseOperation)
    }
}
