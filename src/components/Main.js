import React from "react";
import { View, Text } from "react-native";
import Notes from "./notes/Notes";
import Editor from "./editor/Editor";

//test
// import { useEffect } from "react";
// let fs = require("react-native-fs");
// const path = fs.ExternalDirectoryPath + "/test.json";
// console.log(path)
// const data = JSON.stringify(
//     [
//         {
//             content: "aaaaaaaaaaa",
//             id: 1111
//         },
//         {
//             content: "bbbbbbbbbbbbbb",
//             id: 2222
//         },
//         {
//             content: "cccccccccccc",
//             id: 3333
//         }              
//     ]
// )
// console.log("reading outside Main:     " + data)


const Main = (props) =>{

    // useEffect(() => {
    //     console.log(data)
    //     fs.writeFile(path, data).then((success) => { console.log("wrote thing to disk") })
    // },[])

    return(
        <View style={{width: "100%", height: "100%"}}>
            <Notes />
            <Editor />
        </View>
    )
}

export default Main;