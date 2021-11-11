module.exports = function buildEditUser({queryUserByName, makeUser, modifyUser}) {
    return async function editUser(editedUserInfo) {
        const existingUserResult = queryUserByName(editedUserInfo.name)
        if (existingUserResult.result.isError) return existingUserResult

        const existingUser = existingUserResult.value

        if (existingUser == null) {
            return {
                isError: true,
                reason: 'No user with such name'
            }
        }

        const mergedUserInfo = {...existingUser, ...editedUserInfo}

        const editedUserResult = makeUser(mergedUserInfo)
        if (editedUserResult.isError) return editedUserResult

        return await modifyUser(editedUserResult)
    }
}
