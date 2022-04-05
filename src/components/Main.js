import React from "react";
import { View, Text, Image } from "react-native";
import { connect } from "react-redux";
import Notes from "./notes/Notes";
import Editor from "./editor/Editor";
import OpenEditor from "./open-editor/OpenEditor";
import { notesUpdated, toggledEditor } from "../redux/actions";
import { writeJsonFile } from "../utils/writeJsonFile";

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
                <Notes path={relativePath}/>

                <OpenEditor noteIndex={this.props.notes.length}> 
                    <Image style={{width: 128, height: 128}}
                        source={require("../assets/ui/plus.png")}
                    >
                        
                    </Image>
                </OpenEditor>
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
        const index = this.props.index; //referencing 'this' means it's not a pure function and it's hard to test
        //content below should be helper function in different file with both TEXT and NOTES props, then I can test it
        let notes = this.props.notes;
        const date = (new Date()).getTime();
        const noteObject = {
            content: text,
            id: date
        };
        //console.log(JSON.stringify(notes))
        notes[index] = noteObject;
        const notesJson = JSON.stringify(notes);
        //console.log(notesJson)
        const testPath = writeJsonFile(relativePath, notesJson);

        this.props.openEditor(false); //parameter = isOpen

        return {
            path: testPath,
            json: notesJson
        } //for testing
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