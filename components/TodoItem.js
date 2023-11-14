import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CheckboxUnchecked from '../assets/checkbox-unchecked.svg';
import CheckboxChecked from '../assets/checkbox-checked.svg';
import DeleteIcon from '../assets/delete.svg';

const TodoItem = () => {
  return (
    <View style={styles.itemContainer}>
        <Pressable 
        hitSlop={10}
        style={styles.itemTextChecked}>

        </Pressable>
        
        <Text style={[styles.itemText, styles.itemTextChecked]}>
            코딩하기
        </Text>
        <Pressable style={[
            styles.deleteButton,
            styles.deleteButtonDone
        ]}
        hitSlop={10}
        ></Pressable>
     </View>
  )
}

export default TodoItem

const styles = StyleSheet.create({})