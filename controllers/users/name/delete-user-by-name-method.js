module.exports = function buildDeleteUserByNameMethod (removeUserByName) {
    return async function deleteUserByNameMethod (req, res) {
        const {name} = req.pathParameters

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
