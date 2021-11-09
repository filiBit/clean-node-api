module.exports = function buildModifyUser({
    fs,
    path,
    userDirPath,
    makeDataResult
}) {
    return async function modifyUser(user) {
        const fileName = user.id + '.json'
        const filePath = path.join(userDirPath, fileName)
        const promiseOperation = fs
            .writeFile(filePath, user, {flag: 'r+'})
            .then(() => [null, user])
            .catch(error => [error, null])
        return await makeDataResult(promiseOperation)
    }
}
