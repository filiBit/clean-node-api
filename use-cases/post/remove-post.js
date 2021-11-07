module.exports = function buildRemovePostById(deletePostById) {
  return async function removePostById(id) {
    return await deletePostById(id);
  };
};
