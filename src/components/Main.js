import React from "react";
import { View, Text, Image } from "react-native";
import { connect } from "react-redux";
import Notes from "./notes/Notes";
import Editor from "./editor/Editor";
import OpenEditor from "./open-editor/OpenEditor";
import { notesUpdated, toggledEditor } from "../redux/actions";
import { writeJsonFile } from "../utils/writeJsonFile";
import { saveNoteToFile } from "./main/saveNoteTofile";

const relativePath = "/test.json";

// const dummyJson = [
//     {
//         content: "xxxxx",
//         id: 11111111111
//     },
//     {
//         content: "yyyyy",
//         id: 2222222
//     },
//     {
//         content: "zzzzzzzz",
//         id: 3333333333
//     }
// ]

// writeJsonFile(relativePath, JSON.stringify(dummyJson))

//const Main = (props) =>{
class Main extends React.Component{ 
    render(){
        return(
            <View style={{width: "100%", height: "100%"}}>

                <OpenEditor noteIndex={this.props.notes.length} > 
                    <Image style={{width: 128, height: 128}}
                        source={require("../assets/ui/plus.png")}
                    >
                        
                    </Image>
                </OpenEditor>


                <Notes path={relativePath}/> 

                {
                    this.props.editorOpen ?
                        <Editor submit={(text) => this.submitEditedText(text)}/>
                    :
                        null
                }
                
            </View>
        )        
    }

    submitEditedText = (text) => {
        saveNoteToFile(
            text,
            this.props.notes,
            this.props.index,
            relativePath
        )
        this.props.openEditor(false); 
    }
}

const mapStateToProps = (state) => {
    return{
        notes: state.notes.notes,
        note: state.notes.note,     
        index: state.notes.noteToEdit,
        editorOpen: state.notes.editorOpen
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        openEditor: (isOpen) => {
            dispatch(toggledEditor(isOpen));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);