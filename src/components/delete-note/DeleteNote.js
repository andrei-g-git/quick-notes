import React from 'react';
import {
    TouchableOpacity,
    Text
} from "react-native";
import { connect } from "react-redux";
import { deleteIndexPressed, toggledDeleteConfirmation } from "../../redux/actions";

function DeleteNote(props) {
  return (
    <TouchableOpacity style={{}}
        onPress={() => {
            console.log(props.index)
            props.markNoteIndex(props.index);
            props.openConfirmationModal(true);
        }}
    >
        <Text>
            Delete
        </Text>
    </TouchableOpacity>
  )
}

const mapDispatchToProps = (dispatch) => {
    return{
        markNoteIndex: (index) => {
            dispatch(deleteIndexPressed(index));
        },
        openConfirmationModal: (isOpen) => {
            dispatch(toggledDeleteConfirmation(isOpen))
        }
    }
}

export default connect(null, mapDispatchToProps)(DeleteNote);