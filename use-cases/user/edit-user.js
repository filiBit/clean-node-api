module.exports = function buildEditUser(makeUser, modifyUser) {
  return async function editUser(existingUser, newUserInfo) {
    const mergedUserInfo = {...existingUserInfo, ...newUserInfo};

    const mergedUserResult = makeUser(mergedUserInfo);
    if (mergedUserResult.isError) return mergedUserResult;

    return await modifyUser(mergedUserResult);
  };
};
