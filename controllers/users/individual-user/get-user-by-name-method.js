module.exports = function buildGetUserByNameMethod(queryUserByName) {
    return async function getUserByNameMethod(req, res) {
        const {name} = req.pathParams

        const userResult = await queryUserById(name)
        if (userResult.isError) {
            res.statusCode = 400
            res.setHeader('Content-Type', 'application/json')
            res.write(JSON.stringify(addUserResult))
            res.end()
            return
        }

        if (userResult.value == null) {
            res.statusCode = 404
            res.end()
            return
        }

        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.write(JSON.stringify(addUserResult.value))
        res.end()
    }
}
