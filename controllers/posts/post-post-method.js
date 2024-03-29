module.exports = function buildPostPostMethod({makeRequestPayload, addPost, authorize}) {
    return async function postPostMethod(req, res) {
        const postInfoResult = await makeRequestPayload(req)
        if (postInfoResult.isError) {
            res.statusCode = 400
            res.setHeader('Content-Type', 'application/json')
            res.write(JSON.stringify(postInfoResult))
            res.end()
            return
        }
        const postInfo = postInfoResult.value

        const sessionId = req.headers.authorization
        const authorizeResult = await authorize(sessionId, (session) => session.userName === postInfo.authorName)
        if (authorizeResult.isError) {
            res.statusCode = 403
            res.end()
            return
        }

        const addPostResult = await addPost(postInfo)
        if (addPostResult.isError) {
            res.statusCode = 400
            res.setHeader('Content-Type', 'application/json')
            res.write(JSON.stringify(addPostResult))
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
