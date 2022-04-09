import React from "react";
import { StyleSheet } from "react-native";
import { viewportContainer, flexPositioning} from "../../common-styles/mixins";

const styles = StyleSheet.create({
    container: {
        ...viewportContainer(),
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        zIndex: 99,
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    modal: {
        //...flexPositioning("80%", "65%")
        //flex: 1,
        justifyContent: "center",//justify,
        alignItems: "center",//align,
        // width: "70%",//width,
        // height: "70%",//height
    },

});

export {
    styles
}