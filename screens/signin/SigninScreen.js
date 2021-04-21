import React, { Component } from "react";
import {Alert, Button, TextInput, View, StyleSheet, Text, Image, ImageBackground} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AuthContext from "../../Components/context";
import axios from 'axios';

import image from '../../Images/aboutImage/image4.jpg';

const SigninScreen = () => {
  const [data, setData] = React.useState({
    userName: "",
    password: "",
    check_textInputChange: false,
    secureTextEntry: true,
    condition: null,
  });

  const { signIn } = React.useContext(AuthContext);
  const textInputChange = (val) => {
    if (val.length !== 0) {
      setData({
        ...data,
        userName: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        check_textInputChange: false,
      });
    }
  };
  const handlePasswordChange = (val) => {
    setData({
      ...data,
      password: val,
    });
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };
  const call = () => {
    return data1;
  };
  let condition;
  let i = 0;
  let status = false;
  let flag=false;
   const loginHandle =(userName, password) => {


    // if (userName == "a" && "a" == password) {
    //   flag=true
    // }

    const email = userName;
    const obj = {email,password};

   axios.post('http://104.236.96.123:8000/api/login',obj)
        .then((res)=>{
          console.log(res.data);
          if(res.data.message=='success'){
            flag=true;
            console.log(flag+" Thisaru");
            global.userId=res.data.user.id;
            global.companyId=res.data.user.companies_company_id;
            return (signIn(flag,res.data.user.id), (status =flag))
          }

          else {

            console.log(res.data.message);
            return ((status =flag), check())
          }


        })
        .catch((err)=>{
          console.log(err);
          return (signIn(flag,userName), (status =flag))
        })




  };

  const check = () => {
    if (status == false) {
      Alert.alert(
          "Enter Correct Username and Password",
          "",
          [
            {
              text: "",
              onPress: () => console.log("Ask me later pressed"),
            },
            {
              text: "",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel",
            },
            { text: "OK", onPress: () => console.log("OK Pressed") },
          ],
          { cancelable: false }
      );
    }
  };

  return (
      <View style={styles.container}>
        <Image source={image} style={styles.image}></Image>
        <Text style={styles.title}>U-Tracker</Text>
        <Text style={styles.subtitle}>Tracking Management System</Text>

        <TextInput


            placeholder={"Username"}
            style={styles.input}
            onChangeText={(val)=>textInputChange(val)}
        />



        <TextInput


            placeholder={"Password"}
            secureTextEntry={true}
            style={styles.input}
            onChangeText={(val)=>handlePasswordChange(val)}
        />



        <Button title={"Login"} style={styles.button} onPress={() =>{loginHandle(data.userName,data.password)}} />

      </View>
  );
};

export default SigninScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#ecf0f1",
  },
  input: {
    width: 350,
    height: 44,
    padding: 10,
    borderWidth: 2,
    borderColor: "green",
    marginBottom: 10,
    borderRadius:20,
  },
  title:{
    color:"black",
    fontSize: 40,
    marginBottom: 25,
  },
  subtitle:{
    marginBottom: 15,
    color:"black",
    fontSize: 25,
  },
  image:{
    marginTop:50,
    width:500,
    height: 240,
    borderRadius:20,
    resizeMode: 'contain',

  },
  button:{
    alignItems: 'center',
    backgroundColor: '#456214',
    padding: 100,
    width: 400,

  }
});
