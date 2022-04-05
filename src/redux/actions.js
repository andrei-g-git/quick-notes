import * as actionTypes from "./actionTypes";

const notesLoaded = (notes) => {
    return{
        type: actionTypes.NOTES_LOADED,
        payload: notes
    }
}

const editing = (content) => {
    return{
        type: actionTypes.EDITING,
        payload: content
    }
}

export {
    notesLoaded,
    editing
}