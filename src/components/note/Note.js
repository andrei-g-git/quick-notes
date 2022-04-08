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

const getImageDynamically =(color) => {
    switch(color){
        case "blue": return require("../../assets/ui/blob-blue.png");
        case "green": return require("../../assets/ui/blob-green.png");
        case "heavygreen": return require("../../assets/ui/blob-heavygreen.png");
        case "heavyorange": return require("../../assets/ui/blob-heavyorange.png");
        case "heavypurple": return require("../../assets/ui/blob-heavypurple.png");
        case "lightblue": return require("../../assets/ui/blob-lightblue.png");
        case "lightgreen": return require("../../assets/ui/blob-lightgreen.png");
        case "orange": return require("../../assets/ui/blob-orange.png");
        case "pink": return require("../../assets/ui/blob-pink.png");
        case "purple": return require("../../assets/ui/blob-purple.png");
        case "red": return require("../../assets/ui/blob-red.png");
        case "yellow": return require("../../assets/ui/blob-yellow.png");        
    }

}
//const pathUtility = require("path");

const Note = (props) => {
    // console.log(props.color)
    // const colorPath = pathUtility.join("../../assets/ui/blob-", props.color, ".png");
    // console.log(colorPath);
    // let adjustedColorPath = colorPath.substring(0, colorPath.lastIndexOf("/"));
    // console.log(adjustedColorPath)
    // adjustedColorPath += ".png";
    // console.log(adjustedColorPath)

    // const anotherPath = "../../assets/ui/blob-" + props.color + ".png";

    // let assetsPath = require.context("../../assets/ui", false, /\.(png|jpe?g|svg)$/);

    return(
        <OpenEditor noteIndex={props.index}>
            <View style={styles.note}>
                <ImageBackground style={styles.background}
                    source={require("../../assets/ui/note-green.png")}
                >
                    <Image style={styles.blob}
                        //source={require("../../assets/ui/blob.png")}
                        //source={blobs[getRandomNumberUpTo(blobs.length)]} //THIS RENDOMIZES EVERY RENDER!!!!! NOTE NEEDS TO STORE THE COLOR AT CREATION
                        //source={assetsPath("./blob-" + props.color + ".png")}   
                        source={getImageDynamically(props.color)}                     
                    />
                    <Text style={styles.content}>{props.content}</Text>  
                </ImageBackground>
            </View>
        </OpenEditor>
    );
}

export default Note;