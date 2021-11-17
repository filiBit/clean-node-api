module.exports = function buildInsertUser({fs, path, dirPath, makeDataResult}) {
    return async function insertUser(user) {
        const fileName = user.name + '.json'
        const filePath = path.join(dirPath, fileName)

        const userString = JSON.stringify(user)

        const insertResult = await fs
            .writeFile(filePath, userString, {flag: 'wx', encoding: 'utf8'})
            .then(() => [null, user])
            .catch(error => [error, null])
            .then(result => makeDataResult(result))

        return insertResult
    }
}
