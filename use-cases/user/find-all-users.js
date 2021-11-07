module.exports = function buildFindAllUsers(queryAllUsers) {
    return async function findAllUsers() {
        return await queryAllUsers()
    }
}
