export const deleteNote = (notes, index) => {
    let newNotes = notes.map(item => {return {...item}});
    newNotes.splice(index, 1);
    return newNotes;
}