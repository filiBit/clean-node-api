module.exports = function buildDeleteUserByNameMethod (removeUserByName, authorize) {
    return async function deleteUserByNameMethod (req, res) {
        const {name} = req.pathParameters
        const sessionId = req.headers.authorization

        const authorizeResult = await authorize(sessionId, (session) => session.userName === name)
        if (authorizeResult.isError) {
            res.statusCode = 403
            res.end()
            return
        }

        const userRemoveResult = await removeUserByName(name)
        if (userRemoveResult.isError) {
            res.statusCode = 400
            res.setHeader('Content-Type', 'application/json')
            res.write(JSON.stringify(userRemoveResult))
            res.end()
            return
        }

        if (userRemoveResult.value === null) {
            res.statusCode = 404
            res.end()
            return
        }

        res.statusCode = 204
        res.end()
    }
}
