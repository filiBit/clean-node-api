module.exports = function buildDeleteSessionById(removeSession) {
    return function deleteSessionById(req, res) {
        const {id} = req.pathParameters
        const removeSessionResult = removeSession(id)
        if (removeSessionResult.isError) {
            res.statusCode = 400
            res.setHeader('Content-Type', 'application/json')
            res.write(removeSessionResult)
            res.end()
            return
        }

        res.statusCode = 200
        res.end()
    }
}
