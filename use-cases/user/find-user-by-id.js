module.exports = function buildFindUserById(queryUserById) {
  return async function findUserById(id) {
    return await queryUserById(id);
  };
};
