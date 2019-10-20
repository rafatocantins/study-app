import React, {useState} from 'react'
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Modal } from 'react-native'

const InputItem = props => {
  // enteredNote is the value and setEnteredNote is the action 'caused by React.dispatch'
  const [ enteredNote, setEnteredNote ] = useState('');

  const noteInputHandler = (enteredText) => {
  setEnteredNote(enteredText);
  };

  const addNoteHandler = () => {
    props.onAddNote(enteredNote);
    setEnteredNote(''); 
  }

  const dismissHandler = () => {
      props.hideModal();
      setEnteredNote('');
  }

  // bind the argument created on App.js on function addNoteHandler to receive the input text and bind on the two components
  return (
  <Modal visible={props.isVisible} animationType="slide">
  <View style={styles.top}>
    <TextInput 
    placeholder="Write a note"
    style={styles.input}
    onChangeText={noteInputHandler}
    value={enteredNote}
    />
    <TouchableOpacity onPress={addNoteHandler}>
      <Text style={styles.buttonAdd}>Add</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={dismissHandler}>
      <Text style={styles.buttonDismiss}>Dismiss</Text>
    </TouchableOpacity>
  </View>
  </Modal>
  )
}

const styles = StyleSheet.create({
  top: {
  justifyContent: 'center',
  alignContent: 'center',
  padding: 10,
  flex: 1
  },
  input: {
  borderBottomColor: 'orange',
  borderBottomWidth: 2,
  marginBottom: 10,
  },
  buttonAdd: {
  textAlign: 'center',
  backgroundColor: 'orange',
  color: 'white',
  fontWeight: 'bold',
  padding: 10,
  borderRadius: 5,
  marginBottom: 10
  },
  buttonDismiss: {
  textAlign: 'center',
  backgroundColor: 'red',
  color: 'white',
  fontWeight: 'bold',
  padding: 10,
  borderRadius: 5,
  }
})

export default InputItem;