module.exports = function buildMakeUser({
    makeName,
    makePassword,
    makePasswordHash,
    makeCreatedOn,
    makeLastModifiedOn,
    makePosts
}) {
    return function makeUser(userInfo) {
        const nameResult = makeName(userInfo.name)
        if (nameResult.isError) return nameResult

        const postsResult = makePosts(userInfo.posts)
        if (postsResult.isError) return postsResult

        const createdOnResult = makeCreatedOn(userInfo.createdOn)
        if (createdOnResult.isError) return createdOnResult

        const lastModifiedOnResult = makeLastModifiedOn(userInfo.createdOn)
        if (lastModifiedOnResult.isError) return lastModifiedOnResult

        const passwordResult = userInfo.passwordHash ? {} : makePassword(userInfo.password)
        if (passwordResult.isError) return passwordResult

        const passwordHashResult = userInfo.passwordHash ? {value: userInfo.passwordHash} : makePasswordHash(passwordResult.value)
        if (passwordHashResult.isError) return passwordHashResult

        return {
            value: {
                name: nameResult.value,
                posts: postsResult.value,
                passwordHash: passwordHashResult.value,
                createdOn: createdOnResult.value,
                lastModifiedOn: lastModifiedOnResult.value
            }
        }
    }
}
