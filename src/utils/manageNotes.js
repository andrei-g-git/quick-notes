const deleteNote = (notes, index) => {
    let newNotes = notes.map(item => {return {...item}});
    newNotes.splice(index, 1);
    return newNotes;
}

const addNote = (content, notes, index) => {
    const date = (new Date()).getTime();
    const noteObject = {
        content: content,
        id: date
    };    
    notes[index] = noteObject;
    return notes;
}
export {
    deleteNote,
    addNote
}