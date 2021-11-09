module.exports = function buildInsertPost({fs, path, dirPath, makeDataResult}) {
    return async function insertPost(post) {
        const fileName = post.id + '.json'
        const filePath = path.join(dirPath, fileName)

        const promiseOperation = fs
            .writeFile(filePath, post, {flag: 'wx'})
            .then(() => [null, post])
            .catch(error => [error, null])

        return await makeDataResult(promiseOperation)
    }
}
