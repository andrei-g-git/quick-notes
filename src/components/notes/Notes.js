import React from "react";
import { 
    View, 
    FlatList, 
    Text,
    TouchableOpacity} from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";
import { connect } from "react-redux";
import { useEffect } from "react";
import { notesLoaded } from "../../redux/actions.js";
import Note from "../note/Note.js";
import DeleteNote from "../delete-note/DeleteNote.js";
import { styles } from "./NotesStyles";


let fs = require("react-native-fs");

const Notes = (props) => {

    const path = fs.ExternalDirectoryPath + props.path;

    useEffect(() => {
        fs.readFile(path)
            .then((rawData) => {
                return JSON.parse(rawData);                
            })
            .then((dataObject) => {
                props.loadNotes(dataObject);
            });
        
    },[/* props.notes */])

    return(
        <View style={[styles.notes, {flex: 1}]}>
            <SwipeListView contentContainerStyle={{}}
                testID="notes"
                data={props.notes}
                renderItem={({item, index}) => (
                    <Note content={item.content} 
                        index={index}
                    />
                )}
                keyExtractor={item => item.id}

                renderHiddenItem={ ({item, index}) => (
                    <DeleteNote index={index}></DeleteNote>
                )}
                leftOpenValue={80}
                rightOpenValue={-80}


            />
        </View>
    );
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