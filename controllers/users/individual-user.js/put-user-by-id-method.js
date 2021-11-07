module.exports = function buildPutUserByIdMethod(modifyUserById) {
  return async function putUserByIdMethod(id) {
    const userModifyResult = await modifyUserById(id);
    if (userModifyResult.isError) {
      res.statusCode = 400;
      res.setHeader("Content-Type", "application/json");
      res.write(JSON.stringify(userModifyResult));
      res.end();
      return;
    }

    if (userModifyResult.value == null) {
      res.statusCode = 404;
      res.end();
    }

    res.statusCode = 200;
    res.end();
  };
};
