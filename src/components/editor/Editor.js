import React from "react";
import { View, TextInput } from "react-native";
import { connect } from "react-redux";
import { editing } from "../../redux/actions";
import { styles } from "./EditorStyles";

const Editor = (props) => {
    return(
        <View style={styles.container}>
            <TextInput style={{}}
                placeholder="type here"
                onChangeText={(text) => props.updateNote(text)}
            />
            {/* then have a submit button that calls back the parent with the final text */}
        </View>
    )
}

const mapStateToProps = (state) => {
    return{
        text: state.notes.contentEdit
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        updateNote: (text) => {
            dispatch(editing(text))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Editor);