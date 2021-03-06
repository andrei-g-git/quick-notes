import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { notesReducer } from "./notesReducer";
import { uiReducer } from "./uiReducer";


export function makeStore(){
    const allReducers = combineReducers({
        notes: notesReducer,
        ui: uiReducer
    });

    return(
        createStore(
            allReducers,  
            //composeWithDevTools()        
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    );
}