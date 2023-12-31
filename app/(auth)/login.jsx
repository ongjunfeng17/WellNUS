import { View, SafeAreaView, KeyboardAvoidingView} from "react-native";
import { useState } from "react";
import { Text, TextInput, Button, ActivityIndicator } from "react-native-paper";
import { Link } from "expo-router";
import { supabase } from "../../lib/supabase";

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [errMsg, setErrMsg] = useState('');
    const handleSubmit = async () => {
        setErrMsg('');
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
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        setLoading(false);
        if (error) {
            setErrMsg(error.message);
            return;
        }
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white", padding: 10, justifyContent: "center" }}>
            <KeyboardAvoidingView>
                <View style={{ justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ color: "#003580", fontSize: 17, fontWeight: "700" }}>Sign In</Text>
                    <Text style={{ marginTop: 15, fontSize: 18, fontWeight: "500" }}>Sign In To Your Account</Text>
                </View>

                <Text style={{ marginTop: 30, color: "gray", fontSize: 17, fontWeight: "600" }}>Email</Text>
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

                <Button labelStyle={{fontSize: 17}} onPress={handleSubmit}>Submit</Button>

                {/* {errMsg !== "" && <Text>{errMsg}</Text>} */}
                {loading && <ActivityIndicator />}
            </KeyboardAvoidingView>
            
            <Link href="/register">
                <Button>Go to register</Button>
            </Link>
        </SafeAreaView>
    )
}