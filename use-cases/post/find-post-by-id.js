module.exports = function buildFindPostById(queryPostById) {
    return async function findPostById(id) {
        return await queryPostById(id)
    }
}
