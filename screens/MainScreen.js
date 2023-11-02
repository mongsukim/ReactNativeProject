import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'

const MainScreen = () => {
  return (
    <SafeAreaView>
      <StatusBar barstyle={'default'}/>
      <Text>TODO App</Text>
      <View>
        <Text>할 일</Text>
      </View>
      <View/>
      <View>
        <Text>완료된 일</Text>
      </View>
    </SafeAreaView>
  )
}

export default MainScreen

const styles = StyleSheet.create({})