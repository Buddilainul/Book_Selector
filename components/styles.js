import React from "react";
import { StyleSheet} from 'react-native';
import { clearErrors } from "react-native/Libraries/LogBox/Data/LogBoxData";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
  },
  header_img:{
    paddingTop: 30,

  },
  image:{
    width: 230, 
    height: 230,
  },
  title:{
    fontSize: 35,
    alignItems: "center",
    fontWeight: "bold",
    color:'#F19B2F',
    padding: 10,
    paddingTop: 50,
    
  },
  subTitle:{
    fontSize: 18,
    marginBottom: 20,
    letterSpacing: 1,
    fontWeight: "bold",
    color: "#1d1e13",
  },  
  textInput:{
    backgroundColor:"#e5e7eb",
    padding: 15,
    paddingLeft: 75,
    paddingRight: 75,
    borderRadius: 20,
    fontSize: 16,
    height: 60,
    marginVertical: 3,
    marginBottom: 10,
    color:"#1d1e13",
  },
  inputlabel:{
    color: "#1d1e13",
    fontSize: 13,
    textAlign: "left",
    paddingLeft: 10,
  },
  leftIcon:{
    left: 15,
    top: 38,
    paddingLeft: 5,
    position: "absolute",
    zIndex: 1,
  },
  rightIcon:{
    right: 15,
    top: 38,
    position: "absolute",
    zIndex: 1,
  },
  button:{
    padding: 15,
    backgroundColor: "#F19B2F",
    justifyContent:"center",
    borderRadius: 20,
    marginVertical: 5,
    height: 60,
    alignItems:"center",
    paddingLeft: 100,
    paddingRight: 100,
  },
  gButton:{
    padding: 15,
    backgroundColor: "#22AA5F",
    justifyContent:"center",
    borderRadius: 20,
    marginVertical: 5,
    height: 60,
    alignItems:"center",
    flexDirection: "row",
  },
  buttonText:{
    color: "#FFFFFF",
    fontSize: 16,
  }, 
  gButtonText:{
    color: "#FFFFFF",
    fontSize: 16,
    paddingLeft: 15,
  },
  line:{
    borderBottomWidth: 1,
    borderBottomColor: "#9ca3af",
    padding: 3,
    paddingLeft: 150,
    paddingRight: 150,
  },
  extraView:{
    justifyContent:"center",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  extraText:{
    justifyContent: "center",
    alignContent: "center",
    color:"#F19B2F",
    fontSize: 15,
  },
  textLink:{
    color: "#9ca3af",
    fontSize: 15,
    paddingLeft: 5,
  },
 
  //welcome section
  welcomeContainer:{
    flex: 1,
    width: "100%",
    alignItems:"center",
    padding: 25,
    paddingTop: 10,
    justifyContent: "center",
  },
  wlcomeTitle:{
    fontSize: 30,
    alignItems: "center",
    fontWeight: "bold",
    color:'#F19B2F',
    padding: 8,
  },
  welcomeSubTitle:{
    fontSize: 18,
    marginBottom: 5,
    letterSpacing: 1,
    color: "#1d1e13",
  },
  avatar:{
    width: 100,
    height: 100,
    margin: "auto",
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#e5e7eb",
    marginBottom: 10,
    marginTop: 10,
  },
  welcomeImg:{
    height: "50%",
    width: "100%",
  },

// navigation tab 
  tabNavigation:{
    flexDirection:"row",
    padding: 0,   
    backgroundColor:"#3A3A47"
  },
  tabNavigationHome:{
    flex:1, 
    backgroundColor: "#14A532",
    height: 60,
    alignItems:"center",
    justifyContent: "center",
    borderRadius: 20,
  },
  tabNavigationNotification:{
    flex:1, 
    backgroundColor: "#1033E0",
    height: 60,
    alignItems:"center",
    justifyContent: "center",
    borderRadius: 20,
  },
  tabNavigationBooks:{
    flex:1, 
    backgroundColor: "#6610E0",
    height: 60,
    alignItems:"center",
    justifyContent: "center",
    borderRadius: 20,
  },
  tabNavigationProfile:{
    flex:1, 
    backgroundColor: "#E0106F",
    height: 60,
    alignItems:"center",
    justifyContent: "center",
    borderRadius: 20,
  },

  //home style
  home_background:{
    height: 780,
    width: 375,
  },
  homeHeader_img:{
    paddingTop: 60,
    alignItems:"center",
  },
  home_title:{
    fontSize: 55,
    alignItems: "center",
    fontWeight: "bold",
    color:'#FC6600',
    padding: 10,
    paddingTop: 30,
  },
  homeNav:{
    fontSize: 20,
    fontWeight: "bold",
    color:'#ffff',
    padding: 10,
    paddingTop: 5,
  },



  //books section style
  books_background:{
    height: 720,
    width: 360,

  },
  listItems:{
    fontSize:35,
    justifyContent:"center",
    alignContent: "center",
    color: "#DD1212",
    paddingLeft: 50,
    fontWeight: "bold",
  },
  listHeader:{
    color: "#110A0C",
    fontSize:45,
    fontWeight: "bold",
  },
  listSection:{
    alignContent: "center",
    paddingLeft:30,
  },
  searchSection:{
    flexDirection: "row",
    paddingTop: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  searchBox:{
    width: "70%",
    backgroundColor: "#9ca3af",
    height: 50,
    borderRadius: 20,
    padding: 15,
    marginBottom: 10,
  },
  searchIcon:{
    paddingLeft:15,
  },


  // notification styles
  notification_background:{
    height: 725,
    width: 400,
  },
  notif_title:{
    fontSize: 50,
    alignItems: "center",
    fontWeight: "bold",
    color:'#110A0C',
    padding: 10,
    paddingTop: 90,
    textAlign: "center",
  },
  newNotifications:{
    fontSize: 25,
    alignItems: "center",
    fontWeight: "bold",
    color:'#110A0C',
    padding: 10,
    paddingTop: 10,
    textAlign: "center",
  },
  
  //Profile style
  profileHeadSubTitle:{
    fontSize:16,
    fontWeight: "bold",
    padding:5,
  },
  profileSubTitle:{
    textAlign:"left",
    fontSize: 22,
    paddingBottom:10,
  },

  //A1_Book style
  A1_Book_img:{
    height:350,
    width:350,
  },
  A1_headLine:{  
    fontSize:30,
    fontWeight: "bold",
    padding:5,
  },
  A1_headTexts:{
    fontSize:16,
    fontWeight: "bold",
    padding:5,
  },
  A1_Texts:{
    textAlign:"left",
    fontSize: 19,
    paddingBottom:10,
  },
});

export default styles;

