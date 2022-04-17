import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { View, KeyboardAvoidingView, TouchableOpacity, Text, TextInput, ActivityIndicator } from "react-native"
import styles from "./style";
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
const Username = ({ navigation, route }) => {
    const [password, setPassword] = useState('');
    const fname = route.params.fname
    const lname = route.params.lname
    const username = route.params.username
    const phone = route.params.phone

    const [isLoading, setisLoading] = useState(null)
    const create = () => {
        if (password !== '') {
           
            setisLoading(true)
            const data = {
                fname: fname,
                lname: lname,
                username: username,
                password: password, 
                phone:phone,
            }
            const dat = JSON.stringify(dat)
            axios.post(`http://172.20.10.12:8080/create`, {
                data: data
            }).then(res => {
               if(res.data.msg=='submit'){
                setisLoading(false)
                navigation.navigate('pingo', {fname,lname,username,phone, password, phone})
                AsyncStorage.setItem('session',data);
               }
            }).catch(err => {
                if(err)setisLoading(false)
            })
        }
    }
    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <View style={{ height: '100%', flex: 1 }}>
                <View style={{ marginTop: 150, flex: 1, alignItems: 'center' }}>
                    <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 18, letterSpacing: 0.5, fontFamily:'Mulish, sans-serif' }}>
                        What's your password ?
                    </Text>
                    <TextInput placeholder="Password" onChangeText={e => setPassword(e)} style={styles.Cusername} placeholderTextS />
                    <TouchableOpacity style={{
                        width: '90%', height: 50, borderRadius: 5, display: 'flex', alignItems: 'center', marginTop: 30, backgroundColor: 'green', justifyContent: 'center', shadowColor: 'green',
                        shadowOffset: { width: 1, height: 2 },
                        shadowOpacity: 0.5,
                        shadowRadius: 3,
                        display: 'flex',
                        flexDirection: 'row'
                    }} onPress={create}>
                        {
                            isLoading==true ? (
                                <ActivityIndicator size="large" color="white" />
                            ) : (
                                <>
                                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15 }}> Create

                                    </Text>
                                    <Icon name="user" size={18} color="white" style={{marginLeft:10}} /> 
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