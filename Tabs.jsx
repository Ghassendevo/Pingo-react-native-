import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useEffect, useState } from "react";
import { View, Text, TextInput, Button, Image, ScrollView, TouchableOpacity } from "react-native"
import Home_icon from 'react-native-vector-icons/AntDesign';
import Setting_icon from 'react-native-vector-icons/AntDesign';
import Ion from 'react-native-vector-icons/Ionicons'
import Home from './Home'
import Setting from './setting';
import Workshops from './workshops';

const Tabs = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: true,
                swipeEnabled: true,
                activeTintColor: '#02b2b2',
            }}

            screenOptions={{
                swipeEnabled: true,
                headerShown: false,
                tabBarStyle: {
                    borderTopLeftRadius: 20, borderTopRightRadius: 20, shadowOffset: { width: 1, height: 1 },
                    shadowOpacity: 0.5,
                    shadowRadius: 10,
                    shadowColor: 'gray',
                    height:85,
                }
            }}
        >

            <Tab.Screen name="Home" component={Home} options={{
                tabBarIcon: ({ focused, color, size }) => {

                    return (
                        <Home_icon name='home' size={30} color={focused ? '#02b2b2' : 'gray'} />
                    )
                },
            }} />
            <Tab.Screen name="workshops" component={Workshops} options={{
                tabBarIcon: ({ focused, color, size }) => {

                    return (
                        <Ion name='code-working' size={30} color={focused ? '#02b2b2' : 'gray'} />
                    )
                },
            }} />
            <Tab.Screen name="setting" component={Setting} options={{
                tabBarIcon: ({ focused, color, size }) => {

                    return (
                        <Setting_icon name='setting' size={30} color={focused ? '#02b2b2' : 'gray'} />
                    )
                },
            }} />
        </Tab.Navigator>
    )
}
export default Tabs;