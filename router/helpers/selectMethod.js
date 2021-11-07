module.exports = function buildSelectMethod(selectController) {
  return function selectMethod(pathSegments, methodName) {
    const selectedController = selectController(pathSegments);
    return controller.methods[methodName + "Method"];
  };
};
