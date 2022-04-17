import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { View, KeyboardAvoidingView, TouchableOpacity, Text, TextInput, ActivityIndicator } from "react-native"
import styles from "./style";
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from "axios";

const Username = ({ navigation, route }) => {

    const [username, setUsername] = useState('');
    const [check, setCheck] = useState('')
    const [isLoading, setisLoading] = useState(null);
    const navTophone = () => {
        if (username !== '') {
            setisLoading(true)
            axios.post(`http://172.20.10.12:8080/checkUsername`, {
                username: username
            }).then(res => {
                if (res.data.msg == 'exist') {
                    setCheck('exist')
                    setisLoading(false)
                } else {
                    navigation.navigate('phone', { username: username, fname: route.params.fname, lname: route.params.lname })
                }
            }).catch(err => {
                alert(err)
            })
        }
        if (!isLoading) {
            setTimeout(() => {
                setCheck('')
            }, 3000)
        }
    }

    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <View style={{ height: '100%', flex: 1 }}>
                <View style={{ marginTop: 150, flex: 1, alignItems: 'center' }}>
                    <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 18, letterSpacing: 0.5, fontFamily: 'Mulish, sans-serif' }}>
                        What's your username ?
                    </Text>
                    <TextInput placeholder="Username" onChangeText={e => setUsername(e)} style={styles.Cusername} placeholderTextS />
                    {
                        check == 'exist' ? (
                            <Text style={{ color: 'red', marginTop: 10 }}>Username is already exist</Text>
                        ) : (
                            null
                        )
                    }
                    <TouchableOpacity style={{
                        width: '90%', height: 40, borderRadius: 5, display: 'flex', alignItems: 'center', marginTop: 30, backgroundColor: '#02b2b2', justifyContent: 'center', shadowColor: '#02b2b2',
                        shadowOffset: { width: 1, height: 2 },
                        shadowOpacity: 0.5,
                        shadowRadius: 3,
                        display: 'flex',
                        flexDirection: 'row'
                    }} onPress={navTophone}>
                        {
                            isLoading == true ? (
                                <ActivityIndicator size="large" color="white" />
                            ) : (
                                <>
                                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15, }}>
                                        Next
                                    </Text>
                                    <Icon name="arrow-right" size={18} color="white" style={{ marginLeft: 10 }} />
                                </>
                            )
                        }

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
export default Username;