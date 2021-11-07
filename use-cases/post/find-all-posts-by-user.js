module.exports = function buildFindAllPostsByUser(queryPostsByIdList) {
  return async function findAllUserPosts(user) {
    return await queryPostsByIdList(user.posts);
  };
};
