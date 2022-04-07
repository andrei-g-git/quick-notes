import * as actionTypes from "./actionTypes";

const notesLoaded = (notes) => {
    return{
        type: actionTypes.NOTES_LOADED,
        payload: notes
    }
}

const editing = (content) => { //not using
    return{
        type: actionTypes.EDITING,
        payload: content
    }
}

const editedAtIndex = (index) => {
    return{
        type: actionTypes.EDITED_AT_INDEX,
        payload: index
    }
}

const notesUpdated = (content) => {
    return{
        type: actionTypes.NOTES_UPDATED,
        payload: content
    }    
}

const toggledEditor = (isOpen) => {
    return{
        type: actionTypes.TOGGLED_EDITOR,
        payload: isOpen
    }
}

const toggledDeleteConfirmation = (isOpen) => {
    return{
        type: actionTypes.TOGGLED_DELETE_CONFIRMATION,
        payload: isOpen
    }
}

const noteDeleted = (index) => {
    return{
        type: actionTypes.NOTE_DELETED,
        payload: index
    }
}

const deleteIndexPressed = (index) => {
    return{
        type: actionTypes.DELETE_INDEX_PRESSED,
        payload: index
    }
}

export {
    notesLoaded,
    editing, //not using
    editedAtIndex,
    notesUpdated,
    toggledEditor,
    toggledDeleteConfirmation,
    noteDeleted,
    deleteIndexPressed
}