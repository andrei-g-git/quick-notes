import React from 'react';
import { Image } from "react-native";
import OpenEditor from '../open-editor/OpenEditor';
import { styles } from "./AddNoteStyles";

function AddNote(props) {
  return (
      <OpenEditor style={styles.container}
          noteIndex={props.index}
      >
          <Image style={styles.icon}
              source={require("../../assets/ui/plus-pink.png")}
          />
      </OpenEditor>
  )
}

export default AddNote;

