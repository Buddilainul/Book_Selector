import React, {useState} from "react";
import { Text, View, TouchableOpacity, ScrollView, ImageBackground} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {Octicons} from '@expo/vector-icons';
import styles from "../components/styles";
import backgroundImg from './../assets/notifcation_background.png'; 





const Notification = ({navigation}) => {
  const [hidePassword, setHidePassword] = useState(true);

    return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ImageBackground source={backgroundImg} style={styles.notification_background}>
      
      <Text style={styles.notif_title}>Notification</Text>
      <ScrollView>
        <Text style={styles.newNotifications}><Octicons name='bell' size={30} color='red'/>  This book now availabale</Text>
        <Text style={styles.newNotifications}><Octicons name='bell' size={30} color='red'/>  This book now availabale</Text>
        <Text style={styles.newNotifications}><Octicons name='bell' size={30} color='red'/>  This book now availabale</Text>
        <Text style={styles.newNotifications}><Octicons name='bell' size={30} color='red'/>  This book now availabale</Text>
        <Text style={styles.newNotifications}><Octicons name='bell' size={30} color='red'/>  This book now availabale</Text>
        <Text style={styles.newNotifications}><Octicons name='bell' size={30} color='red'/>  This book now availabale</Text>
        <Text style={styles.newNotifications}><Octicons name='bell' size={30} color='red'/>  This book now availabale</Text>
        <Text style={styles.newNotifications}><Octicons name='bell' size={30} color='red'/>  This book now availabale</Text>
        <Text style={styles.newNotifications}><Octicons name='bell' size={30} color='red'/>  This book now availabale</Text>
        <Text style={styles.newNotifications}><Octicons name='bell' size={30} color='red'/>  This book now availabale</Text>
        <Text style={styles.newNotifications}><Octicons name='bell' size={30} color='red'/>  This book now availabale</Text>
        <Text style={styles.newNotifications}><Octicons name='bell' size={30} color='red'/>  This book now availabale</Text>
        <Text style={styles.newNotifications}><Octicons name='bell' size={30} color='red'/>  This book now availabale</Text>
        <Text style={styles.newNotifications}><Octicons name='bell' size={30} color='red'/>  This book now availabale</Text>
        <Text style={styles.newNotifications}><Octicons name='bell' size={30} color='red'/>  This book now availabale</Text>
        <Text style={styles.newNotifications}><Octicons name='bell' size={30} color='red'/>  This book now availabale</Text>
        <Text style={styles.newNotifications}><Octicons name='bell' size={30} color='red'/>  This book now availabale</Text>

      </ScrollView>

      </ImageBackground>
      <View style={styles.tabNavigation}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")} style={styles.tabNavigationHome}><Octicons name='home' size={30} color='#FFFFFF'/></TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Notification")} style={styles.tabNavigationNotification}><Octicons name='bell' size={30} color='#FFFFFF'/></TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Books")} style={styles.tabNavigationBooks}><Octicons name='book' size={30} color='#FFFFFF'/></TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Profile")} style={styles.tabNavigationProfile}><Octicons name='person' size={30} color='#FFFFFF'/></TouchableOpacity>
      </View>
    </View>
    );
};


export default Notification;