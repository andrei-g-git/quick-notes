let fs = require("react-native-fs");

export const writeToJsonFile = (path, notes) => {
    console.log(".........1");
    const wholePath = fs.ExternalDirectoryPath + path;
    console.log(".........2");
    const data = JSON.stringify(notes);
    console.log(".........3");
    fs.writeFile(wholePath, data).then((success) => { console.log("wrote thing to disk") })
    return wholePath; //for testing
}