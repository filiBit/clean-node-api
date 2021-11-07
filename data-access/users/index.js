const buildInsertUser = require("./insert-user");
const buildQueryAllUsers = require("./query-all-users");
const buildQueryAllUserIds = require("./query-all-user-ids");
const buildQueryUserById = require("./query-user-by-id");
const buildQueryUserByName = require("./query-user-by-name");
const buildModifyUser = require("./modify-user");
const buildDeleteUser = require("./delete-user");

module.exports = function buildUserDataAccess({
  path,
  fs,
  makeDirIfMissing,
  makeDataResult,
  parentDirPath
}) {
  const dirPath = makeDirIfMissing(parentDirPath, "users");

  const insertUser = buildInsertUser({fs, path, dirPath, makeDataResult});
  const queryAllUserIds = buildQueryAllUserIds(dirPath, makeDataResult);
  const queryAllUsers = buildQueryAllUsers(queryAllUserIds, findUserById);
  const queryUserById = buildQueryUserById({fs, path, dirPath, makeDataResult});
  const queryUserByName = buildQueryUserByName(queryAllUserIds, findUserById);
  const modifyUser = buildModifyUser({fs, path, dirPath, makeDataResult});
  const deleteUser = buildDeleteUser({fs, path, dirPath, makeDataResult});

  return {
    insertUser,
    queryAllUsers,
    queryAllUserIds,
    queryUserById,
    queryUserByName,
    modifyUser,
    deleteUser
  };
};
