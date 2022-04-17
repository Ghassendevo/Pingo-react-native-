import { useEffect, useState } from "react";
import { View, Text, TextInput, Button, Image, ScrollView, TouchableOpacity, ImageBackground } from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage';
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import Menu from 'react-native-vector-icons/Octicons';
import Feather from 'react-native-vector-icons/Feather';
import styles from './style';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Tabs from "./Tabs";

const Pingo = ({ navigation, navigate }) => {
    const [user, setUser] = useState()
    const [isloading, setisLoading] = useState(true)
    const Tab = createBottomTabNavigator();
    useEffect(() => {
        AsyncStorage.setItem("session", "ghassen");
        AsyncStorage.getItem('session', (err, item) => {
            if (err) throw err
            setUser(item)
            setisLoading(false)
        })
    }, [])
    return (
        <>
           
            <Tabs />
        </>


    )
}

export default Pingo;