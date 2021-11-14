module.exports = function buildPutPostMethod(makeRequestPayload, editPost) {
    return async function putPostMethod(req, res) {
        const postInfoResult = await makeRequestPayload(req)
        if (postInfoResult.isError) {
            res.statusCode = 400
            res.setHeader('Content-Type', 'application/json')
            res.write(postInfoResult)
            res.end()
            return
        }
        const postInfo = postInfoResult.value

        const postEditResult = await editPost(postInfo)
        if (postEditResult.isError) {
            res.statusCode = 400
            res.setHeader('Content-Type', 'application/json')
            res.write(JSON.stringify(postEditResult))
            res.end()
            return
        }
        const editedPost = postEditResult.value

        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.write(JSON.stringify(editedPost))
        res.end()
    }
}
