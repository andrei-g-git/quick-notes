import { StyleSheet } from "react-native";
import { viewportContainer } from "../../common-styles/mixins";

export const styles = StyleSheet.create({
    container: {
        // width: "100%",
        // height: "100%",
        // position: "absolute",
        // top: 0,
        // left: 0,
        ...viewportContainer(),
        backgroundColor: "rgb(255, 150, 150)",        
        justifyContent: "space-around"
    }
});