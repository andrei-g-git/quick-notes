import React from "react";
import { View, Text, Image } from "react-native";
import { connect } from "react-redux";
import Notes from "./notes/Notes";
import Editor from "./editor/Editor";
import OpenEditor from "./open-editor/OpenEditor";
import ConfirmDelete from "./confirm-delete/ConfirmDelete";
import { 
    notesUpdated, 
    toggledEditor,
    toggledDeleteConfirmation,
    notesLoaded 
} from "../redux/actions";
import { writeToJsonFile } from "../utils/writeToJsonFile";
import { saveNoteToFile } from "./main/saveNoteTofile";
import { deleteNote } from "../utils/deleteNote";
import { styles } from "./main/MainStyles";

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
            <View style={styles.main}>

                <OpenEditor style={styles.addNoteContainer}
                    noteIndex={this.props.notes.length} > 
                    <Image style={styles.addNote}
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
                
                {
                    this.props.confirmDeleteOpen ?
                        <ConfirmDelete 
                            deleteNote={this.handleDeleteNote }
                            close={this.handleCloseDeleteModal}
                        />
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

    handleDeleteNote = () => {

        const updatedNotes = deleteNote(this.props.notes, this.props.deleteIndex)

        this.props.loadNotes(updatedNotes);

        //and then write to file
        console.log("........000")
        writeToJsonFile(relativePath, updatedNotes);

        this.props.openConfirmation(false);
    }

    handleCloseDeleteModal = () => {
        this.props.openConfirmation(false);
    }
}

const mapStateToProps = (state) => {
    return{
        notes: state.notes.notes,
        note: state.notes.note,     
        index: state.notes.noteToEdit,
        editorOpen: state.notes.editorOpen,
        confirmDeleteOpen: state.ui.confirmDeleteOpen,
        deleteIndex: state.ui.deleteIndex
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        openEditor: (isOpen) => {
            dispatch(toggledEditor(isOpen));
        },
        openConfirmation: (isOpen) => {
            dispatch(toggledDeleteConfirmation(isOpen))
        },
        loadNotes: (notes) => {
            dispatch(notesLoaded(notes));
        }        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);