import React, { useState } from 'react';
import { TouchableOpacity ,StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  // use useState to get the values 
  // enteredNote is the value and setEnteredNote is the action 'caused by React.dispatch'
  const [ enteredNote, setEnteredNote ] = useState('');
  const [ notes, setNotes ] = useState([]);
  // create an handler 
  const noteInputHandler = (enteredText) => {
    setEnteredNote(enteredText);
  };

  const addNoteHandler = () => {
    setNotes( currentNote => ([ ...currentNote, enteredNote ]) )
  };

  return (
    <View style={styles.screen}>
      <View style={styles.top}>
        <TextInput 
          placeholder="Write a note"
          style={styles.input}
          onChangeText={noteInputHandler}
          value={enteredNote}
        />
        <TouchableOpacity onPress={addNoteHandler}>
          <Text style={styles.button}>Add</Text>
        </TouchableOpacity>
      </View>
      <View>
        {notes.map((note, id) => 
          <View key={id} style={styles.notes}>
            <Text>{note}</Text>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
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
  },
  notes: {
    alignContent: 'center',
    width: '100%',
    backgroundColor: 'orange',
    color: 'white',
    marginTop: 10,
    padding: 12,
    borderRadius: 5,
  }
})

