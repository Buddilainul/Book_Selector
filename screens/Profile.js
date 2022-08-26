import React, {useState} from "react";
import { Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {Octicons} from '@expo/vector-icons';
import styles from "../components/styles";
import backgroundImg from './../assets/background.png'; 
import profile_picture from './../assets/profile_img.png'; 




const Profile = ({navigation}) => {
  const [hidePassword, setHidePassword] = useState(true);

    return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Image source={backgroundImg} style={styles.welcomeImg} /> 
      <ScrollView>
      <View style={styles.welcomeContainer}>
      <Text style={styles.wlcomeTitle}>Profile</Text>
      
        <Image source={profile_picture} style={styles.avatar} /> 
        
      <Text style={styles.profileHeadSubTitle}>Full Name</Text>
      <Text style={styles.profileSubTitle}>Buddila Inul</Text>

      <Text style={styles.profileHeadSubTitle}>Date OF Birth</Text>
      <Text style={styles.profileSubTitle}>2001-aug-02</Text>

      <Text style={styles.profileHeadSubTitle}>Email Address</Text>
      <Text style={styles.profileSubTitle}>buddilainul@gmail.com</Text>

      <Text style={styles.profileHeadSubTitle}>Membership Expiry Date</Text>
      <Text style={styles.profileSubTitle}>2023-jan-05</Text>

      

        <View style={styles.line}/>

        <TouchableOpacity onPress={() => navigation.navigate("Login")} style={styles.button}>
            <Text style={styles.buttonText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
      <View style={styles.tabNavigation}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")} style={styles.tabNavigationHome}><Octicons name='home' size={30} color='#FFFFFF'/></TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Notification")} style={styles.tabNavigationNotification}><Octicons name='bell' size={30} color='#FFFFFF'/></TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Books")} style={styles.tabNavigationBooks}><Octicons name='book' size={30} color='#FFFFFF'/></TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Profile")} style={styles.tabNavigationProfile}><Octicons name='person' size={30} color='#FFFFFF'/></TouchableOpacity>
      </View>

    </View>
    );
};

export default Profile;