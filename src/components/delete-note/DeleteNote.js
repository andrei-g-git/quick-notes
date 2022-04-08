import React from 'react';
import {
    TouchableOpacity,
    Text,
    Image,
    View
} from "react-native";
import { connect } from "react-redux";
import { deleteIndexPressed, toggledDeleteConfirmation } from "../../redux/actions";
import { styles } from "./DeleteNoteStyles";

function DeleteNote(props) {
  return (
    <TouchableOpacity style={{}}
        onPress={() => {
            console.log(props.index)
            props.markNoteIndex(props.index);
            props.openConfirmationModal(true);
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