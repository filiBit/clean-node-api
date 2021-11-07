module.exports = function buildQueryUserByName(queryAllUserIds, queryUserById) {
    return async function queryUserByName(name) {
        const idListResult = await queryAllUserIds()
        if (idListResult.isError) return idListResult

        let selectedUser = {value: null}
        for (let i = 0; i < idList.value.length; i++) {
            const userResult = await queryUserById(idList[i])
            if (userResult.value.name == name) {
                selectedUser = userResult
                break
            }
        }

        return selectedUser
    }
}
