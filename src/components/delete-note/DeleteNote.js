import React from 'react';
import {
    TouchableOpacity,
    Text,
    Image,
    View
} from "react-native";
import { connect } from "react-redux";
import { deleteIndexPressed, toggledDeleteConfirmation, notesLoaded } from "../../redux/actions";
import { deleteNote } from '../../utils/manageNotes';
import { writeToJsonFile } from '../../utils/writeToJsonFile';
import { styles } from "./DeleteNoteStyles";

function DeleteNote(props) {
  return (
    <TouchableOpacity style={{}}
        onPress={() => {
            console.log(props.index)
            // props.markNoteIndex(props.index);
            // props.openConfirmationModal(true);


            //handleDeleteNote(props)
            props.delete(props.index)
        }}
    >
        <View style={{/* justifyContent: "center" */}}>
            <Image style={styles.icon}
                source={require("../../assets/ui/delete-pink.png")}
            />
        </View>

    </TouchableOpacity>
  )
}

const handleDeleteNote = (props) => {

    const updatedNotes = deleteNote(props.notes, props.index)

    props.loadNotes(updatedNotes);

    //and then write to file
    writeToJsonFile(relativePath, updatedNotes);

    //this.props.openConfirmation(false);
}

const mapStateToProps = (state) => {
    return{
        notes: state.notes.notes
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        markNoteIndex: (index) => {
            dispatch(deleteIndexPressed(index));
        },
        openConfirmationModal: (isOpen) => {
            dispatch(toggledDeleteConfirmation(isOpen))
        },
        loadNotes: (notes) => {
            dispatch(notesLoaded(notes));
        }     
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteNote);