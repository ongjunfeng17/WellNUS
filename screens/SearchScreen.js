import { StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native'
import React, {useState} from 'react'
import { Feather } from '@expo/vector-icons';
import SearchResults from '../components/SearchResults';

const SearchScreen = () => {
    const [input, setInput] = useState("");
    const data = [
        {
            id: "0",
            service: "See A Doctor",
            serviceImage: "https://images.pexels.com/photos/7659564/pexels-photo-7659564.jpeg?auto=compress&cs=tinysrgb&w=800",
            shortDescription: "",
            properties: [

            ],
        },
        {
            id: "2",
            service: "Insurance",
            serviceImage: "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg",
            shortDescription: "Submit Your Insurance Claims",
            properties: [

            ],
        },
    ]

    return (
        <SafeAreaView>
            <View
                style={{
                    padding: 10,
                    margin: 10,
                    flexDirection: "row", 
                    alignItems: "center", 
                    justifyContent: "space-between", 
                    borderColor: "#FFC72C",
                    borderWidth: 4,
                    borderRadius: 10,
                }}>
                <TextInput value={input} onChangeText={(text) => setInput(text)} placeholder='Enter Your Service Type' />
                <Feather name="search" size={24} color="black" />
            </View>

            <SearchResults data={data} input={input} setInput={setInput}/>
        </SafeAreaView>
    );
};

export default SearchScreen

const styles = StyleSheet.create({})