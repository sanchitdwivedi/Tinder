import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
    const navigation = useNavigation();
  return (
    <View>
      <Text>I am a home screen</Text>
      <Button title="Go to chat screen" onPress={() => navigation.navigate("Chat")}></Button>
    </View>
  )
}

export default HomeScreen