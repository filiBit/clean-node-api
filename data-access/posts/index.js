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

    insertPost = buildInsertPost({fs, path, dirPath, makeDataResult})
    queryPostById = buildQueryPostById({fs, path, dirPath, makeDataResult})
    queryPostsByIdList = buildQueryPostsByIdList({
        fs,
        path,
        dirPath,
        queryPostById,
        makeDataResult
    })
    modifyPost = buildModifyPost({fs, path, dirPath, makeDataResult})
    deletePost = buildDeletePost({fs, path, dirPath, makeDataResult})

    return {
        insertPost,
        queryPostById,
        queryPostsByIdList,
        modifyPost,
        deletePost
    }
}
