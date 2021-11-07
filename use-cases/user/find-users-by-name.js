module.exports = function buildFindUserByName(queryUserByName) {
  return async function findUserByName(name) {
    return await queryUserByName(name);
  };
};
