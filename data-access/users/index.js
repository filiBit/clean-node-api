const buildInsertUser = require('./insert-user')
const buildQueryAllUsers = require('./query-all-users')
const buildQueryAllUserNames = require('./query-all-user-names')
const buildQueryUserByName = require('./query-user-by-name')
const buildModifyUser = require('./modify-user')
const buildDeleteUser = require('./delete-user')

module.exports = function buildUserDataAccess({
    path,
    fs,
    makeDirIfMissing,
    makeDataResult,
    parentDirPath
}) {
    const dirPath = makeDirIfMissing(parentDirPath, 'users')

    const insertUser = buildInsertUser({fs, path, dirPath, makeDataResult})
    const queryAllUserNames = buildQueryAllUserNames(dirPath, makeDataResult)
    const queryAllUsers = buildQueryAllUsers(queryAllUserNames, findUserById)
    const queryUserByName = buildQueryUserByName(queryAllUserNames, findUserById)
    const modifyUser = buildModifyUser({fs, path, dirPath, makeDataResult})
    const deleteUser = buildDeleteUser({fs, path, dirPath, makeDataResult})

    return {
        insertUser,
        queryAllUsers,
        queryAllUserIds,
        queryUserById,
        queryUserByName,
        modifyUser,
        deleteUser
    }
}
