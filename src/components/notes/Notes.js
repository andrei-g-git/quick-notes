import React from "react";
import { 
    View, 
    FlatList, 
    Text} from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";
import { connect } from "react-redux";
import { useEffect } from "react";
import { notesLoaded } from "../../redux/actions.js";
import Note from "../note/Note.js";
import { styles } from "./NotesStyles";


//delete
const testStyle = {
    alignItems: 'center',
    backgroundColor: 'red',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15
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


                renderHiddenItem={ (data, rowMap) => (
                    <View style={testStyle}>
{/*                         <Text>Left</Text>
                        <Text>Right</Text> */}
                        <View style={{width: 50, height: "100%", backgroundColor: "blue"}}/>
                        <View style={{width: 50, height: 20, backgroundColor: "pink"}}/>
                    </View>
                )}
                leftOpenValue={50}
                rightOpenValue={-50}


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