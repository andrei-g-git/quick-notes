import React from "react";
import { 
    View,
    Text,
    ImageBackground
} from "react-native"
import OpenEditor from "../open-editor/OpenEditor";
import { styles } from "./NoteStyles";

const Note = (props) => {
    return(
        <OpenEditor noteIndex={props.index}>
            <View style={styles.note}>
                <ImageBackground style={styles.background}
                    source={require("../../assets/ui/note-1-green.png")}
                >
                    <Text style={styles.content}>{props.content}</Text>  
                </ImageBackground>
            </View>
        </OpenEditor>
    );
}

export default Note;