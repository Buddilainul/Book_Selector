import React from 'react';

//react navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//screens
import Login from './../screens/Login';
import SignUp from './../screens/SignUp';
import Welcome from './../screens/Welcome';
import Home from './../screens/Home';
import Notification from './../screens/Notification';
import Profile from './../screens/Profile';
import Books from './../screens/Books';
import A1_Book from'./../screens/Book_Details/A1_Book';

const Stack = createNativeStackNavigator();


const RoostStack = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: 'transparent'
                    },
                    headerTintColor: "#1d1e13",
                    headerTransparent: true,
                    headerTitle:'',
                    headerLeftContainerStyle:{
                        paddingLeft: 20
                    }
                }}
                initialRouteName="Login"
            >
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen options={{headerTintColor: "#ffff" }} name="Welcome" component={Welcome} />
                <Stack.Screen options={{headerTintColor: "#ffff" }} name="Home" component={Home} />
                <Stack.Screen name="Notification" component={Notification} />
                <Stack.Screen options={{headerTintColor: "#ffff" }} name="Profile" component={Profile} />
                <Stack.Screen options={{headerTintColor: "#ffff" }} name="Books" component={Books} />
                <Stack.Screen name="A1_Book" component={A1_Book} />
            </Stack.Navigator>
        </NavigationContainer>
    )
} 


export default RoostStack;