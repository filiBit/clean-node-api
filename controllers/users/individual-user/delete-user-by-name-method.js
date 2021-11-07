module.exports = function buildDeleteUserByNameMethod(deleteUserByName) {
  return async function deleteUserByNameMethod(req, res) {
    const {name} = req.pathParams;

    const userDeleteResult = await deleteUserByName(name);
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
