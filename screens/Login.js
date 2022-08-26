import React, {useState} from "react";
import { Text, View, Image, TextInput, TouchableOpacity} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from "../components/styles";
import {Octicons, Ionicons, Fontisto} from '@expo/vector-icons';
import { Formik } from 'formik';
import logo from './../assets/logo.png'; 
import KeyboardAvoidingWrapper from "../components/KeyboardAvoidingWrapper";


const Login = ({navigation}) => {
  const [hidePassword, setHidePassword] = useState(true);

    return (
    <KeyboardAvoidingWrapper>
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header_img}>
      <Image source={logo} style={styles.image} /> 
      </View>
      <Text style={styles.title}>Book Selector</Text>
      <Text style={styles.subTitle}>Account Login</Text>

      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) =>{
          console.log(values);
          navigation.navigate("Welcome")
        }}
      >
        {({handleChange, handleBlur, handleSubmit, values}) => <View style={styles.formArea}>
            <MyTextInput 
              label= {<Text>Email Address</Text> }
              icon="mail"
              placeholder="example@gmail.com"
              placeholderTextColor='#9ca3af'
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              keyboardType="email-address"
            />
            <MyTextInput 
              label= {<Text>Password</Text> }
              icon="lock"
              placeholder="* * * * * * * "
              placeholderTextColor='#9ca3af'
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              secureTextEntry={hidePassword}
              isPassword={true}
              hidePassword={hidePassword}
              setHidePassword={setHidePassword}
            />
            <TouchableOpacity onPress={handleSubmit} style={styles.button}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <View style={styles.line}/>
            
            <TouchableOpacity onPress={handleSubmit} style={styles.gButton}>
              <Fontisto name="google" color={'#FFFFFF'} size={25} />
              <Text style={styles.gButtonText}>Sign in with Google</Text>
            </TouchableOpacity>

            <View style={styles.extraView}>
              <Text style={styles.extraText}>Don't have an account already?</Text>
              <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
                <Text style={styles.textLink}>SignUp</Text>
              </TouchableOpacity>
            </View>

          </View>}
      </Formik>

    </View>
    </KeyboardAvoidingWrapper>
    );
};

const MyTextInput = ({label, icon, isPassword, hidePassword, setHidePassword, ...props}) => {
  return(
    <View>
      <View style={styles.leftIcon}>
        <Octicons name={icon} size={30} color='#F19B2F'/>
      </View>
      <View style={styles.inputlabel}>{label}</View>
      <View style={styles.textInput}><TextInput {...props} /></View>
      {isPassword && (
        <TouchableOpacity onPress={() => setHidePassword(!hidePassword)} style={styles.rightIcon}>
          <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={"#9ca3af"}/>
        </TouchableOpacity>
      )}

    </View>
  )
}

export default Login;