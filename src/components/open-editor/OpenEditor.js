import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity 
} from 'react-native';
import { connect } from 'react-redux';
import { editedAtIndex, toggledEditor } from "../../redux/actions";
import { styles } from "./OpenEditorStyles";

function OpenEditor(props) {

    const abc = 123;

    return (
        <TouchableOpacity style={[props.style, styles.openEditor]} 
            onPress={() => {
                props.openNotesAtIndex(props.noteIndex);
                props.openEditor(true);
            }}
        >
            {props.children}
        </TouchableOpacity>
    )
}

const mapDispatchToProps = (dispatch) => {
    return{
        openNotesAtIndex: (index) => {
            dispatch(editedAtIndex(index));
        },
        openEditor: (isOpen) => {
            dispatch(toggledEditor(isOpen));
        }
    }
}

export default connect(null, mapDispatchToProps)(OpenEditor);