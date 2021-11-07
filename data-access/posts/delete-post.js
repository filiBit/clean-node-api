module.exports = function buildDeletePost({fs, path, dirPath, makeDataResult}) {
  return async function deletePost(id) {
    const fileName = id + ".json";
    const filePath = path.join(dirPath, fileName);
    const promiseOperation = fs
      .rm(filePath)
      .then(_ => [null, id])
      .catch(error => [err, null]);

    return await makeDataResult(promiseOperation);
  };
};
