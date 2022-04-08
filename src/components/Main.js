import React from "react";
import { 
    View, 
    ImageBackground, 
    Image 
} from "react-native";
import { connect } from "react-redux";
import Notes from "./notes/Notes";
import Editor from "./editor/Editor";
import OpenEditor from "./open-editor/OpenEditor";
import ConfirmDelete from "./confirm-delete/ConfirmDelete";
import Header from "./header/Header";
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

class Main extends React.Component{ 
    render(){
        return(
            <View style={styles.main}>
                <Header />

                <Image style={{width: "100%", height: "100%", position: "absolute", top: 0, left: 0}}
                    source={require("../assets/ui/background-lightgreen.jpg")}
                />
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