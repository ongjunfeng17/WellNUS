<<<<<<< HEAD
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StackNavigator from './StackNavigator';
import { ModalPortal } from 'react-native-modals';
import { Provider } from 'react-redux';
import store from '../store';

export default function App() {
  return (
    <>
      <Provider store={store}>
        <StackNavigator />
        <ModalPortal />
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
=======
import { View } from "react-native";
import { Text, Button } from "react-native-paper";
import { supabase } from "../lib/supabase";
//import { AuthProvider, useAuth } from "../contexts/auth";
//import { useState } from "react";

export default function HomePage() {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text> This is the home page </Text>
            <Button onPress={() => supabase.auth.signOut()}> Logout </Button>
        </View>
    )
}
>>>>>>> 720386fd9cd3e896d7c32b3a5a043d6742f79cc9
