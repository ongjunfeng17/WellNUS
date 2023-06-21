import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import { Button } from "react-native-paper";
import React, {useLayoutEffect} from 'react'
import { supabase } from "../../lib/supabase";
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Profile",
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white"
      },
      headerStyle: {
        backgroundColor: "#003580",
        height: 110,
        borderBottomColor: "transparent",
        shadowColor: "transparent",
      },
    })
  }, []);

  return (
    <SafeAreaView>
      <Text></Text>
      <Button labelStyle={{fontSize: 17}} onPress={() => supabase.auth.signOut()}> Logout </Button>
    </SafeAreaView>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})