import { View } from "react-native";
import { Text, Button } from "react-native-paper";
import { supabase } from "../lib/supabase";
//import { AuthProvider, useAuth } from "../contexts/auth";
//import { useState } from "react";

export default function HomePage() {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text> This is the home page </Text>
            <Button onPress={() => supabase.auth.signOut()}> Logout </Button>
        </View>
    )
}