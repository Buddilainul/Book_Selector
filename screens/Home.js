import React, {useState} from "react";
import { Text, View, Image, TouchableOpacity, Button, ImageBackground} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {Octicons} from '@expo/vector-icons';
import styles from "../components/styles";
import backgroundImg from './../assets/Home_background.png';
import logo from './../assets/logo.png'; 






const Home = ({navigation}) => {
    return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ImageBackground source={backgroundImg} style={styles.home_background}> 

      <View style={styles.homeHeader_img}>
      <Image source={logo} style={styles.image} /> 
      <Text style={styles.home_title}>Book Selector</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("Notification")} style={styles.tabNavigationNotification}>
        <Octicons name='bell' size={30} color='#FFFFFF'/><Text style={styles.homeNav}>Notification</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Books")} style={styles.tabNavigationBooks}>
        <Octicons name='book' size={30} color='#FFFFFF'/><Text style={styles.homeNav}>Book</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Profile")} style={styles.tabNavigationProfile}>
        <Octicons name='person' size={30} color='#FFFFFF'/><Text style={styles.homeNav}>User Profile</Text></TouchableOpacity>
      </ImageBackground>
    </View>
    );
};

export default Home;