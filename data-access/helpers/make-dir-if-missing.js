module.exports = function buildMakeDirIfMissing(path, fs) {
    return function makeDirIfMissing(parentDirPath, dirName) {
        const dirPath = path.join(parentDirPath, dirName)

        try {
            fs.accessSync(dirPath, fs.constants.F_OK)
        } catch(exception) {
            fs.mkdirSync(dirPath)
        }

        return dirPath
    }
}
