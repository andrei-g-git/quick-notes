

const deleteNote = (notes, index) => {
    let newNotes = notes.map(item => {return {...item}});
    newNotes.splice(index, 1);
    return newNotes;
}

const addNote = (content, notes, index) => {

    //if I import a color array then the function wouldn't be functional...
    const colors = [
        "blue",
        "heavyorange",
        "heavypurple",
        "lightblue",
        "lightgreen",
        "pink",
        "purple",
        "red",
        "yellow"
    ];

    const colorIndex = Math.floor(
        Math.random() * colors.length
    )
    const color = colors[colorIndex];

    const date = (new Date()).getTime();
    const noteObject = {
        content: content,
        id: date,
        color: color
    };    
    notes[index] = noteObject;
    return notes;
}
export {
    deleteNote,
    addNote
}