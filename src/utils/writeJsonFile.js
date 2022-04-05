let fs = require("react-native-fs");
//const path = fs.ExternalDirectoryPath + "/test.json";
//console.log(path)

export const writeJsonFile = (path, data) => {
    const wholePath = fs.ExternalDirectoryPath + path;
    fs.writeFile(wholePath, data).then((success) => { console.log("wrote thing to disk") })
    return wholePath; //for testing
}