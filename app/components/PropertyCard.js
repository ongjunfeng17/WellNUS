import { Dimensions, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const PropertyCard = ({ time, selectedDates, property, available }) => {
  const { width, height } = Dimensions.get("window");
  const navigation = useNavigation();
  //console.log(route.params)

  return (
    <View>
      <Pressable style={{ margin: 15, flexDirection: "row", backgroundColor: "white" }}>
        <View>
          <Image style={{ height: height / 4, width: width - 280 }} source={{ uri: property.image }} />
        </View>

        <View style={{ padding: 10 }}>
          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
            <Text style={{ width: 200 }}> {property.name} </Text>
            <AntDesign name="hearto" size={24} color="red" />
          </View>

          <View style={{ flexDirection: "row", alignItems: "center", gap: 6, marginTop: 7 }}>
            <MaterialIcons name="stars" size={24} color="green" />
            <Text style={{ width: 200 }}> {property.rating} stars </Text>
          </View>

          <Text style={{ width: 210, marginTop: 6, color: "gray", fontWeight: "bold" }}> {property.doctor} </Text>

          <>
            {property.time >= 10 ?
              <Text style={{ marginTop: 4, fontWeight: "500", fontSize: 15 }}> {property.time}00 hrs </Text> :
              <Text style={{ marginTop: 4, fontWeight: "500", fontSize: 15 }}> 0{property.time}00 hrs </Text>}
          </>

          <View style={{ backgroundColor: "#6082B6", paddingVertical: 2, marginTop: 4, borderRadius: 5, width: 150, paddingHorizontal: 3 }}>
            {available ?
              <Text style={{ textAlign: "center", color: "white" }}> Available </Text> :
              <Text style={{ textAlign: "center", color: "white" }}> Unavailable </Text>}
          </View>

          <Pressable onPress={() => navigation.navigate("User", {
            time: time,
            selectedDates: selectedDates,
            property: property,
            available: available,
            })} style={{ borderColor: "#007FFF", borderWidth: 2, marginTop: 30, borderRadius: 5, padding: 10 }}>
            <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 16, color: "#007FFF" }}>SELECT</Text>
          </Pressable>
        </View>
      </Pressable>
    </View>
  )
}

export default PropertyCard

const styles = StyleSheet.create({})