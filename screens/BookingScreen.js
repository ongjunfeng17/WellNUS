import { Dimensions, StyleSheet, Text, View, SafeAreaView, Pressable, Image } from 'react-native'
import React, {useLayoutEffect} from 'react'
import { useSelector } from 'react-redux'
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const BookingScreen = () => {
  const navigation = useNavigation();
  const { width, height } = Dimensions.get("window");
  const bookings = useSelector((state) => state.booking.booking);
  //console.log(bookings)

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Appointments",
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
      {bookings.length > 0 && bookings.map((item) => (
        <Pressable style={{ margin: 15, flexDirection: "row", backgroundColor: "white" }}>
          <View>
            <Image style={{ height: height / 4, width: width - 280 }} source={{ uri: item.property.image }} />
          </View>

          <View style={{ padding: 10 }}>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
              <Text style={{ width: 200 }}> {item.property.name} </Text>
            </View>

            <View style={{ flexDirection: "row", alignItems: "center", gap: 6, marginTop: 7 }}>
              <MaterialIcons name="stars" size={24} color="green" />
              <Text style={{ width: 200 }}> {item.property.rating} stars </Text>
            </View>

            <Text style={{ width: 210, marginTop: 6, color: "gray", fontWeight: "bold" }}> {item.property.doctor} </Text>

            <>
              {item.time >= 10 ?
                <Text style={{ marginTop: 6, fontWeight: "500", fontSize: 15 }}> {item.time}00 hrs </Text> :
                <Text style={{ marginTop: 6, fontWeight: "500", fontSize: 15 }}> 0{item.time}00 hrs </Text>}
            </>

            <Text style={{ width: 210, marginTop: 100, color: "gray", fontWeight: "bold" }}> {item.selectedDates.startDate} to {item.selectedDates.endDate}</Text>
          </View>
        </Pressable>
      ))}
    </SafeAreaView>
  )
}

export default BookingScreen

const styles = StyleSheet.create({})