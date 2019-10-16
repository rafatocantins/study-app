import React, {useState} from 'react'
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native'

const InputItem = props => {
  // enteredNote is the value and setEnteredNote is the action 'caused by React.dispatch'
  const [ enteredNote, setEnteredNote ] = useState('');

  const noteInputHandler = (enteredText) => {
    setEnteredNote(enteredText);
  };

  // bind the argument created on App.js on function addNoteHandler to receive the input text and bind on the two components
  return (
    <View style={styles.top}>
      <TextInput 
      placeholder="Write a note"
      style={styles.input}
      onChangeText={noteInputHandler}
      value={enteredNote}
      />
      <TouchableOpacity onPress={props.onAddNote.bind(this, enteredNote)}>
        <Text style={styles.button}>Add</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center'
  },
  input: {
    borderBottomColor: 'orange',
    borderBottomWidth: 2,
    marginBottom: 5,
    width: '80%'
  },
  button: {
    backgroundColor: 'orange',
    color: 'white',
    fontWeight: 'bold',
    padding: 10,
    borderRadius: 5,
  }
})

export default InputItem;