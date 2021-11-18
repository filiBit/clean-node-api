module.exports = function buildModifyUser({
    fs,
    path,
    dirPath,
    makeDataResult
}) {
    return async function modifyUser(oldName, user) {
        const oldFileName = oldName + '.json'
        const oldFilePath = path.join(dirPath, oldFileName)

        const newFileName = user.name + '.json'
        const newFilePath = path.join(dirPath, newFileName)

        if (oldName !== user.name) {
            const renameResult = await fs
                .rename(oldFilePath, newFilePath)
                .then(() => [null, null])
                .catch(error => [error.code == 'ENOENT' ? null : error, null])
                .then(result => makeDataResult(result))
            if (renameResult.isError) return renameResult
        }

        const userString = JSON.stringify(user)

        const modifyResult = await fs
            .writeFile(newFilePath, userString, {flag: 'w', encoding: 'utf8'})
            .then(() => [null, user])
            .catch(error => [error.code == 'ENOENT' ? null : error, null])
            .then(result => makeDataResult(result))

        return modifyResult
    }
}
