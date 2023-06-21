import { Button, Pressable, ScrollView, StyleSheet, Text, TextInput, View, Image, Alert } from 'react-native';
import React, { useLayoutEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Header from '../components/Header';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import DatePicker from 'react-native-date-ranges';
import { Feather } from '@expo/vector-icons';
import {
  BottomModal,
  ModalFooter,
  ModalButton,
  ModalTitle,
  SlideAnimation,
  ModalContent
} from 'react-native-modals';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [selectedDates, setSelectedDates] = useState();
  const [time, setTime] = useState(9);
  const [modalVisible, setModalVisible] = useState(false);
  const route = useRoute();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "WellNUS",
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
      headerRight: () => (
        <Ionicons name="notifications-outline" size={24} color="white" style={{ marginRight: 12 }} />
      )
    })
  }, []);

  const customButton = (onConfirm) => {
    return (
      <Button
        onPress={onConfirm}
        style={{
          container: { width: "80%", marginHorizontal: "3%" },
          text: { fontSize: 20 },
        }}
        primary
        title='Submit'
      />
    );
  };

  const searchServices = (service) => {
    if (!route.params || !selectedDates) {
      Alert.alert('Invalid Details', 'Please enter all details', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    }

    if (route.params && selectedDates) {
      navigation.navigate("Services", {
        time: time,
        selectedDates: selectedDates,
        service: service
      })
    }
  };

  return (
    <>
      <View>
        <Header />
        <ScrollView>
          <View style={{ margin: 20, borderColor: "#FFC72C", borderWidth: 3, borderRadius: 6 }}>
            {/* Service Type */}
            <Pressable
            onPress={() => navigation.navigate("Search")}
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                paddingHorizontal: 10,
                borderColor: "#FFC72C",
                borderWidth: 2,
                paddingVertical: 15
              }}>
              <MaterialCommunityIcons name="doctor" size={24} color="black" />
              <TextInput 
                placeholderTextColor="black" 
                placeholder={route?.params ? route.params.input : 'Enter Your Service Type'} 
              />
            </Pressable>

            {/* Date */}
            <Pressable
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                paddingHorizontal: 10,
                borderColor: "#FFC72C",
                borderWidth: 2,
                paddingVertical: 15
              }}>
              <Entypo name="calendar" size={24} color="black" />
              <DatePicker
                style={{ width: 350, height: 30, borderRadius: 0, borderWidth: 0, borderColor: "transparent" }}
                customStyles={{
                  placeholderText: {
                    fontSize: 15,
                    flexDirection: "row",
                    alignItems: "center",
                    marginRight: "auto"
                  },
                  headerStyle: {
                    backgroundColor: "#003580"
                  },
                  contentText: {
                    fontSize: 15,
                    flexDirection: "row",
                    alignItems: "center",
                    marginRight: "auto"
                  }
                }}
                selectedBgColor="#0047AB"
                customButton={(onConfirm) => customButton(onConfirm)}
                onConfirm={(startDate, endDate) => setSelectedDates(startDate, endDate)}
                allowFontScaling={false}
                placeholder={'Select Your Dates'}
                mode={'range'}
              />
            </Pressable>

            {/* Time */}
            <Pressable
              onPress={() => setModalVisible(!modalVisible)}
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                paddingHorizontal: 10,
                borderColor: "#FFC72C",
                borderWidth: 2,
                paddingVertical: 15
              }}>
              <Feather name="clock" size={24} color="black" />
              <>
                {time >=10 ? <TextInput placeholder={`${time}00 hrs`} /> : <TextInput placeholder={`0${time}00 hrs`} />}
              </>
            </Pressable>

            {/* Search Button */}
            <Pressable
            onPress={() => searchServices(route?.params.input)}
              style={{
                paddingHorizontal: 10,
                borderColor: "#FFC72C",
                borderWidth: 2,
                paddingVertical: 15,
                backgroundColor: "#2a52be"
              }}>
              <Text style={{ textAlign: "center", fontSize: 15, fontWeight: "500", color: "white" }}> Search </Text>
            </Pressable>
          </View>

          <Text style={{marginHorizontal: 20, fontSize: 17, fontWeight: "500"}}>Announcements</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>  
            <Pressable 
              style={{
                width: 200, 
                height: 150, 
                marginTop: 10, 
                backgroundColor: "#003580", 
                borderRadius: 10,
                padding: 20,
                marginHorizontal: 20,
              }}>
              <Text style={{color: "white", fontSize: 15, fontWeight: "bold", marginVertical: 7}}>
                NUS Well-Being Day
              </Text>
              <Text style={{color: "white", fontSize: 15, fontWeight: "500"}}>
                On 5 Nov, NUS will shut down to recharge as a community.
              </Text>
            </Pressable>

            <Pressable 
              style={{
                width: 200, 
                height: 150, 
                marginTop: 10, 
                borderColor: "#E0E0E0", 
                borderWidth: 2,
                borderRadius: 10,
                padding: 20,
                marginHorizontal: 10,
              }}>
              <Text style={{fontSize: 15, fontWeight: "bold", marginVertical: 7}}>
                Your Opinion Matters
              </Text>
              <Text style={{fontSize: 15, fontWeight: "500"}}>
                Take this brief survey to provide your opinion about our app.
              </Text>
            </Pressable>

            <Pressable 
              style={{
                width: 200, 
                height: 150, 
                marginTop: 10, 
                borderColor: "#E0E0E0", 
                borderWidth: 2,
                borderRadius: 10,
                padding: 20,
                marginHorizontal: 20,
              }}>
              <Text style={{fontSize: 15, fontWeight: "bold", marginVertical: 7}}>
                Happy Deepavali!
              </Text>
              <Text style={{fontSize: 15, fontWeight: "500"}}>
                Wishing all our Hindu friends a happy Deepavali! 
              </Text>
            </Pressable>
          </ScrollView>

          <Pressable style={{marginTop: 40, justifyContent: "center", alignItems: "center"}}>
            <Image style={{width: 200, height: 100, resizeMode: "cover"}} source={{uri: "/Users/ongjunfeng17/Downloads/nus_logo_full-horizontal.jpg"}}/>
          </Pressable>
        </ScrollView>
      </View>

      <BottomModal
        swipeThreshold={200}
        onBackdropPress={() => setModalVisible(!modalVisible)}
        swipeDirection={["up", "down"]}
        footer={<ModalFooter>
          <ModalButton
            text="Apply"
            style={{
              marginBottom: 20,
              color: "white",
              backgroundColor: "#003580"
            }}
            onPress={() => setModalVisible(!modalVisible)}
          />
        </ModalFooter>}
        modalTitle={<ModalTitle title='Select time' />}
        modalAnimation={
          new SlideAnimation({
            slideFrom: "bottom"
          })
        }
        onHardwareBackPress={() => setModalVisible(!modalVisible)}
        visible={modalVisible}
        onTouchOutside={() => setModalVisible(!modalVisible)}
      >
        <ModalContent style={{ width: "100%", height: 310 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginVertical: 15,
            }}>
            <Text style={{ fontSize: 16, fontWeight: "500" }}> Time </Text>
            <Pressable style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
              <Pressable
                onPress={() => setTime(Math.max(9, time - 1))}
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  borderColor: "#BEBEBE",
                  backgroundColor: "#E0E0E0"
                }}>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "600",
                    paddingHorizontal: 6
                  }}>-</Text>
              </Pressable>

              <Pressable>
                <Text style={{ textAlign: "center", fontSize: 18, fontWeight: "500", paddingHorizontal: 6 }}> {time} </Text>
              </Pressable>

              <Pressable
                onPress={() => setTime(Math.min(17, time + 1))} //(c) => c + 1
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  borderColor: "#BEBEBE",
                  backgroundColor: "#E0E0E0"
                }}>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "600",
                    paddingHorizontal: 6
                  }}>+</Text>
              </Pressable>
            </Pressable>
          </View>
        </ModalContent>
      </BottomModal>
    </>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})