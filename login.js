import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, Keyboard, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import logo from "./assets/web2.png"
import styles from './style';
import hh from "./assets/hh.jpg"
import last from "./assets/last.png"
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import lll from './assets/lll.png'
import Icone from 'react-native-vector-icons/Feather';
import axios from 'axios';
const Login = ({ navigation, route }) => {
    const [focus1, setFocus1] = useState('#ecedf1')
    const [focus2, setFocus2] = useState('#ecedf1')
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('')
    const [margin, setMargin] = useState(50)
    const [keyboardStatus, setKeyboardStatus] = useState(null);
    const [isLoading, setisLoading] = useState(null)
    const [check, setCheck] = useState(null)
    const [userInfo , setUserInfo] = useState([])
    const [ins, setIns] = useState({
        borderColor: 'rgb(241, 241, 241)',
        borderWidth: 1,
    })
    useEffect(() => {
        const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
            setKeyboardStatus(true);
        });
        const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
            setKeyboardStatus(false);
        });
    }, []);
    //const navigation = useNavigation();
    const getFocus = () => {
        setFocus1('#02b2b2')
        setFocus2('#ecedf1')
    }
    const getFocus2 = () => {
        setFocus2('#02b2b2')
        setFocus1('#ecedf1')
    }
    const forgetPas = () => {
        //alert("d")
    }
    const login = () => {
        if (username !== '' && password !== '') {
            setisLoading(true)
            const data = {
                username: username,
                password: password,
            }
            axios.post(`http://172.20.10.12:8080/login`, {
                data:data,
            }).then(res => {
                setisLoading(false)
                if (res.data.msg!==false) {
                    //navigate7
                   const data = JSON.stringify(res.data)
                    const storeData = async (value) => {
                        try {
                          await AsyncStorage.setItem('session',data)
                        } catch (e) {
                          // saving error
                          alert(e)
                        }
                      }
                      storeData()
                      
                } else {
                    setCheck(res.data.msg)
                    setIns({ borderColor: 'red', borderWidth: 1 })
                    setTimeout(()=>{
                        setIns({borderColor:'rgb(241, 241, 241)'})
                    },2000)
                }
            }).catch(err => {
                alert(err)
            })
        }
        //   if(keyboardStatus)
    }
    const navigateToSign = () => {
        navigation.navigate("join")
    }
    return (
        <KeyboardAvoidingView style={{ flex: 1, }} behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={{
                    backgroundColor: 'white', display: 'flex', alignItems: 'center', height: '40%', borderBottomRightRadius: 70, shadowColor: 'gray',
                    shadowOffset: { width: 1, height: 2 },
                    shadowOpacity: 0.5,
                    shadowRadius: 3,
                }}>
                    <Image source={lll} style={{ width: '100%', height: '100%', marginTop: 60, }} />
                </View>
                <KeyboardAvoidingView style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: margin, backgroundColor: 'white', ...styles.sht }} behavior={Platform.OS === "ios" ? "padding" : "height"}>
                    <View style={{ height: '90%', width: '90%' }}>
                        {
                            !keyboardStatus && <>
                                <Text style={{ fontFamily: 'Poppins', color: 'black', fontSize: 25, fontWeight: '700', textAlign: 'center' }}>
                                    Welcome
                                </Text>
                                <Text style={{ fontFamily: 'Mulish, sans-serif', color: 'gray', fontSize: 18, fontWeight: '400', textAlign: 'center' }}>
                                    Login to our pingo easly
                                </Text>
                            </>
                        }
                        <View style={{ backgroundColor: 'rgb(241, 241, 241)', height: 60, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 40, ...ins }}>
                            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', width: '90%' }}>
                                <Icon name="user" size={18} color="gray" style={{ marginLeft: 10 }} />
                                <TextInput placeholder="username" style={{ marginLeft: 20, width: '80%', height: 50, }} onChangeText={e => setUsername(e)} />
                            </View>
                        </View>
                        <View style={{ backgroundColor: 'rgb(241, 241, 241)', height: 60, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 20, ...ins }}>
                            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', width: '90%' }}>
                                <Icone name="key" size={18} color="gray" style={{ marginLeft: 10 }} />
                                <TextInput placeholder="password" style={{ marginLeft: 20, width: '80%', height: 50, }} onChangeText={e => setPassword(e)} />
                            </View>
                        </View>
                        <TouchableOpacity style={{ marginTop: 10 }}>
                            <Text style={{ textAlign: 'right', color: '#02b2b2', }}>
                                Forgot your password ?
                            </Text>
                        </TouchableOpacity>
                        {
                            ins.borderColor == 'red' && <Text style={{ color: 'red' }}>
                                Inorrect inforamtion
                            </Text>
                        }

                        <TouchableOpacity style={styles.login} onPress={login}>
                            {!isLoading && <Text style={{ color: 'white', fontWeight: '700' }}>
                                Login
                            </Text>}
                            {isLoading && <ActivityIndicator size="large" color="white" />}
                        </TouchableOpacity>

                        <TouchableOpacity style={{ marginTop: 20, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} onPress={e => navigation.navigate('join')}>
                            <Text style={{ textAlign: 'center', fontWeight: '700' }}>
                                Don't have an account ?
                            </Text>
                            <Text style={{ textAlign: 'center', fontWeight: '700', color: '#02b2b2', marginLeft: 5 }}>
                                signup
                            </Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </View>
        </KeyboardAvoidingView>
    )
}
export default Login;
