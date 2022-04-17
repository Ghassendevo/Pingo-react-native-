import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Text, Image, SafeAreaView, ScrollView, TextInput, Button, View, TouchableOpacity, KeyboardAvoidingView } from "react-native";
import styles from "./style";
import Icon from 'react-native-vector-icons/FontAwesome';

const Sign = ({ navigation, route }) => {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const navTouser = () => {
        if (fname !== '' && lname !== '') {
           /* var
                nameRegex = /^[a-zA-Z\-]+$/,
                usernameRegex = /^[a-zA-Z0-9]+$/;

            var
                validfirst = firstname.match(nameRegex),
                validlast = lastname.match(nameRegex),
                validusername = username.match(usernameRegex);*/
            navigation.navigate('username', { fname: fname, lname: lname })
        }
    }
    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <View style={{ height: '100%', flex: 1 }}>
                <View style={{ marginTop: 150, flex: 1, alignItems: 'center' }}>
                    <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 18, letterSpacing: 0.5, }}>
                        What's your name ?
                    </Text>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '90%', marginTop: 20 }}>
                        <TextInput placeholder="First name" style={styles.createIn} onChangeText={e => setFname(e)} placeholderTextS />
                        <TextInput placeholder="Last name" style={styles.createIn} onChangeText={e => setLname(e)} />
                    </View>
                    <TouchableOpacity style={{
                        width: '90%', height: 40, borderRadius: 5, display: 'flex', alignItems: 'center', marginTop: 30, backgroundColor: '#02b2b2', justifyContent: 'center', shadowColor: '#02b2b2',
                        shadowOffset: { width: 1, height: 2 },
                        shadowOpacity: 0.5,
                        shadowRadius: 3,
                        display: 'flex',
                        flexDirection: 'row'
                    }} onPress={navTouser}>
                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15 }}>
                            Next
                        </Text>
                        <Icon name="arrow-right" size={18} color="white" style={{ marginLeft: 10 }} />
                    </TouchableOpacity>
                </View>

                <View style={{ position: 'absolute', bottom: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: 60, borderTopWidth: 2, borderTopColor: '#ecedf1' }}>
                    <TouchableOpacity onPress={e => navigation.navigate('login')}>
                        <Text style={{ fontSize: 14, color: '#02b2b2' }}>
                            Already have an account
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>

    )
}
export default Sign;