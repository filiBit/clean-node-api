const buildAddUser = require('./add-user')
const buildFindAllUsers = require('./find-all-users')
const buildFindUserByName = require('./find-user-by-name')
const buildEditUser = require('./edit-user')
const buildRemoveUser = require('./remove-user')

module.exports = function buildUserUseCases(userEntityTools, userDataAccess) {
    const {makeUser} = userEntityTools

    const {
        insertUser,
        queryAllUsers,
        queryUserByName,
        modifyUser,
        deleteUser
    } = userDataAccess

    const addUser = buildAddUser({makeUser, queryUserByName, insertUser})
    const findAllUsers = buildFindAllUsers(queryAllUsers)
    const findUserByName = buildFindUserByName(queryUserByName)
    const editUser = buildEditUser({queryUserByName, makeUser, modifyUser})
    const removeUser = buildRemoveUser(deleteUser)

    return {
        addUser,
        editUser,
        findAllUsers,
        findUserByName,
        removeUser
    }
}
