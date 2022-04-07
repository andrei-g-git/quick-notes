import {
    TOGGLE_DELETE_REDUCER, //???? tf is this?
    NOTE_DELETED,
    DELETE_INDEX_PRESSED,
    TOGGLED_DELETE_CONFIRMATION
} from "./actionTypes";

const initialState = {
    confirmDeleteOpen: false,
    pressedNote: 0,
    deleteIndex: 0
}

export const uiReducer = (state = initialState, action) => {
    switch(action.type){
        case TOGGLED_DELETE_CONFIRMATION:
            return{
                ...state,
                confirmDeleteOpen: action.payload
            }
        // case NOTE_DELETED:  //wouldn't actually do anything
        //     return{
        //         ...state,

        //     }
        case DELETE_INDEX_PRESSED:
            return{
                ...state,
                deleteIndex: action.payload
            }
        default:
            return state;
    }
}