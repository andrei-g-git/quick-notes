import React from 'react';
import {
    View,
    Text,
    Button
} from "react-native";
import { connect } from 'react-redux';
import { styles } from './ConfirmDeleteStyles';

function ConfirmDelete(props) {
  return (
    <View style={styles.container}>
        <Button style={{width: 200, height: 50}}
            title="close"
            onPress={props.close}
        />
        <Button style={{width: 200, height: 50}}
            title="delete"
            onPress={props.deleteNote}
        />
    </View>
  )
}

const mapStateToProps = (state) => { //I actually don't need this either since the latest pressed note index is accessable by the main conteroller
    //although careful, it would be possible to swipe a note and reveal the delete btn, then press another note and press the delete button
    //associated with the previously pressed note --- SO WHEN ANOTHER NOTE IS PRESSED THE SWIPE FROM THE PREVIOUS NOTE SHOULD JUST REVERT 
    return{
        index: state.ui.index
    }
}

export default connect(mapStateToProps, null)(ConfirmDelete);