module.exports = function buildGetAllPostsByUserNameMethod({findUserByName, findAllPostsByUser}) {
    return async function getAllPostsByUserNameMethod(req, res) {
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

        const allPostsByUserResult = await findAllPostsByUser(user)
        if (allPostsByUserResult.isError) {
            res.statusCode = 400
            res.setHeader('Content-Type', 'application/json')
            res.write(JSON.stringify(userResult))
            res.end()
            return
        }

        const allPostsByUser = allPostsByUserResult.value

        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.write(JSON.stringify(allPostsByUser))
        res.end()
    }
}
