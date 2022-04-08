import { addNote } from "../../utils/manageNotes";

export const saveNoteToFile = (content, notes, index, path) => {
    // const date = (new Date()).getTime();
    // console.log(date);
    // const noteObject = {
    //     content: content,
    //     id: date
    // };    
    // notes[index] = noteObject;
    const newNotes = addNote(content, notes, index);

    const notesJson = JSON.stringify(newNotes);
    let fs = require("react-native-fs");

    const wholePath = fs.ExternalDirectoryPath + path;
    fs.writeFile(wholePath, notesJson).then((success) => { console.log("wrote thing to disk") });

    return notesJson; //I'm not actually testing this, just the addNote function ... makes this a bit brittle
}