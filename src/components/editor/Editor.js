import React from "react";
import { View, TextInput, Button, Image } from "react-native";
//import { connect } from "react-redux";
//import { editing } from "../../redux/actions"; //this couples the component hard but it's safer this way. passing props between components would still be passing state
import { useState } from "react"; //yeah ... this isn't much better, should keep this to a minimul since I'm already using redux
import { styles } from "./EditorStyles";

const Editor = (props) => {

    const [text, setText] = useState("");

    return(
        <View style={styles.container}>
            {/* <View style={styles.modal}> */}
                <Image style={{width: "100%", height: "75%"}}
                    source={require("../../assets/ui/background-edit.png")}
                />
                <TextInput style={{}}
                    placeholder="type here"
                    onChangeText={(text) => setText(text)} //no bueno
                />
                <Button style={{width: 100}} 
                    title="submit"
                    onPress={() => props.submit(text)}
                />                
            {/* </View> */}

        </View>
    )
}

export default Editor;