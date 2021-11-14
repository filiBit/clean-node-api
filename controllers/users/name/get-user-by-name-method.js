module.exports = function buildGetUserByNameMethod(findUserByName) {
    return async function getUserByNameMethod(req, res) {
        const {name} = req.pathParameters

        const userResult = await findUserByName(name)
        if (userResult.isError) {
            res.statusCode = 400
            res.setHeader('Content-Type', 'application/json')
            res.write(JSON.stringify(userResult))
            res.end()
            return
        }

        if (userResult.value == null) {
            res.statusCode = 404
            res.end()
            return
        }
        const user = userResult.value

        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.write(JSON.stringify(user))
        res.end()
    }
}
