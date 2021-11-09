module.exports = function buildMakeDirIfMissing(path, fs) {
    return function makeDirIfMissing(parentDirPath, dirName) {
        const dirPath = path.join(parentDirPath, dirName)

        if (fs.existsSync(dirPath) == false) fs.mkdirSync(dirPath)

        return dirPath
    }
}
