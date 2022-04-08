import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screens/HomeScreen';
import ChatScreen from './screens/ChatScreen';
import LoginScreen from './screens/LoginScreen';
import useAuth from './hooks/useAuth';
import ModalScreen from './screens/ModalScreen';
import MatchedScreen from './screens/MatchedScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    const {user} = useAuth();
  return (
      <Stack.Navigator screenOptions={{
        headerShown: false,
      }}>
        {user ? (
            <>
            <Stack.Group>
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Chat" component={ChatScreen} />
            </Stack.Group>
            <Stack.Group screenOptions={{presentation: 'modal', animation: 'slide_from_bottom'}}>
              <Stack.Screen name='Modal' component={ModalScreen} />
            </Stack.Group>
            <Stack.Group screenOptions={{presentation: 'transparentModal', animation: 'slide_from_bottom'}}>
              <Stack.Screen name='Match' component={MatchedScreen} />
            </Stack.Group>
            </>
        ) : (
            <Stack.Screen name="Login" component={LoginScreen}/>
        )}
    </Stack.Navigator>
  )
}

export default StackNavigator;