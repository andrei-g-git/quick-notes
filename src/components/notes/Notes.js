import React from "react";
import { View, FlatList, Text } from "react-native";
import { connect } from "react-redux";
import { useEffect } from "react";
import { notesLoaded } from "../../redux/actions.js";
import Note from "../note/Note.js";

let fs = require("react-native-fs");
//const path = fs.ExternalDirectoryPath + "/test.json";

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
        <View>
            <FlatList testID="notes"
                data={props.notes}
                renderItem={({item, index}) => (
                    <Note content={item.content} 
                        index={index}
                    />
                )}
                keyExtractor={item => item.id}
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