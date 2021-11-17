const buildAddUser = require('./add-user')
const buildFindAllUsers = require('./find-all-users')
const buildFindUserByName = require('./find-user-by-name')
const buildEditUser = require('./edit-user')
const buildRemoveUserByName = require('./remove-user-by-name')

module.exports = function buildUserUseCases(userEntityTools, userDataAccess) {
    const {makeUser} = userEntityTools

    const {
        insertUser,
        queryAllUsers,
        queryUserByName,
        modifyUser,
        deleteUserByName
    } = userDataAccess

    const addUser = buildAddUser({makeUser, queryUserByName, insertUser})
    const findAllUsers = buildFindAllUsers(queryAllUsers)
    const findUserByName = buildFindUserByName(queryUserByName)
    const editUser = buildEditUser({queryUserByName, makeUser, modifyUser})
    const removeUserByName = buildRemoveUserByName(deleteUserByName)

    return {
        addUser,
        editUser,
        findAllUsers,
        findUserByName,
        removeUserByName
    }
}
