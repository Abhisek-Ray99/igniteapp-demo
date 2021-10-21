import 'react-native-gesture-handler';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';

import AppStack from './navigation/AppStack'

const App = () => {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})
