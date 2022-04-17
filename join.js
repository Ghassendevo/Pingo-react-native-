import { useNavigation } from "@react-navigation/native";
import { View, Text, Input, TouchableOpacity, Image, Container } from "react-native"
import styles from "./style";
import logo from "./assets/web2.png"
import ss from './assets/sse.png'
import Icon from 'react-native-vector-icons/FontAwesome5';
const Join = ({ navigation, route }) => {

    return (
        <View style={{ height: '100%', backgroundColor: 'white', flex: 1, alignItems: 'center', }}>
            <View style={{ width: '80%', marginTop: 50 }}>
                <TouchableOpacity onPress={e => navigation.navigate('login')}>
                    <Icon name="arrow-left" size={18} color="black" style={{ marginLeft: 10 }} />
                </TouchableOpacity>
            </View>
            <Image source={ss} style={{ width: 500, height: 500, marginTop: 30 }} />
            <View style={{width:'80%'}}>
                <Text style={{ color: 'black', fontWeight: '800', fontSize: 25, marginTop: 20, textAlign:'center' }}>
                    Join our pingo easly
                </Text>
                <Text style={{ color: 'gray', fontWeight: '6000', fontSize: 16, marginTop: 20, textAlign:'center' }}>
                    Pingo it is one of the best club , join our events and workshop with just a few steps
                </Text>
            </View>
            <View style={{position:'absolute',bottom:40, width:'80%', flex:1,alignItems:'center'}}>
               <TouchableOpacity style={{display:'flex', justifyContent:'center', alignItems:'center',...styles.gg}}
               onPress={e=>navigation.navigate('sign')}
               >
                   <Text style={{ color:'white', fontWeight:'600', fontSize:18}}>Get started</Text>
                   <Icon name="long-arrow-alt-right" size={18} color="white" style={{ marginLeft: 10 }} />
               </TouchableOpacity>
            </View>
        </View>
       
    )
}
export default Join;