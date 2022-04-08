import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    note: {
        width: "100%",
        height: 70,
        marginTop: 10
    },
    content: {
        fontSize: 18,
    },
    blob: {
        width: 24,
        height: 24,
        marginRight: 10,
        //tintColor: "lightgray"
    },
    background: {
        flex: 1,
        flexDirection: "row",
        // width: undefined, 
        // height: undefined,
        width: "115%", 
        height: undefined,
        paddingLeft: 30,
        //justifyContent: "center"
        alignItems: "center"
    }
});