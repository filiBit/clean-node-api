const buildInsertUser = require('./insert-user')
const buildQueryAllUsers = require('./query-all-users')
const buildQueryAllUserNames = require('./query-all-user-names')
const buildQueryUserByName = require('./query-user-by-name')
const buildModifyUser = require('./modify-user')
const buildDeleteUserById = require('./delete-user-by-id')

module.exports = function buildUserDataAccess({
    path,
    fs,
    makeDirIfMissing,
    makeDataResult,
    parentDirPath
}) {
    const dirPath = makeDirIfMissing(parentDirPath, 'users')

    const insertUser = buildInsertUser({fs, path, dirPath, makeDataResult})
    const queryUserByName = buildQueryUserByName({path, fs, dirPath, makeDataResult})
    const queryAllUserNames = buildQueryAllUserNames({path, fs, dirPath, makeDataResult})
    const queryAllUsers = buildQueryAllUsers(queryAllUserNames, queryUserByName)
    const modifyUser = buildModifyUser({fs, path, dirPath, makeDataResult})
    const deleteUserById = buildDeleteUserById({fs, path, dirPath, makeDataResult})

    return {
        insertUser,
        queryAllUsers,
        queryAllUserNames,
        queryUserByName,
        modifyUser,
        deleteUserById
    }
}
