module.exports = function buildQueryUserById({
  fs,
  path,
  dirPath,
  makeDataResult
}) {
  return async function queryUserById(id) {
    const fileName = id + ".json";
    const filePath = path.join(dirPath, fileName);

    const promiseOperation = fs
      .readFile(filePath)
      .then(user => [null, user])
      .catch(error => [error, null]);

    return await makeDataResult(promiseOperation);
  };
};
