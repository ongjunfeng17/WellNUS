import { StyleSheet, Text, View, SafeAreaView, KeyboardAvoidingView, TextInput, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { auth } from '../firebase';

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  useEffect(() => {
    try {
      const unsubscribe = auth.onAuthStateChanged((authUser) => {
        if (authUser) {
          navigation.navigate("WellNUS")
        }
      })
      return unsubscribe;
    } catch(e) {
      console.log(e)
    }
  }, [])

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: "white", padding: 10, alignItems: "center"}}>
      <KeyboardAvoidingView>
        <View style={{justifyContent: "center", alignItems: "center", marginTop: 100}}>
          <Text style={{color: "#003580", fontSize: 17, fontWeight: "700"}}>Sign In</Text>
          <Text style={{marginTop: 15, fontSize: 18, fontWeight: "500"}}>Sign In To Your Account</Text>
        </View>

        <View style={{marginTop: 50}}>
          <Text style={{color:"gray", fontSize: 17, fontWeight: "600"}}>Email</Text>
          <TextInput value={email} onChangeText={(text) => setEmail(text)} placeholder='enter your email ID' placeholderTextColor={'black'} style={{borderBottomColor:"gray", borderBottomWidth: 1, marginVertical: 10, width: 300}} />
        </View>

        <View style={{marginTop: 15}}>
          <Text style={{color:"gray", fontSize: 17, fontWeight: "600"}}>Password</Text>
          <TextInput value={password} onChangeText={(text) => setPassword(text)} secureTextEntry={true} placeholder='enter your password' placeholderTextColor={'black'} style={{borderBottomColor:"gray", borderBottomWidth: 1, marginVertical: 10, width: 300}} />
        </View>

        <Pressable style={{width: 200, backgroundColor: "#003580", padding: 15, borderRadius: 7, marginTop: 50, marginLeft: "auto", marginRight: "auto"}}>
          <Text style={{textAlign: "center", color: "white", fontSize: 17, fontWeight: "bold"}}>Login</Text>
        </Pressable>

        <Pressable onPress={() => navigation.navigate("Register")} style={{marginTop: 20}}>
          <Text style={{textAlign: "center", color: "gray", fontSize: 17}}>Don't have an account? Sign Up</Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})