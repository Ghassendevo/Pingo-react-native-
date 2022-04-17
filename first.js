import { View, Text, Image,TouchableOpacity } from "react-native";
import img from "./assets/sss.png"
import styles from "./style";
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icone from 'react-native-vector-icons/EvilIcons';
const First = ({navigation, route}) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>
                <Text style={{ fontFamily: 'Mulish,sans-serif', fontSize: 30, fontWeight: '800', textAlign:'center' }}>
                    Welcome to  pingo it
                </Text>
                <Text style={{ fontFamily: 'Mulish,sans-serif', fontSize: 20, fontWeight: '400', textAlign:'center', color:'gray', marginTop:5 }}>
                   pingo always and forever
                </Text>
                <Image source={img} style={{width:350, height:500}} />
                <View style={{width:'80%'}}>
                    <TouchableOpacity style={{backgroundColor:'#02b2b2',...styles.firstL}} onPress={e=> navigation.navigate('login')}>
                        <Text style={{color:'white', fontFamily:'Mulish, sans-serif', fontSize:18,fontWeight:'500'}}>
                            Login
                        </Text>
                        <Icon name="user" size={18} color="white" style={{ marginLeft: 10 }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{backgroundColor:'rgb(241, 241, 241);',...styles.firstS}} onPress={ e=> navigation.navigate('sign')}>
                        <Text style={{color:'black', fontFamily:'Mulish, sans-serif',fontSize:17,fontWeight:'500'}}>
                            Signup
                        </Text>
                        <Icone name="plus" size={25} color="black" style={{ marginLeft: 10 }} />
                    </TouchableOpacity>
                </View>
               

        </View>
    )
}
export default First;