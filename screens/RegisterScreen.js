import { StyleSheet, Text, View, SafeAreaView, KeyboardAvoidingView, TextInput, Pressable, Alert } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { setDoc, doc } from "firebase/firestore";

const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const navigation = useNavigation();

  const register = () => {
    if (email === "" || password === "" || phone === "") {
      Alert.alert(
        'Invalid Details',
        'Please enter all the credentials',
        [
          {
            text: 'Cancel',
            onPress: () => Alert.alert('Cancel Pressed'),
            style: 'cancel',
          },
        ],
        {
          cancelable: true,
          onDismiss: () =>
            Alert.alert(
              'This alert was dismissed by tapping outside of the alert dialog.',
            ),
        },
      );
    }
    createUserWithEmailAndPassword(auth, email, password).then((userCredentials) => {
      const user = userCredentials._tokenResponse.email;
      const uid = auth.currentUser.uid;

      setDoc(doc(db, "users", `${uid}`), {
        email: user,
        phone: phone
      })
    })
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white", padding: 10, alignItems: "center" }}>
      <KeyboardAvoidingView>
        <View style={{ justifyContent: "center", alignItems: "center", marginTop: 100 }}>
          <Text style={{ color: "#003580", fontSize: 17, fontWeight: "700" }}>Register</Text>
          <Text style={{ marginTop: 15, fontSize: 18, fontWeight: "500" }}>Create An Account</Text>
        </View>

        <View style={{ marginTop: 50 }}>
          <Text style={{ color: "gray", fontSize: 17, fontWeight: "600" }}>Email</Text>
          <TextInput value={email} onChangeText={(text) => setEmail(text)} placeholder='enter your email ID' placeholderTextColor={'black'} style={{ borderBottomColor: "gray", borderBottomWidth: 1, marginVertical: 10, width: 300 }} />
        </View>

        <View style={{ marginTop: 15 }}>
          <Text style={{ color: "gray", fontSize: 17, fontWeight: "600" }}>Password</Text>
          <TextInput value={password} onChangeText={(text) => setPassword(text)} secureTextEntry={true} placeholder='enter your password' placeholderTextColor={'black'} style={{ borderBottomColor: "gray", borderBottomWidth: 1, marginVertical: 10, width: 300 }} />
        </View>

        <View style={{ marginTop: 15 }}>
          <Text style={{ color: "gray", fontSize: 17, fontWeight: "600" }}>Phone</Text>
          <TextInput value={phone} onChangeText={(text) => setPhone(text)} secureTextEntry={true} placeholder='enter your password' placeholderTextColor={'black'} style={{ borderBottomColor: "gray", borderBottomWidth: 1, marginVertical: 10, width: 300 }} />
        </View>

        <Pressable onPress={register} style={{ width: 200, backgroundColor: "#003580", padding: 15, borderRadius: 7, marginTop: 50, marginLeft: "auto", marginRight: "auto" }}>
          <Text style={{ textAlign: "center", color: "white", fontSize: 17, fontWeight: "bold" }}>Register</Text>
        </Pressable>

        <Pressable onPress={() => navigation.goBack()} style={{ marginTop: 20 }}>
          <Text style={{ textAlign: "center", color: "gray", fontSize: 17 }}>Already have an account? Sign In</Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({})