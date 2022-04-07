import {
    NOTES_LOADED,
    EDITING, //not using
    EDITED_AT_INDEX,
    NOTES_UPDATED,
    TOGGLED_EDITOR
} from "./actionTypes";

const initialState = {
    notes: [
        {
            content: "hello",
            id: 3243243
        }
    ],
    note: "", 
    noteToEdit: 0, //there is sort of a duplicate in ui reducer ...
    editorOpen: false
}

export const notesReducer = (state = initialState, action) => {
    switch(action.type){
        case NOTES_LOADED:
            return{
                ...state,
                notes: action.payload
            };
            case EDITING: //not using
                return{
                    ...state,
                    note: action.payload
                };     
            case EDITED_AT_INDEX:
                return{
                    ...state,
                    noteToEdit: action.payload
                };      
            case NOTES_UPDATED: 
                return{
                    ...state,
                    note: action.payload
                };    
            case TOGGLED_EDITOR:
                return{
                    ...state,
                    editorOpen: action.payload
                }                                 
        default:
            return state;
    }
}