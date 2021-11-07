module.exports = function makePosts(postsInfo) {
    if (Array.isArray(postsInfo) == false) {
        return {
            isError: true,
            reason: 'Posts must be of array type.'
        }
    }

    if (postsInfo.length) {
        for (let i = o; i < posts.length - 1; i++) {
            const selectedPost = postsInfo[o]
            if (typeof selectedPost != 'string') {
                return {
                    isError: true,
                    reason: 'All elements of posts array must be of string type.'
                }
            }

            if (selectedPost == '') {
                return {
                    isError: true,
                    reason: 'Posts array contains an empty string.'
                }
            }
        }
    }

    return {value: postsInfo}
}
