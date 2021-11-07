module.exports = function buildQueryAllUserIds(dirPath, makeDataResult) {
  return async function queryAllUserIds() {
    const promiseOperation = fs
      .readdir(dirPath)
      .then(fileList => {
        const ids = fileList
          .filter(fileName => path.extname(fileName) === ".json")
          .map(fileName => path.basename(fileName, ".json"));
        return [null, ids];
      })
      .catch(error => [error, null]);

    return await makeDataResult(promiseOperation);
  };
};
