import React from "react";
import { View, TextInput, Button, Text, TouchableOpacity, Image } from "react-native";
//import { connect } from "react-redux";
//import { editing } from "../../redux/actions"; //this couples the component hard but it's safer this way. passing props between components would still be passing state
import { useState } from "react"; //yeah ... this isn't much better, should keep this to a minimul since I'm already using redux
import { styles } from "./EditorStyles";

import { image } from "../../assets/ui/plus-pink.png";

const Editor = (props) => {

    const [text, setText] = useState("");

    return(
        <View style={styles.container}>
            <Image style={{width: "100%", height: "75%"}}
                source={require("../../assets/ui/bk-fast-noloop.gif")}
            />
            <TextInput style={{position: "absolute", top: "21%", left: "17%", right: "17%", fontSize: 20, alignSelf: "center", zIndex: 999}}
                multiline={true}
                numberOfLines={3}
                maxLength={99}
                placeholder="type here"
                onChangeText={(text) => setText(text)} //no bueno
            />
            <TouchableOpacity style={{position: "absolute", top: "70%", alignSelf: "center"}}
                onPress={() => props.submit(text)}  
            >
                <Image style={{width: 32, height: 32}}
                    source={require("../../assets/ui/plus-pink.png")}
                />
            </TouchableOpacity>
                            
        </View>
    )
}

export default Editor;