module.exports = function buildQueryPostById({fs, path, dirPath, makeDataResult}) {
  return async function queryPostById(post) {
    const fileName = post + ".json";
    const filePath = path.join(dirPath, fileName);

    const promiseOperation = fs
      .readFile(filePath)
      .then(user => [null, post])
      .catch(error => [error, null]);

    return await makeDataResult(promiseOperation);
  };
};
