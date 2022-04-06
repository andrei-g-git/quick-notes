import React from "react";
import { 
    Text
} from "react-native"
import OpenEditor from "../open-editor/OpenEditor";

const Note = (props) => {
    return(
        <OpenEditor noteIndex={props.index}>
            <Text>{props.content}</Text>
        </OpenEditor>
    );
}

export default Note;