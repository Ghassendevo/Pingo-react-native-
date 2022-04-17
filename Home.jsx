import { useEffect, useState } from "react";
import { View, Text, TextInput, Button, Image, ScrollView, TouchableOpacity } from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage';
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import Menu from 'react-native-vector-icons/Octicons';
import Feather from 'react-native-vector-icons/Feather';
import Ant from 'react-native-vector-icons/AntDesign';
import styles from './style';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import penguin from './assets/penguin.png'
import Swiper from 'react-native-swiper'

const Home = () => {
    return (
        <View style={{ flex: 1, height: '60%', width: '100%', display: 'flex', flexDirection: 'col', backgroundColor: '#f7f5ff', }}>
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
            <ScrollView style={{marginBottom:5}}>
                <View style={{
                    width: '95%', marginLeft: 'auto', marginRight: 'auto', height: '56%', marginTop: 20, shadowColor: '#02b2b2',
                    shadowOffset: { width: 1, height: 1 },
                    shadowOpacity: 0.3,
                    shadowRadius: 10,
                  
                }}>
                    <View style={{ display:'flex', justifyContent: 'center', flexDirection:'column' }}>
                        <Swiper style={styles.wrapper} showsButtons={false} dotStyle={{ marginBottom: -30, zIndex: 2, width: 6, height: 6, backgroundColor: 'gray' }} activeDotStyle={{ marginBottom: -30, zIndex: 10 }} >
                            <View style={styles.slide1}>
                                <Image source={require('./assets/p1.jpg')} resizeMode='stretch' style={{ width: '100%', height: '80%', borderRadius: 15, marginLeft: 'auto', marginRight: 'auto', }} />
                            </View>
                            <View style={styles.slide1}>
                                <Image source={require('./assets/p2.jpg')} resizeMode='stretch' style={{ width: '100%', height: '80%', borderRadius: 15, marginLeft: 'auto', marginRight: 'auto', }} />
                            </View>
                            <View style={styles.slide1}>
                                <Image source={require('./assets/p3.jpg')} resizeMode='stretch' style={{ width: '100%', height: '80%', borderRadius: 15, marginLeft: 'auto', marginRight: 'auto', }} />
                            </View>
                        </Swiper>
                        <View style={{ width: '100%', backgroundColor: 'white', height: '25%', marginLeft: 'auto', marginRight: 'auto', borderBottomRightRadius: 15, borderBottomLeftRadius: 15, zIndex: 0 }}>
                            <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-between', width: '20%', marginLeft: 10 }}>
                                <Ant name="hearto" size={30} />
                                <Feather name="share-2" size={30} />
                            </View>
                            <View style={{ marginLeft: 10, marginTop: 10, display: 'flex', flexDirection: 'row', }}>

                                <View style={{
                                    backgroundColor: 'white', width: 60, height: 60, display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%', shadowColor: '#02b2b2',
                                    shadowOffset: { width: 1, height: 1 },
                                    shadowOpacity: 0.3,
                                    shadowRadius: 10,
                                }}>
                                    <Image source={require('./assets/web2.png')} resizeMode='stretch' style={{ width: 40, height: 40 }} />
                                </View>
                                <View style={{ marginLeft: 10 }}>
                                    <Text>
                                        By <Text style={{ fontWeight: '700' }} >Ghassen Abdellaoui</Text>
                                    </Text>
                                    <Text style={{ color: 'gray', marginTop: 2 }}>
                                        Member . 2h ago
                                    </Text>
                                    <Text style={{ fontWeight: '700', marginTop: 5, color: '#02b2b2' }}>
                                        #HTTP_REQUEST
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{
                    width: '95%', marginLeft: 'auto', marginRight: 'auto', height: '83%', marginTop: 0, shadowColor: '#02b2b2',
                    shadowOffset: { width: 1, height: 1 },
                    shadowOpacity: 0.3,
                    shadowRadius: 10,
                }}>
                    <View style={{ display:'flex', justifyContent: 'center', flexDirection:'column' }}>
                        <Swiper style={styles.wrapper} showsButtons={false} dotStyle={{ marginBottom: -30, zIndex: 2, width: 6, height: 6, backgroundColor: 'gray' }} activeDotStyle={{ marginBottom: -30, zIndex: 10 }} >
                            <View style={styles.slide1}>
                                <Image source={require('./assets/p1.jpg')} resizeMode='stretch' style={{ width: '100%', height: '80%', borderRadius: 15, marginLeft: 'auto', marginRight: 'auto', }} />
                            </View>
                            <View style={styles.slide1}>
                                <Image source={require('./assets/p2.jpg')} resizeMode='stretch' style={{ width: '100%', height: '80%', borderRadius: 15, marginLeft: 'auto', marginRight: 'auto', }} />
                            </View>
                            <View style={styles.slide1}>
                                <Image source={require('./assets/p3.jpg')} resizeMode='stretch' style={{ width: '100%', height: '80%', borderRadius: 15, marginLeft: 'auto', marginRight: 'auto', }} />
                            </View>
                        </Swiper>
                        <View style={{ width: '100%', backgroundColor: 'white', height: '25%', marginLeft: 'auto', marginRight: 'auto', borderBottomRightRadius: 15, borderBottomLeftRadius: 15, zIndex: 0 }}>
                            <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-between', width: '20%', marginLeft: 10 }}>
                                <Ant name="hearto" size={30} />
                                <Feather name="share-2" size={30} />
                            </View>
                            <View style={{ marginLeft: 10, marginTop: 10, display: 'flex', flexDirection: 'row', }}>

                                <View style={{
                                    backgroundColor: 'white', width: 60, height: 60, display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%', shadowColor: '#02b2b2',
                                    shadowOffset: { width: 1, height: 1 },
                                    shadowOpacity: 0.3,
                                    shadowRadius: 10,
                                }}>
                                    <Image source={require('./assets/web2.png')} resizeMode='stretch' style={{ width: 40, height: 40 }} />
                                </View>
                                <View style={{ marginLeft: 10 }}>
                                    <Text>
                                        By <Text style={{ fontWeight: '700' }} >Ghassen Abdellaoui</Text>
                                    </Text>
                                    <Text style={{ color: 'gray', marginTop: 2 }}>
                                        Member . 2h ago
                                    </Text>
                                    <Text style={{ fontWeight: '700', marginTop: 5, color: '#02b2b2' }}>
                                        #HTTP_REQUEST
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>

        </View >
    )
}
export default Home; 