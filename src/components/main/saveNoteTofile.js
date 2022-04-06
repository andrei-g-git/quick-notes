export const saveNoteToFile = (content, notes, index, path) => {
    const date = (new Date()).getTime();
    console.log(date);
    const noteObject = {
        content: content,
        id: date
    };    
    notes[index] = noteObject;
    const notesJson = JSON.stringify(notes);
    //writeJsonFile(relativePath, notesJson);
    let fs = require("react-native-fs");

    const wholePath = fs.ExternalDirectoryPath + path;
    fs.writeFile(wholePath, notesJson).then((success) => { console.log("wrote thing to disk") });

    return notesJson;
}