const buildAddPost = require('./add-post')
const buildFindAllPostsByUser = require('./find-all-posts-by-user')
const buildFindPostById = require('./find-post-by-id')
const buildEditPost = require('./edit-post')
const buildRemovePost = require('./remove-post')

module.exports = function buildPostUseCases({postEntityTools, postDataAccess, userDataAccess}) {
    const {makePost} = postEntityTools
    const {insertPost, queryPostById, queryPostsByIdList, modifyPost, deletePostById} = postDataAccess
    const {queryUserByName, modifyUser} = userDataAccess

    const addPost = buildAddPost({
        makePost,
        queryUserByName,
        insertPost,
        modifyUser,
        deletePostById
    })

    const findAllPostsByUser = buildFindAllPostsByUser(queryPostsByIdList)
    const findPostById = buildFindPostById(queryPostById)
    const editPost = buildEditPost({queryPostById, makePost, modifyPost})
    const removePost = buildRemovePost(deletePostById)

    return {
        addPost,
        editPost,
        findAllPostsByUser,
        findPostById,
        removePost
    }
}
