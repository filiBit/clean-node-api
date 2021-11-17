module.exports = function buildRemoveUser(deleteUserByName) {
    return async function removeUser(id) {
        return await deleteUserByName(id)
    }
}
