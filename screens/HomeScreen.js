import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import useAuth from '../hooks/useAuth';

const HomeScreen = () => {
    const navigation = useNavigation();
    const {logout} = useAuth();

  return (
    <View>
      <Text>I am a home screen</Text>
      <Button title="Go to chat screen" onPress={() => navigation.navigate("Chat")}></Button>

      <Button title='Logout' onPress={logout}/>
    </View>
  )
}

export default HomeScreen