module.exports = function buildModifyPost({fs, path, dirPath, makeDataResult}) {
  return async function modifyPost(post) {
    const fileName = post.id + ".json";
    const filePath = path.join(dirPath, fileName);
    const promiseOperation = fs
      .writeFile(filePath, post)
      .then(_ => [null, post])
      .catch(error => [error, null]);
    return await makeDataResult(promiseOperation);
  };
};
