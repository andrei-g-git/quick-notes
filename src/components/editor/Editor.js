import React from "react";
import { View, TextInput, Button } from "react-native";
//import { connect } from "react-redux";
//import { editing } from "../../redux/actions"; //this couples the component hard but it's safer this way. passing props between components would still be passing state
import { useState } from "react"; //yeah ... this isn't much better, should keep this to a minimul since I'm already using redux
import { styles } from "./EditorStyles";

const Editor = (props) => {

    const [text, setText] = useState("");

    return(
        <View style={styles.container}>
            <TextInput style={{}}
                placeholder="type here"
                //onChangeText={(text) => props.updateNote(text)}
                onChangeText={(text) => setText(text)} //no bueno
            />
            {/* then have a submit button that calls back the parent with the final text */}
            <Button style={{width: 100}} 
                title="submit"
                onPress={() => props.submit(text)}
            />
        </View>
    )
}

// const saveNoteToFile = (text)

// const mapStateToProps = (state) => {
//     return{
//         text: state.notes.contentEdit,     //don't have anympre, renamed
//         index: stateNotes.noteToEdit
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return{
//         updateNote: (text) => {
//             dispatch(editing(text))
//         }
//     }
// }

//export default connect(mapStateToProps, mapDispatchToProps)(Editor);
export default Editor;