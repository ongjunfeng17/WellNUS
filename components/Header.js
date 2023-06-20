import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';

const Headers = () => {
  return (
    <View 
      style={{ 
        backgroundColor: "#003580", 
        height: 65, 
        flexDirection: "row", 
        alignItems: "center", 
        justifyContent: "space-around" 
      }}
    >
      <Pressable 
        style={{ 
          flexDirection: "row", 
          alignItems: "center", 
          borderColor: "white", 
          borderWidth: 1, 
          borderRadius: 25, 
          padding: 8 
        }}
      >
        <MaterialCommunityIcons name="emoticon-sick" size={26} color="white" />
        <Text 
          style={{ 
            marginLeft: 8, 
            fontWeight: "bold", 
            color: "white", 
            fontSize: 15 
          }}
        > 
          General 
        </Text>
      </Pressable>

      <Pressable 
        style={{ 
          flexDirection: "row", 
          alignItems: "center"
        }}
      >
        <MaterialCommunityIcons name="stethoscope" size={26} color="white" />
        <Text 
          style={{ 
            marginLeft: 8, 
            fontWeight: "bold", 
            color: "white", 
            fontSize: 15 
          }}
        > 
          Admission 
        </Text>
      </Pressable>

      <Pressable 
        style={{ 
          flexDirection: "row", 
          alignItems: "center", 
        }}
      >
        <MaterialCommunityIcons name="needle" size={26} color="white" />
        <Text 
          style={{ 
            marginLeft: 8, 
            fontWeight: "bold", 
            color: "white", 
            fontSize: 15 
          }}
        > 
          Vaccine 
        </Text>
      </Pressable>

      <Pressable 
        style={{ 
          flexDirection: "row", 
          alignItems: "center", 
        }}
      >
        <Fontisto name="blood-drop" size={26} color="white" />
        <Text 
          style={{ 
            marginLeft: 8, 
            fontWeight: "bold", 
            color: "white", 
            fontSize: 15 
          }}
        > 
          Blood 
        </Text>
      </Pressable>
    </View>
  )
}

export default Headers

const styles = StyleSheet.create({})