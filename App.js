import React, { useState } from 'react';
import { TouchableOpacity ,StyleSheet, Text, View, TextInput, ScrollView, FlatList } from 'react-native';

// import components
import NotesItem from './components/NotesItem';
import InputItem from './components/InputItem';

export default function App() {
  // use useState to get the values 
  const [ notes, setNotes ] = useState([]);
  // create an handler 
  const addNoteHandler = noteTitle => {
    setNotes( currentNote => ([ ...currentNote, { id: Math.random().toString(), value: noteTitle} ]) )
  };

  return (
    <View style={styles.screen}>
        <InputItem onAddNote={addNoteHandler} />
        <FlatList 
          // key extractor helps to find the key element from my object
          keyExtractor={(item, index) => item.id}
          data={notes}
          renderItem={ itemData => (
            <NotesItem note={itemData.item.value} />
          )} 
        />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
})

