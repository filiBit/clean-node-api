module.exports = function buildDeleteUser({fs, path, dirPath, makeDataResult}) {
  return async function deleteUser(id) {
    const fileName = id + ".json";
    const filePath = path.join(dirPath, fileName);
    const promiseOperation = fs
      .rm(filePath)
      .then(_ => [null, id])
      .catch(error => [err, null]);

    return await makeDataResult(promiseOperation);
  };
};
