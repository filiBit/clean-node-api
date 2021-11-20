module.exports = function buildDeleteSessionById(removeSession) {
    return async function deleteSessionById(req, res) {
        const {id} = req.pathParameters
        const removeSessionResult = await removeSession(id)
        if (removeSessionResult.isError) {
            res.statusCode = 400
            res.setHeader('Content-Type', 'application/json')
            res.write(JSON.parse(removeSessionResult))
            res.end()
            return
        }

        console.log(removeSessionResult)

        if (removeSessionResult.value === null) {
            res.statusCode = 404
            res.end()
            return
        }

        res.statusCode = 204
        res.end()
    }
}
