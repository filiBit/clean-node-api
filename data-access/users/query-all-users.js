module.exports = function buildQueryAllUsers(queryAllUserIds, queryUserById) {
  return async function queryAllUsers(name) {
    const idListResult = await queryAllUserIds();
    if (idListResult.isError) return idListResult;

    let userList = [];
    for (let i = 0; i < idList.value.length; i++) {
      const userResult = await queryUserById(idList[i]);
      if (userResult.isError) return userResult;

      userList.push(userResult.value);
    }

    return {value: userList};
  };
};
