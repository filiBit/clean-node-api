module.exports = function buildFindAllPostsByUser(queryPostsByIdList) {
    return async function findAllPostsByUser(user) {
        return await queryPostsByIdList(user.postsIds)
    }
}
