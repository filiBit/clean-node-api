module.exports = function buildDeleteSessionById(logout) {
    return async function deleteSessionById(req, res) {
        const {id} = req.pathParameters
        
        const logoutResult = await logout(id)
        if (logoutResult.isError) {
            res.statusCode = 400
            res.setHeader('Content-Type', 'application/json')
            res.write(JSON.parse(logoutResult))
            res.end()
            return
        }

        if (logoutResult.value === null) {
            res.statusCode = 404
            res.end()
            return
        }

        res.statusCode = 204
        res.end()
    }
}
