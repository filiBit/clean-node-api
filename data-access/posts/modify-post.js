module.exports = function buildModifyPost({fs, path, dirPath, makeDataResult}) {
    return async function modifyPost(post) {
        const fileName = post.id + '.json'
        const filePath = path.join(dirPath, fileName)

        const postString = JSON.stringify(post)

        const modifyResult = fs
            .writeFile(filePath, postString, {flag: 'r+'})
            .then(() => [null, post])
            .catch(error => [error.code == 'ENOENT' ? null : error, null])
            .then(result => makeDataResult(result))

        return modifyResult
    }
}
