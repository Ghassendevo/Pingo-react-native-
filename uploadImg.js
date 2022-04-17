import { useState } from 'react'
import { View, Text, Button, TextInput, TouchableOpacity, Image } from 'react-native'
import img from "./assets/upload.png"
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';
import client from './client';
const Uplaod = ({ navigation, route }) => {

    const [bordercolor, setBordercolor] = useState('#e1e1e1')
    const [image, setImage] = useState(null);
    const [type, setType] = useState(null);
    const [filename, setFilename] = useState(null);
    const pick = async () => {
        setBordercolor('#02b2b2')
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: false,
            aspect: [4, 3],
            quality: 1,
            includeBase64: false,
            mediaType: 'photo'
        });
        if (!result.cancelled) {
            setImage(result.uri);
            const uri = result.uri;
            const fileName = uri.split('/').pop();
            let match = /\.(\w+)$/.exec(filename);
            let type = match ? `image/${match[1]}` : `image`;
            setType(type)
            setFilename(fileName)
        }
    }
    const pingo = () =>{
        
        const data = {
            fname : route.params.fname,
            lname : route.params.lnanme,
            username : route.params.username,
            password : route.params.password, 
            phone : route.params.phone
        }
        alert(data.fname + data.lname+ data.username+ data.password+ data.phone)
        // axios.post(`http://172.20.10.12:8080/create`, {
        //     data : data,
        // }).then(res =>{
        //     navigation.navigate('pingo')
        // }).catch(err =>{
        //     alert(err)
        // })
       
    }
    const finish = async () => {
        const formData = new FormData()
        formData.append('file', { uri: image, type: type, name: filename, })
        const data = {
            fname : route.params.fname,
            lname : route.params.lname,
            username : route.params.username,
            password : route.params.password
        }
        formData.append('user',JSON.stringify(data))
        try {
            const res = await client.post('/create', formData, {
                headers: {
                    Accept: 'application/json',
                }
            })
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 18, marginBottom: 2 }}>
                Choose a profile image
            </Text>
            <Text style={{ color: 'gray', marginBottom: 20 }}>
                Make it easy to users to know you
            </Text>
            <TouchableOpacity onPress={pick} style={{ borderWidth: 2, borderColor: bordercolor, padding: 50, borderRadius: 10, borderStyle: "dotted", width: '80%', alignItems: 'center', }}>
                {!image && <Image source={img} style={{ width: 150, height: 150 }} />}
                {image && <Image source={{ uri: image }} style={{ width: 300, height: 300, borderRadius: '20%' }} />}
            </TouchableOpacity>
            <View style={{ width: '80%' }}>
                {!image &&
                    <TouchableOpacity onPress={pingo} style={{ marginTop: 30, marginRight: 0, marginLeft: 'auto', width: '30%', alignItems: 'center', justifyContent: 'center', height: 30, borderRadius: 5 }}>
                        <Text style={{ textAlign: 'right', color: '#02b2b2', fontSize: 16 }}>
                            Skip
                        </Text>
                    </TouchableOpacity>
                }
                {
                    image &&
                    <View style={{ marginTop: 20, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <TouchableOpacity onPress={e => setImage(null)}>
                            <Text style={{ color: 'red' }}>
                                Cancel
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={finish}>
                            <Text style={{ color: '#02b2b2' }}>
                                Finish
                            </Text>
                        </TouchableOpacity>
                    </View>
                }

            </View>
        </View>

    )
}
export default Uplaod;