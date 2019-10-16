import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const NotesItem = props => {
  return (
  <View style={styles.notes}>
    <Text>{props.note}</Text>
  </View>
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