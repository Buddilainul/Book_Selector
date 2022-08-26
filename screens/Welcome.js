import React, {useState} from "react";
import { Text, View, Image, TouchableOpacity} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from "../components/styles";
import backgroundImg from './../assets/background.png'; 
import profile_picture from './../assets/profile_img.png'; 




const Welcome = ({navigation}) => {
  const [hidePassword, setHidePassword] = useState(true);

    return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Image source={backgroundImg} style={styles.welcomeImg} /> 
      
      <View style={styles.welcomeContainer}>
      <Text style={styles.wlcomeTitle}>Wellcome! Buddy</Text>
      <Text style={styles.welcomeSubTitle}>Buddila Inul</Text>
      <Text style={styles.welcomeSubTitle}>buddilainul@gmail.com</Text>

        <Image source={profile_picture} style={styles.avatar} /> 

        <View style={styles.line}/>

        <TouchableOpacity onPress={() => navigation.navigate("Home")} style={styles.button}>
            <Text style={styles.buttonText}>Let's Go</Text>
        </TouchableOpacity>
      </View>
    </View>
    );
};

export default Welcome;