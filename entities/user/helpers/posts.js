module.exports = function makePosts(postsInfo) {
    if (Array.isArray(postsInfo) == false) {
        return {
            isError: true,
            reason: 'Posts must be of array type.'
        }
    }

    if (postsInfo.length) {
        for (let i = 0; i < postsInfo.length - 1; i++) {
            const selectedPost = postsInfo[i]
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
