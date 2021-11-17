module.exports = function buildEditUser({queryUserByName, makeUser, modifyUser}) {
    return async function editUser(name, editedUserInfo) {
        const existingUserResult = await queryUserByName(name)
        if (existingUserResult.isError) return existingUserResult
        const existingUser = existingUserResult.value

        if (existingUser == null) {
            return {
                isError: true,
                reason: 'No user with such name'
            }
        }

        const newUserResult = makeUser({...existingUser, name: editedUserInfo.name})
        if (newUserResult.isError) return newUserResult
        const newUser = newUserResult.value

        const existingUserWithNewNameResult = await queryUserByName(newUser.name)
        if (existingUserWithNewNameResult.isError) return existingUserWithNewNameResult
        const existingUserWithNewName = existingUserWithNewNameResult.value

        if (existingUserWithNewName != null) {
            return {
                isError: true,
                reason: 'User name is already taken.'
            }
        }

        console.log(newUser)

        return await modifyUser(name, newUser)
    }
}
