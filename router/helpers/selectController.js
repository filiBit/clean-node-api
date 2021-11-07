module.exports = function buildSelectController(controllers) {
  return function selectController(pathSegments) {
    let selectedController = controllers;
    let pathParams = [];
    for (let i = 0; i < pathSegments.length; i++) {
      const segment = pathSegments[i];
      if (selectedController.controllers) {
        if (selectedController.subParameter) {
          req.pathParameters.push({[selectedController.subParameter]: segment});
          selectedController =
            selectedController.controllers[selectedController.subParameter];
        } else {
          selectedController = selectedController.controllers[segment];
        }
      } else {
        selectedController = null;
        break;
      }
    }
    return selectedController;
  };
};