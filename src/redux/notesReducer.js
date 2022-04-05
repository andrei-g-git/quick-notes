import {
    NOTES_LOADED,
    EDITING
} from "./actionTypes";

const initialState = {
    notes: [
        {
            content: "hello",
            id: 3243243
        }
    ],
    contentEdit: ""
}

export const notesReducer = (state = initialState, action) => {
    switch(action.type){
        case NOTES_LOADED:
            return{
                ...state,
                notes: action.payload
            };
            case EDITING:
                return{
                    ...state,
                    contentEdit: action.payload
                };            
        default:
            return state;
    }
}