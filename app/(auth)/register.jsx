import { useState } from "react";
import { supabase } from "../../lib/supabase";
import { View, Alert } from "react-native";
import { Text, TextInput, ActivityIndicator, Button } from 'react-native-paper';

export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [errMsg, setErrMsg] = useState('');

    const handleSubmit = async () => {
        if (email == "" || password == '') {
            Alert.alert(
                'Invalid Details',
                'Please enter all the credentials',
                [
                    {
                        text: 'Cancel',
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
        if (email == '') {
            setErrMsg("email cannot be empty")
            return;
        }
        if (password == '') {
            setErrMsg("password cannot be empty")
            return;
        }
        setLoading(true);
        const { error } = await supabase.auth.signUp({ email, password });
        setLoading(false);
        if (error) {
            setErrMsg(error.message);
            return;
        }
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <Text style={{ color: "gray", fontSize: 17, fontWeight: "600" }}>Email</Text>
            <TextInput
                autoCapitalize='none'
                textContentType='emailAddress'
                value={email}
                onChangeText={setEmail} />
            <Text style={{ color: "gray", fontSize: 17, fontWeight: "600" }}>Password</Text>
            <TextInput
                secureTextEntry
                autoCapitalize='none'
                textContentType='password'
                value={password}
                onChangeText={setPassword} />
            <Button labelStyle={{ fontSize: 17 }} onPress={handleSubmit}>Submit</Button>
            {/* {errMsg !== "" && <Text>{errMsg}</Text>} */}
            {loading && <ActivityIndicator />}
        </View>
    );
}