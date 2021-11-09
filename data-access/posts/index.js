const buildInsertPost = require('./insert-post')
const buildQueryPostById = require('./query-post-by-id')
const buildQueryPostsByIdList = require('./query-posts-by-id-list')
const buildModifyPost = require('./modify-post')
const buildDeletePost = require('./delete-post')

module.exports = function buildPostsDataAccess({
    path,
    fs,
    makeDirIfMissing,
    makeDataResult,
    parentDirPath
}) {
    const dirPath = makeDirIfMissing(parentDirPath, 'posts')

    const insertPost = buildInsertPost({fs, path, dirPath, makeDataResult})
    const queryPostById = buildQueryPostById({fs, path, dirPath, makeDataResult})
    const queryPostsByIdList = buildQueryPostsByIdList(queryPostById)
    const modifyPost = buildModifyPost({fs, path, dirPath, makeDataResult})
    const deletePost = buildDeletePost({fs, path, dirPath, makeDataResult})

    return {
        insertPost,
        queryPostById,
        queryPostsByIdList,
        modifyPost,
        deletePost
    }
}
