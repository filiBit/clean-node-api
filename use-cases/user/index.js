const buildAddUser = require('add-user')
const buildRemoveUser = require('remove-user')
const buildFindUserById = require('find-user-by-id')
const buildFindUserByName = require('find-user-by-name')
const buildEditUser = require('edit-user')
const buildFindAllUsers = require('find-all-users')
const buildFindAllUserPosts = require('find-all-user-posts')

module.exports = function buildUserUseCases(userEntityTools, userDataAccess) {
    const {makeUser, makePasswordHash} = userEntityTools

    const {
        insertUser,
        queryAllUsers,
        queryUserById,
        queryUserByName,
        modifyUser,
        deleteUser
    } = userDataAccess

    const addUser = buildAddUser(makeUser, queryUserByName, insertUser)
    const editUser = buildEditUser(makeUser, modifyUser)
    const findAllUsers = buildFindAllUsers(queryAllUsers)
    const findUserById = buildFindUserById(queryUserById)
    const findUserByName = buildFindUserByName(queryUserByName)
    const removeUser = buildRemoveUser(makeUser, deleteUser)

    return {
        addUser,
        editUser,
        findAllUsers,
        findUserById,
        findUserByName,
        findAllUserPosts,
        removeUser
    }
}
