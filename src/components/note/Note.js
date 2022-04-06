import React from "react";
import { 
    View,
    Text
} from "react-native"
import OpenEditor from "../open-editor/OpenEditor";
import { styles } from "./NoteStyles";

const Note = (props) => {
    return(
        <OpenEditor noteIndex={props.index}>
            <View style={styles.note}>
                <Text style={styles.content}>{props.content}</Text>
            </View>
        </OpenEditor>
    );
}

export default Note;