import React, { useState } from 'react';
import { TouchableOpacity ,StyleSheet, Text, View, TextInput, ScrollView, FlatList } from 'react-native';

// import components
import NotesItem from './components/NotesItem';
import InputItem from './components/InputItem';

export default function App() {
  // use useState to get the values 
  const [ notes, setNotes ] = useState([]);
  // create an handler to add note
  const [ addMode, setIsAddMode ] = useState(false);
  const addNoteHandler = noteTitle => {
    setNotes( currentNote => ([ ...currentNote, { id: Math.random().toString(), value: noteTitle} ]));
    setIsAddMode(false);
  };
  // create an handler to delete notes
  const deleteNote = noteId => {
    setNotes( currentNote => {
      return currentNote.filter((note) => note.id !== noteId)
    })
  }

  return (
    <View style={styles.screen}>
        <TouchableOpacity style={styles.topButton} onPress={() => setIsAddMode(true)}>
          <Text style={styles.buttonText}>Add Note</Text>
        </TouchableOpacity>
        <InputItem hideModal={() => setIsAddMode(false)} isVisible={addMode} onAddNote={addNoteHandler} />
        <FlatList 
          // key extractor helps to find the key element from my object
          keyExtractor={(item, index) => item.id}
          data={notes}
          renderItem={ itemData => (
            <NotesItem id={itemData.item.id} onDelete={deleteNote} note={itemData.item.value} />
          )} 
        />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  topButton: {
    borderWidth: 1,
    borderColor: 'orange',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20
  },
  buttonText: {
    textAlign: 'center',
    color: 'orange'
  }
})

