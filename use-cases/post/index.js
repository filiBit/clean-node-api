const buildAddPost = require('add-post')
const buildEditPost = require('edit-post')
const buildFindAllPostsByUser = require('find-all-posts-by-user')
const buildFindPostById = require('find-post-by-id')
const buildRemovePost = require('remove-post')

module.exports = function buildPostUseCases(
    makePost,
    postDataAccess,
    userDataAccess
) {
    const {
        insertPost,
        queryPostById,
        queryPostsByIdList,
        modifyPost,
        deletePostById
    } = postDataAccess

    const {queryUserById, modifyUser} = userDataAccess

    const addPost = buildAddPost(
        makePost,
        queryUserById,
        insertPost,
        modifyUser,
        deletePost
    )
    const editPost = buildEditPost(queryPostById, modifyPost)
    const findAllPostsByUser = buildFindAllPostsByUser(
        queryPostById,
        makePost,
        modifyPost
    )
    const findPostById = buildFindPostById(queryPostsByIdList)
    const removePost = buildRemovePost(deletePostById)

    return {
        addPost,
        editPost,
        findAllPostsByUser,
        findPostById,
        removePost
    }
}
