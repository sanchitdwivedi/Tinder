import StackNavigator from "./StackNavigator";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "./hooks/useAuth";
import { LogBox } from "react-native";
import { logger } from 'react-native-logs';
LogBox.ignoreAllLogs();

var log = logger.createLogger();

log.info('App started');

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StackNavigator />
      </AuthProvider>
    </NavigationContainer>
  );
}
