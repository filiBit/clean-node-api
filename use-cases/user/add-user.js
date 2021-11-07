module.exports = function buildAddUser(makeUser, queryUserByName, insertUser) {
  return async function addUser(userInfo) {
    const userResult = makeUser(userInfo);
    if (userResult.isError) return userResult;

    const findUserResult = await queryUserByName(user.name);
    if (findUserResult.value) {
      return {
        isError: true,
        reason: `Name is already taken.`
      };
    }

    return await userDataAccess.insertUser(user);
  };
};
