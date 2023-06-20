import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Octicons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import PropertyCard from '../components/PropertyCard';
import {
  BottomModal,
  ModalFooter,
  ModalButton,
  ModalTitle,
  SlideAnimation,
  ModalContent
} from 'react-native-modals';

const ServicesScreen = () => {
  const route = useRoute();
  //console.log(route.params)
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState([]);

  const data = [
    {
      id: "0",
      service: "See A Doctor",
      serviceImage: "https://images.pexels.com/photos/7659564/pexels-photo-7659564.jpeg?auto=compress&cs=tinysrgb&w=800",
      shortDescription: "",
      properties: [
        {
          id: "1",
          name: "GP",
          doctor: "Dr. Tan",
          time: 9,
          available: true,
          rating: 4.5,
          image: "https://beta.parkwayshenton.com/images/default-source/default-album/family-physician-general-practitioner-main-d.jpg?sfvrsn=d395831e_6",
        },
        {
          id: "2",
          name: "GP",
          doctor: "Dr. Tan",
          time: 10,
          available: true,
          rating: 4.5,
          image: "https://beta.parkwayshenton.com/images/default-source/default-album/family-physician-general-practitioner-main-d.jpg?sfvrsn=d395831e_6",
        },
        {
          id: "3",
          name: "GP",
          doctor: "Dr. Tan",
          time: 11,
          available: true,
          rating: 4.5,
          image: "https://beta.parkwayshenton.com/images/default-source/default-album/family-physician-general-practitioner-main-d.jpg?sfvrsn=d395831e_6",
        },
        {
          id: "4",
          name: "GP",
          doctor: "Dr. Chen",
          time: 9,
          available: true,
          rating: 4.0,
          image: "https://beta.parkwayshenton.com/images/default-source/default-album/family-physician-general-practitioner-main-d.jpg?sfvrsn=d395831e_6",
        },
      ],
    },
    {
      id: "2",
      service: "Insurance",
      serviceImage: "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg",
      shortDescription: "Submit Your Insurance Claims",
      properties: [
        {
          name: "Insurance",
          doctor: "Ms. Soh",
          time: 9,
          image: "https://media.istockphoto.com/id/1299694686/photo/pretty-blonde-woman-in-office-with-documentation-looking-at-camera.jpg?s=612x612&w=0&k=20&c=NYh5l-mhHdR88CJDnIvhKl68qggo-65EsZFes603bhs=",
        },
      ],
    },
  ]

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
    })
  }, []);

  const filters = [
    {
      id: "0",
      filter: "rating:Low to High",
    },
    {
      id: "1",
      filter: "rating:High to Low",
    },
  ];

  const searchServices = data.filter((item) => item.service === route.params.service);

  const [sortedData, setSortedData] = useState(data);

  const compare = (a, b) => {
    if (a.rating > b.rating) {
      return -1;
    }
    if (a.rating < b.rating) {
      return 1;
    }
    return 0;
  }

  const comparison = (a, b) => {
    if (a.rating > b.rating) {
      return 1;
    }
    if (a.rating < b.rating) {
      return -1;
    }
    return 0;
  }

  const applyFilter = (filter) => {
    setModalVisible(false)
    switch(filter) {
      case "rating:High to Low":
        searchServices.map((val) => val.properties.sort(compare));
        setSortedData(searchServices);
        break;
        case "rating:Low to High":
          searchServices.map((val) => val.properties.sort(comparison));
          setSortedData(searchServices);
          break;
    }
  };

  return (
    <View>
      <Pressable
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 20,
          padding: 12,
          backgroundColor: "white"
        }}
      >
        <Pressable
          onPress={() => setModalVisible(!modalVisible)}
          style={{
            flexDirection: "row",
            alignItems: "center"
          }}
        >
          <Octicons name="arrow-switch" size={22} color="gray" />
          <Text style={{
            fontSize: 15,
            fontWeight: "500",
            marginLeft: 8
          }}>Sort</Text>
        </Pressable>

        <Pressable
          style={{
            flexDirection: "row",
            alignItems: "center"
          }}
        >
          <Ionicons name="filter" size={24} color="gray" />
          <Text style={{
            fontSize: 15,
            fontWeight: "500",
            marginLeft: 8
          }}>Filter</Text>
        </Pressable>

        <Pressable
          onPress={() => navigation.navigate("Map", {
            searchResults: searchServices, 
          })}
          style={{
            flexDirection: "row",
            alignItems: "center"
          }}
        >
          <FontAwesome5 name="map-marker-alt" size={24} color="gray" />
          <Text style={{
            fontSize: 15,
            fontWeight: "500",
            marginLeft: 8
          }}>Map</Text>
        </Pressable>
      </Pressable>

      <ScrollView style={{ backgroundColor: "#F5F5F5" }}>
        {sortedData?.filter((item) => item.service === route.params.service)
          .map((item) => item.properties
            .filter((property) => property.time === route.params.time)
            .map((property, index) =>
              <PropertyCard
                key={index}
                time={route.params.time}
                selectedDates={route.params.selectedDates}
                property={property}
                available={property.available}
              />)
          )}
      </ScrollView>

      <BottomModal
        onBackdropPress={() => setModalVisible(!modalVisible)}
        swipeDirection={["up", "down"]}
        swipeThreshold={200}
        footer={
          <ModalFooter>
            <Pressable onPress={() => applyFilter(selectedFilter)} style={{ paddingRight: 10, marginLeft: "auto", marginRight: "auto", marginVertical: 10, marginBottom: 30 }}>
              <Text>Apply</Text>
            </Pressable>
          </ModalFooter>}
        modalTitle={<ModalTitle title='Sort and Filter' />}
        modalAnimation={
          new SlideAnimation({
            slideFrom: "bottom"
          })
        }
        onHardwareBackPress={() => setModalVisible(!modalVisible)}
        visible={modalVisible}
        onTouchOutside={() => setModalVisible(!modalVisible)}>
          <ModalContent style={{width:"100%", height:280}}>
            <View style={{flexDirection: "row"}}>
              <View style={{marginVertical: 10, flex: 2, height: 200, borderRightWidth: 1, borderColor: "#E0E0E0"}}>
                <Text style={{textAlign: "center"}}>Sort</Text>
              </View>
              <View style={{flex: 3, margin: 10}}>
                {filters.map((item, index) => 
                <Pressable onPress={() => setSelectedFilter(item.filter)} style={{flexDirection:"row", alignItems: "center", marginVertical: 10}} key={index}>
                  {selectedFilter.includes(item.filter) ? 
                  (<FontAwesome name="circle" size={18} color="green" />) : 
                  (<Entypo name="circle" size={18} color="black" />)}
                  <Text style={{fontSize: 16, fontWeight: "500", marginLeft: 6}}>{item.filter}</Text>
                </Pressable>)}
              </View>
            </View>
          </ModalContent>
      </BottomModal>
    </View>
  )
}

export default ServicesScreen

const styles = StyleSheet.create({})