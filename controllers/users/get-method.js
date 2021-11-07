module.exports = function buildGetMethod(findAllUsers) {
    return async function getMethod(req, res) {
        const allUsersResult = await findAllUsers()

        if (allUsersResult.isError) {
            res.statusCode = 500
            res.end()
            return
        }

        res.statusCode = 200
        res.headers.push('Content-Type', 'application/json')
        res.write(JSON.stringify(allUsersResult.value))
        res.end()
    }
}
