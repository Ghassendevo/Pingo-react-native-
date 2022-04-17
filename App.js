import { StatusBar } from 'expo-status-bar';
import { createRef, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import pingoLogo from "./assets/6546.png"
import styles from './style';
import Welcome from './Welcome';
import Login from './login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Sign from './signup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Join from './join';
import Username from './Cusername';
import Password from './Cpassword';
import Phone from './Cphone';
import Uplaod from './uploadImg';
import Pingo from "./pingo";
import First from './first';
export default function App() {
  const Stack = createNativeStackNavigator();
  const navigationRef = createRef();
  const [check, setCheck] = useState(null)
  const [user, setUser] = useState()
   
  useEffect(() => {
    const session = AsyncStorage.getItem('session', (err, item) => {
      if (item == null) {
        setCheck(true)
      } else {
        setCheck(false)
      }
    })
  
  }, [])
  setTimeout(() => {
    navigationRef.current?.navigate('first');
  }, 1000)
  return (
    <NavigationContainer ref={navigationRef}>
      {
        check ? (
          <Stack.Navigator>
            <Stack.Screen
              name="Welcome"
              component={Welcome}
              options={{ title: 'Welcome', headerShown: false }}
            />
            <Stack.Screen
              name="first"
              component={First}
              options={{ title: 'first', headerShown: false }}
            />
            <Stack.Screen
              name="login"
              component={Login}
              options={{ title: 'Login', headerShown: false }}
            />
            <Stack.Screen
              name="join"
              component={Join}
              options={{ title: 'Join', headerShown: false }}
            />

            <Stack.Screen
              name="sign"
              component={Sign}
              options={{ title: 'Sign up', headerShown: false }}
            />
            <Stack.Screen
              name="username"
              component={Username}
              options={{ title: 'username', headerShown: false }}
            />
            <Stack.Screen
              name="phone"
              component={Phone}
              options={{ title: 'phone', headerShown: false }}
            />
            <Stack.Screen
              name="password"
              component={Password}
              options={{ title: 'password', headerShown: false }}
            />
            <Stack.Screen
              name="upload"
              component={Uplaod}
              options={{ title: 'upl', headerShown: false }}
            />
              <Stack.Screen
              name="pingo"
              component={Pingo}
              options={{ title: 'pingo', headerShown: false }}
            />
          </Stack.Navigator>
        ) : (
          <Stack.Navigator>
            <Stack.Screen
              name="pingo"
              component={Pingo}
              options={{ title: 'pingo', headerShown: false }}
            />
          </Stack.Navigator>
        )
      }
    </NavigationContainer >
  );
}

