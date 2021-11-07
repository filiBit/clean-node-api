module.exports = function buildQueryAllUsers(queryAllUserNames, queryUserByName) {
    return async function queryAllUsers() {
        const nameListResult = await queryAllUserNames()
        if (nameListResult.isError) return nameListResult
        const nameList = nameListResult.value

        let userList = []
        for (let i = 0; i < nameList.length; i++) {
            const userResult = await queryUserByName(nameList[i])
            if (userResult.isError) return userResult

            userList.push(userResult.value)
        }

        return {value: userList}
    }
}
