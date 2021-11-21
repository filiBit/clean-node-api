module.exports = function buildDeletePostByIdMethod({findPostById, authorize, removePostById}) {
    return async function deletePostByIdMethod(req, res) {
        const {id} = req.pathParameters

        const postResult = await findPostById(id)
        if (postResult.isError) {
            res.statusCode = 400
            res.setHeader('Content-Type', 'application/json')
            res.write(JSON.stringify(postResult))
            res.end()
            return
        }
        const post = postResult.value

        if (post == null) {
            res.statusCode = 404
            res.end()
            return
        }

        const sessionId = req.headers.authorization
        const authorizeResult = await authorize(sessionId, (session) => session.userName === post.authorName)
        if (authorizeResult.isError) {
            res.statusCode = 403
            res.end()
            return
        }

        const removePostResult = await removePostById(id)
        if (removePostResult.isError) {
            res.statusCode = 400
            res.setHeader('Content-Type', 'application/json')
            res.write(JSON.stringify(removePostResult))
            res.end()
            return
        }

        res.statusCode = 204
        res.end()
    }
}
