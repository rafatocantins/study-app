import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

const NotesItem = props => {
  return (
  <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
  <View style={styles.notes}>
    <Text>{props.note}</Text>
  </View>
  </TouchableOpacity>    
  )
}

const styles = StyleSheet.create({
  notes: {
  alignContent: 'center',
  backgroundColor: 'orange',
  color: 'white',
  marginTop: 10,
  padding: 12,
  borderRadius: 5,
  }
})

export default NotesItem;