module.exports = function buildInsertPost({fs, path, dirPath, makeDataResult}) {
    return async function insertPost(post) {
        const fileName = post.id + '.json'
        const filePath = path.join(dirPath, fileName)

        const postString = JSON.stringify(post)

        const insertResult = fs
            .writeFile(filePath, postString, {flag: 'wx', encoding: 'utf8'})
            .then(() => [null, post])
            .catch(error => [error, null])
            .then(result => makeDataResult(result))

        return insertResult
    }
}
