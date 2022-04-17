import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { View, KeyboardAvoidingView, TouchableOpacity, Text, TextInput} from "react-native"
import styles from "./style";
import Icon from 'react-native-vector-icons/FontAwesome';
const Phone = ({navigation, route}) => {
    const [phone, setPhone] = useState('');
    const navTopass = () =>{
        if(phone!==''){
            navigation.navigate('password', {username:route.params.username, fname:route.params.fname,lname:route.params.lname,phone:phone})
        }
    }
    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <View style={{ height: '100%', flex: 1 }}>
                <View style={{ marginTop: 150, flex: 1, alignItems: 'center' }}>
                    <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 18, letterSpacing: 0.5, }}>
                        What's your phone ?
                    </Text>
                    <TextInput dataDetectorTypes='phoneNumber' keyboardType='phone-pad' placeholder="phone" onChangeText={e=> setPhone(e)} style={styles.Cusername} placeholderTextS />
                    <TouchableOpacity style={{
                        width: '90%', height: 40, borderRadius: 5, display: 'flex', alignItems: 'center', marginTop: 30, backgroundColor: '#02b2b2', justifyContent: 'center', shadowColor: '#02b2b2',
                        shadowOffset: { width: 1, height: 2 },
                        shadowOpacity: 0.5,
                        shadowRadius: 3,
                        display: 'flex',
                        flexDirection: 'row'
                    }} onPress={navTopass}>
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
export default Phone