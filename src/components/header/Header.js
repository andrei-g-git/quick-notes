import React from 'react';
import { View, Image } from "react-native";
import { styles } from "./HeaderStyles";

function Header(props) {
  return (
    <View style={styles.container}>
        <Image style={styles.background}
            source={require("../../assets/ui/header-crayon-blue.png")}
        />
    </View>
  )
}

export default Header;