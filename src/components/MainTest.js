import React from 'react';
import {Image, View} from "react-native";

function MainTest() {
  return (
    <View style={{height: "100%", width: "100%"}}>
        <Image style={{height: "100%", width: "100%"}}
            source={{uri: "https://www.saic.edu/~anelso13/gif/images/cat14.gif"}}
        />
    </View>
  )
}

export default MainTest;