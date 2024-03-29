module.exports = function buildSelectController(controllers) {
    return function selectController(req) {
        const {pathSegments} = req

        let selectedController = controllers
        for (let i = 0; i < pathSegments.length; i++) {
            const segment = pathSegments[i]

            if (segment == 'favicon.ico') {
                selectedController = controllers
                break
            }

            if (selectedController.controllers) {
                if (selectedController.subParameter) {
                    req.pathParameters[selectedController.subParameter] = segment
                    selectedController =
            selectedController.controllers[selectedController.subParameter]
                } else {
                    selectedController = selectedController.controllers[segment]
                }
            } else {
                selectedController = null
                break
            }
        }

        return selectedController
    }
}
