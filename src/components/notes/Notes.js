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


//delete
const testStyle = {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,

    zIndex: -1
}


let fs = require("react-native-fs");

const Notes = (props) => {

    const path = fs.ExternalDirectoryPath + props.path;

    useEffect(() => {
        fs.readFile(path)
            .then((rawData) => {
                console.log("raw data is     " + rawData);
                return JSON.parse(rawData);                
            })
            .then((dataObject) => {
                props.loadNotes(dataObject);
            });
        
    },[])

    return(
        <View style={styles.notes}>
            <SwipeListView testID="notes"
                data={props.notes}
                renderItem={({item, index}) => (
                    <Note content={item.content} 
                        index={index}
                    />
                )}
                keyExtractor={item => item.id}


                renderHiddenItem={ ({item, index}) => (
                    // <View style={testStyle}>
                    //     <TouchableOpacity style={{width: 80, height: "100%", backgroundColor: "blue"}}>
                    //         <Text>EDIT</Text>
                    //     </TouchableOpacity>
                    //     <TouchableOpacity style={{width: 80, height: 20, backgroundColor: "pink"}}>
                    //         <Text>DELETE</Text>
                    //     </TouchableOpacity>
                    // </View>
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