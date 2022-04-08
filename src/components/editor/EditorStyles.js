import React from "react";
import { StyleSheet } from "react-native";
import { viewportContainer } from "../../common-styles/mixins";

const styles = StyleSheet.create({
    container: {
        // position: "absolute",
        // top: 0,
        // left: 0,
        // width: "100%",
        // height: "100%",
        ...viewportContainer(),
        backgroundColor: "green",
        zIndex: 99
    }
});

export {
    styles
}