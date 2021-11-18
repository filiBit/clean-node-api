module.exports = function buildPatchPostMethod(makeRequestPayload, editPost) {
    return async function patchPostMethod(req, res) {
        const {id} = req.pathParameters

        const postInfoResult = await makeRequestPayload(req)
        if (postInfoResult.isError) {
            res.statusCode = 400
            res.setHeader('Content-Type', 'application/json')
            res.write(JSON.parse(postInfoResult))
            res.end()
            return
        }
        const postInfo = postInfoResult.value

        const postEditResult = await editPost(id, postInfo)
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
