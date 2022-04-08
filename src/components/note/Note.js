import React from "react";
import { 
    View,
    Text,
    ImageBackground,
    Image
} from "react-native"
import OpenEditor from "../open-editor/OpenEditor";
import { getRandomNumberUpTo } from "../../utils/mathStuff";
import { styles } from "./NoteStyles";

const blobs = [
    require("../../assets/ui/blob-blue.png"),
    require("../../assets/ui/blob-green.png"),
    require("../../assets/ui/blob-heavygreen.png"),
    require("../../assets/ui/blob-heavyorange.png"),
    require("../../assets/ui/blob-heavypurple.png"),
    require("../../assets/ui/blob-lightblue.png"),
    require("../../assets/ui/blob-lightgreen.png"),
    require("../../assets/ui/blob-orange.png"),
    require("../../assets/ui/blob-pink.png"),
    require("../../assets/ui/blob-purple.png"),
    require("../../assets/ui/blob-red.png"),
    require("../../assets/ui/blob-yellow.png")
]

const Note = (props) => {
    return(
        <OpenEditor noteIndex={props.index}>
            <View style={styles.note}>
                <ImageBackground style={styles.background}
                    source={require("../../assets/ui/note-green.png")}
                >
                    <Image style={styles.blob}
                        //source={require("../../assets/ui/blob.png")}
                        source={blobs[getRandomNumberUpTo(blobs.length)]}
                    />
                    <Text style={styles.content}>{props.content}</Text>  
                </ImageBackground>
            </View>
        </OpenEditor>
    );
}

export default Note;