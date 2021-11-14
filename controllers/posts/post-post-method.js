module.exports = function buildPostPostMethod(makeRequestPayload, addPost) {
    return async function postPostMethod(req, res) {
        const postInfoResult = await makeRequestPayload(req)
        if (postInfoResult.isError) {
            res.statusCode = 400
            res.setHeader('Content-Type', 'application/json')
            res.write(postInfoResult)
            res.end()
            return
        }
        const postInfo = postInfoResult.value

        const addPostResult = await addPost(postInfo)
        if (addPostResult.isError) {
            res.statusCode = 400
            res.setHeader('Content-Type', 'application/json')
            res.write(addPostResult)
            res.end()
            return
        }
        const addedPost = addPostResult.value

        res.statusCode = 201
        res.setHeader('Content-Type', 'application/json')
        res.write(JSON.stringify(addedPost))
        res.end()
    }
}
