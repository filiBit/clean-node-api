module.exports = function buildGetPostByIdMethod(findPostById) {
    return async function getPostByIdMethod(req, res) {
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

        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.write(JSON.stringify(post))
        res.end()
    }
}
