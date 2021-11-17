module.exports = function buildDeletePostByIdMethod(removePostById) {
    return async function deletePostByIdMethod(req, res) {
        const {id} = req.pathParameters

        const removePostResult = removePostById(id)
        if (removePostResult.isError) {
            res.statusCode = 400
            res.setHeader('Content-Type', 'application/json')
            res.write(JSON.stringify(removePostResult))
            res.end()
            return
        }

        if (removePostResult.value === null) {
            res.statusCode = 404
            res.end()
            return
        }

        res.statusCode = 200
        res.end()
    }
}
