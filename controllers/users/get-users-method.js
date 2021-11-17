module.exports = function buildGetMethod(findAllUsers) {
    return async function getMethod(req, res) {
        const allUsersResult = await findAllUsers()
        if (allUsersResult.isError) {
            res.statusCode = 500
            res.end()
            return
        }
        const allUsers = allUsersResult.value

        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.write(JSON.stringify(allUsers))
        res.end()
    }
}
