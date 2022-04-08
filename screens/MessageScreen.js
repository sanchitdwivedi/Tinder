import { View, Text } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { SafeAreaView } from 'react-native-safe-area-context'
import getMatchedUserInfo from '../lib/getMatchedUserInfo'
import useAuth from '../hooks/useAuth'
import { useRoute } from "@react-navigation/core"

const MessageScreen = () => {
    const {user} = useAuth();
    const {params} = useRoute();

    const {matchDetails} = params;

  return (
    <SafeAreaView>
        <Header title={getMatchedUserInfo(matchDetails.users, user.uid).displayname} callEnabled/>
      <Text>Message screen</Text>
    </SafeAreaView>
  )
}

export default MessageScreen