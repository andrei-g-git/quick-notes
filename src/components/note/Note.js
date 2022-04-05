import React from "react";
import { 
    View, 
    Text, 
    TouchableOpacity 
} from "react-native"

const Note = (props) => {
    return(
        <TouchableOpacity>
            <Text>{props.content}</Text>
        </TouchableOpacity>
    );
}

export default Note;