import React, { Component } from "react";
import { Alert, Button, TextInput, View, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AuthContext from "../../Components/context";

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
        emal: val,
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

  const loginHandle = (userName, password) => {
     let flag=false;
    if (userName == "anuja" && "anuja" == password) {
        flag=true
    }
    return (signIn(flag,userName), (status =flag))
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

      <Button title={"Login"} style={styles.input} onPress={() =>{loginHandle(data.userName,data.password),check()}} />
    </View>
  );
};

export default SigninScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 10,
  },
});
