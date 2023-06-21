import { Pressable, StyleSheet, Text, TextInput, View, Alert } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { savedServices } from '../SavedReducer';

const UserScreen = ({ time, selectedDates, property, available }) => {
  const navigation = useNavigation();
  const route = useRoute();
  //console.log(route.params);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Details",
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

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");

  //console.log(route.params)

  const confirmBooking = () => {
    if (!firstName || !lastName || !email || !phoneNo) {
      Alert.alert('Invalid Details', 'Please enter all details', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ]);
    } else {
      dispatch(savedServices(route.params));
      navigation.navigate("WellNUS");
    }
  }

  return (
    <>
      <View style={{ padding: 20 }}>
        <View style={{ flexDirection: "column", gap: 10, marginTop: 10 }}>
          <Text>First Name</Text>
          <TextInput value={firstName} onChangeText={(text) => setFirstName(text)} style={{ padding: 10, borderColor: "gray", borderWidth: 1 }} />
        </View>

        <View style={{ flexDirection: "column", gap: 10, marginTop: 10 }}>
          <Text>Last Name</Text>
          <TextInput value={lastName} onChangeText={(text) => setLastName(text)} style={{ padding: 10, borderColor: "gray", borderWidth: 1 }} />
        </View>

        <View style={{ flexDirection: "column", gap: 10, marginTop: 10 }}>
          <Text>Email</Text>
          <TextInput value={email} onChangeText={(text) => setEmail(text)} style={{ padding: 10, borderColor: "gray", borderWidth: 1 }} />
        </View>

        <View style={{ flexDirection: "column", gap: 10, marginTop: 10 }}>
          <Text>Phone No</Text>
          <TextInput value={phoneNo} onChangeText={(text) => setPhoneNo(text)} style={{ padding: 10, borderColor: "gray", borderWidth: 1 }} />
        </View>
      </View>

      <Pressable onPress={() => confirmBooking()}
        style={{
          paddingVertical: 15,
          backgroundColor: "#2a52be",
          marginTop: "auto",
          marginBottom: 30,
        }}>
        <Text style={{ textAlign: "center", fontSize: 15, fontWeight: "500", color: "white" }}>Confirm Appointment</Text>
      </Pressable>
    </>
  )
}

export default UserScreen

const styles = StyleSheet.create({})