import { useEffect, useState } from "react";
import { View, Text, TextInput, Button, Image, ScrollView, TouchableOpacity } from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage';
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import Menu from 'react-native-vector-icons/Octicons';
import Feather from 'react-native-vector-icons/Feather';
import styles from './style';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import penguin from './assets/penguin.png'


const Workshops = () => {
    return (
        <View style={{ flex: 1, height: '100%', width: '100%', display: 'flex', flexDirection: 'col', justifyContent: 'space-between', backgroundColor: '#f7f5ff' }}>
            <Image source={penguin} style={{ position: 'absolute', margin: 'auto', top: 60, left: 0, right: 0, bottom: 0, width: '100%', height: '80%', opacity: 0.1 }} />
            <View style={{ backgroundColor: '#f7f5ff', height: '10%', display: 'flex', justifyContent: 'flex-end' }}>
                <View style={{ width: '90%', marginLeft: 'auto', marginRight: 'auto', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#f7f5ff' }}>
                    <TouchableOpacity style={{ backgroundColor: 'white', width: 40, display: 'flex', justifyContent: 'center', alignItems: 'center', height: 40, borderRadius: '10%' }}>
                        <Menu name="three-bars" size={30} color="rgba(0, 0, 0, 0.821);" />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: 'white', width: 40, display: 'flex', justifyContent: 'center', alignItems: 'center', height: 40, borderRadius: '10%' }}>
                        <Feather name="bell" size={30} color="rgba(0, 0, 0, 0.821);" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ width: '90%', marginLeft: 'auto', marginRight: 'auto', height: '85%', }}>
                <Text style={{ fontWeight: '700', fontSize: '22', }}>Workshops</Text>
                <ScrollView style={{ paddingTop: 40, }} showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}>
                    <View style={{
                        width: '100%', backgroundColor: 'white', marginLeft: 'auto', marginRight: 'auto', height: 400, borderRadius: 15, shadowColor: '#d0f2f3;',
                        shadowOffset: { width: 1, height: 1 },
                        shadowOpacity: 0.1,
                        shadowRadius: 10,
                        marginBottom: 30,
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Image source={require('./assets/boostrap5.jpg')} style={{ height: 200, width: '95%', borderRadius: 15 }} />
                        <View style={{ width: '90%' }}>
                            <Text style={{ marginTop: 10, }}>Limited 50 ' By M.hamouda</Text>
                            <Text style={{ marginTop: 10, fontSize: 15, fontWeight: '800' }}>Boostrap</Text>
                            <Text style={{ marginTop: 10 }}>ANGULAR is a TypeScript-based open-source web application framework led by the Angular Team at Google and by a</Text>
                        </View>
                        <TouchableOpacity style={styles.join}><Text style={{ color: 'white', fontSize: 15, fontWeight: '700' }}>Join workshop</Text></TouchableOpacity>
                    </View>
                    <View style={{
                        width: '100%', backgroundColor: 'white', marginLeft: 'auto', marginRight: 'auto', height: 400, borderRadius: 15, shadowColor: '#d0f2f3;',
                        shadowOffset: { width: 1, height: 1 },
                        shadowOpacity: 0.1,
                        shadowRadius: 10,
                        marginBottom: 30,
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Image source={require('./assets/angular.png')} style={{ height: 200, width: '95%', borderRadius: 15 }} />
                        <View style={{ width: '90%' }}>
                            <Text style={{ marginTop: 10, }}>Limited 50 ' By M.hamouda</Text>
                            <Text style={{ marginTop: 10, fontSize: 15, fontWeight: '800' }}>Angular</Text>
                            <Text style={{ marginTop: 10 }}>ANGULAR is a TypeScript-based open-source web application framework led by the Angular Team at Google and by a</Text>
                        </View>
                        <TouchableOpacity style={styles.join}><Text style={{ color: 'white', fontSize: 15, fontWeight: '700' }}>Join workshop</Text></TouchableOpacity>
                    </View>
                    <View style={{
                        width: '100%', backgroundColor: 'white', marginLeft: 'auto', marginRight: 'auto', height: 400, borderRadius: 15, shadowColor: '#d0f2f3;',
                        shadowOffset: { width: 1, height: 1 },
                        shadowOpacity: 0.1,
                        shadowRadius: 10,
                        marginBottom: 30,
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Image source={require('./assets/node.jpg')} style={{ height: 200, width: '95%', borderRadius: 15 }} />
                        <View style={{ width: '90%' }}>
                            <Text style={{ marginTop: 10, }}>Limited 50 ' By M.hamouda</Text>
                            <Text style={{ marginTop: 10, fontSize: 15, fontWeight: '800' }}>Node</Text>
                            <Text style={{ marginTop: 10 }}>ANGULAR is a TypeScript-based open-source web application framework led by the Angular Team at Google and by a</Text>
                        </View>
                        <TouchableOpacity style={styles.join}><Text style={{ color: 'white', fontSize: 15, fontWeight: '700' }}>Join workshop</Text></TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}
export default Workshops;