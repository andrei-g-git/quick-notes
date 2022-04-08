import React from "react";
import { 
    View, 
} from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";
import { connect } from "react-redux";
import { notesLoaded } from "../../redux/actions.js";
import { deleteNote } from "../../utils/manageNotes.js";
import { writeToJsonFile } from "../../utils/writeToJsonFile.js";
import Note from "../note/Note.js";
import DeleteNote from "../delete-note/DeleteNote.js";
import { styles } from "./NotesStyles";

let fs = require("react-native-fs");

class Notes extends React.Component{

    path = fs.ExternalDirectoryPath + this.props.path;

    componentDidMount(){
        fs.readFile(this.path)
            .then((rawData) => {
                console.log(rawData)
                return JSON.parse(rawData);                
            })
            .then((dataObject) => {
                this.props.loadNotes(dataObject);
            });
    }

    render(){

        return(
            <View style={[styles.notes, {flex: 1}]}>
                <SwipeListView contentContainerStyle={{}}
                    testID="notes"
                    data={this.props.notes}
                    renderItem={({item, index}) => (
                        <Note content={item.content} 
                            index={index}
                            color={item.color}
                        />
                    )}
                    keyExtractor={item => item.id}

                    renderHiddenItem={ ({item, index}) => (
                        <DeleteNote index={index} 
                            delete={this.handleDeleteNote}
                        />
                    )}
                    leftOpenValue={80}
                    rightOpenValue={-80}


                />
            </View>
        );
    }

    handleDeleteNote = (index) => {
        const updatedNotes = deleteNote(this.props.notes, index)
        this.props.loadNotes(updatedNotes);
        writeToJsonFile(this.path, updatedNotes);
    }
}



const mapStateToProps = (state) => {
    return{
        notes: state.notes.notes
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        loadNotes: (notes) => {
            dispatch(notesLoaded(notes));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Notes);