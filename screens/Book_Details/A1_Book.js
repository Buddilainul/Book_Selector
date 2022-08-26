import React, {useState} from "react";
import { Text, View, Image, ScrollView} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from "../../components/styles";
import backgroundImg from '../../assets/A1_Book.png'; 
import profile_picture from '../../assets/A1_Book_Author.png'; 




const Welcome = ({navigation}) => {
  const [hidePassword, setHidePassword] = useState(true);

    return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      
      <ScrollView>
        <View>
      <Image source={backgroundImg} style={styles.A1_Book_img}/> 
      
      <View style={styles.welcomeContainer}>
      <Text style={styles.wlcomeTitle}>A1 Book</Text>
      <View style={styles.line}/>


      <Image source={profile_picture} style={styles.avatar} /> 

      <Text style={styles.A1_headTexts}>Author</Text>
      <Text style={styles.A1_headLine}>Richard Colin</Text>
        <View style={styles.line}/>

        <Text style={styles.A1_headTexts}>What is this A1 Book</Text>
        <Text style={styles.A1_Texts}>Lorem Ipsum is simply dummy text of the 
        printing and typesetting industry. Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s, when an unknown printer took a 
        galley of type and scrambled it to make a type specimen book. It has survived
        not only five centuries, but also the leap into electronic typesetting, remaining 
        essentially unchanged. It was popularised in the 1960s with the release of Letraset 
        sheets containing Lorem Ipsum passages, and more recently with desktop publishing software 
        like Aldus PageMaker including versions of Lorem Ipsum.</Text>
        <View style={styles.line}/>

        <Text style={styles.A1_headTexts}>How much is this Great book</Text>

        <Text style={styles.A1_Texts}>Well, when it was firstly published, it was cost around $100 now you can get this book $50 from us</Text>
        <View style={styles.line}/>


      </View>
      </View>
      </ScrollView>
    </View>
    );
};

export default Welcome;