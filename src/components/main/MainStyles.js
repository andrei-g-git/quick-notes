import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    main: {
        width: "100%", 
        height: "100%",
        //backgroundColor: "rgb(100, 255, 100)"
    },
    addNoteContainer: {
        position: "absolute", 
        bottom: 10, 
        right: 10, 
        zIndex: 999
    },
    addNote: {
        width: 64,
        height: 64
    }
});