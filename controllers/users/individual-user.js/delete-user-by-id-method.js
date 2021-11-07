module.exports = function buildDeleteUserByIdMethod(deleteUserById) {
  return async function deleteUserByIdMethod(id) {
    const userDeleteResult = await deleteUserById(id);
    if (userDeleteResult.isError) {
      res.statusCode = 400;
      res.setHeader("Content-Type", "application/json");
      res.write(JSON.stringify(userDeleteResult));
      res.end();
      return;
    }

    res.statusCode = 200;
    res.end();
  };
};
