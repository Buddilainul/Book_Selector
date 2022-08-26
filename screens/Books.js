import React, {useState} from "react";
import { Text, View, TouchableOpacity, ImageBackground, TextInput, ScrollView} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {Octicons} from '@expo/vector-icons';
import styles from "../components/styles";
import backgroundImg from './../assets/Books_background.png'; 



const Books = ({navigation}) => {
  const [hidePassword, setHidePassword] = useState(true);

    return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <ImageBackground source={backgroundImg} style={styles.books_background}>
      <View style={styles.searchSection}>
          <TextInput style={styles.searchBox} placeholder="Enter Book title" />
          <TouchableOpacity style={styles.searchIcon}><Octicons name='search' size={40} color='#000000'/></TouchableOpacity>
        </View>
      <ScrollView>
       <View style={styles.listSection}>
        <Text style={styles.listHeader}>A</Text>
        <TouchableOpacity onPress={() => navigation.navigate("A1_Book")}><Text style={styles.listItems}>A1-Book</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.listItems}>A2-Book</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.listItems}>A3-Book</Text></TouchableOpacity>

        <Text style={styles.listHeader}>B</Text>
        <TouchableOpacity><Text style={styles.listItems}>B1-Book</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.listItems}>B2-Book</Text></TouchableOpacity>

        <Text style={styles.listHeader}>C</Text>
        <TouchableOpacity><Text style={styles.listItems}>C1-Book</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.listItems}>C2-Book</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.listItems}>C3-Book</Text></TouchableOpacity>

        <Text style={styles.listHeader}>D</Text>
        <TouchableOpacity><Text style={styles.listItems}>D1-Book</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.listItems}>D2-Book</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.listItems}>D3-Book</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.listItems}>D4-Book</Text></TouchableOpacity>

        <Text style={styles.listHeader}>E</Text>
        <TouchableOpacity><Text style={styles.listItems}>E1-Book</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.listItems}>E2-Book</Text></TouchableOpacity>

        <Text style={styles.listHeader}>F</Text>
        <TouchableOpacity><Text style={styles.listItems}>F1-Book</Text></TouchableOpacity>

        <Text style={styles.listHeader}>G</Text>
        <TouchableOpacity><Text style={styles.listItems}>G1-Book</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.listItems}>G2-Book</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.listItems}>G3-Book</Text></TouchableOpacity>

        <Text style={styles.listHeader}>H</Text>
        <TouchableOpacity><Text style={styles.listItems}>H1-Book</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.listItems}>H2-Book</Text></TouchableOpacity>
        
        <Text style={styles.listHeader}>I</Text>
        <TouchableOpacity><Text style={styles.listItems}>I1-Book</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.listItems}>I2-Book</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.listItems}>I3-Book</Text></TouchableOpacity>
       
        <Text style={styles.listHeader}>J</Text>
        <TouchableOpacity><Text style={styles.listItems}>J1-Book</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.listItems}>J2-Book</Text></TouchableOpacity>
       
       </View>     
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




export default Books;