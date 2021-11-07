module.exports = function buildRemoveUser(deleteUser) {
  return async function removeUser(id) {
    return await deleteUser(id);
  };
};
