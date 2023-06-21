import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, {useEffect, useRef} from 'react'
import { useRoute } from '@react-navigation/native'
import MapView, {Marker} from 'react-native-maps';

const MapScreen = () => {
  const route = useRoute();
  const mapView = useRef(null);
  const coordinates = [];
  const details = route.params.searchResults.map((item) => item.properties?.map((prop) => {
    coordinates.push({
      latitude: Number("1.2991"),
      longitude: Number("103.7764")
    })
  }));
  useEffect(() => {
    mapView.current.fitToCoordinates(coordinates, {
      edgePadding: {
        top: 190,
        left: 190,
        bottom: 190,
        right: 190,
      }
    });
  }, []);

  return (
    <View>
      <MapView
        ref={mapView}
        style={{ width: "100%", height: "100%" }}>
          {route.params.searchResults.map((item) => item.properties.map((property) => (
            <Marker title={"University Health Centre"} coordinate={{latitude: Number("1.2991"), longitude: Number("103.7764")}}>
              <Pressable>
                <Text>
                  {}
                </Text>
              </Pressable>
            </Marker>
          )))}
      </MapView>
    </View>
  )
}

export default MapScreen

const styles = StyleSheet.create({})