// import React from 'react';
// import {Text, View, Button} from "react-native";
// import styles from './style';
// import {createStackNavigator} from "@react-navigation/stack";
// //import {Button} from "react-native-paper";
//
//
//
//
//
// const ContactScreen = ({navigation}) => {
//     return(
//         <View style={styles.container}>
//             <Text>This is contact page</Text>
//             <Button title="Go to contact" onPress={()=> {navigation.push("Contact")}}/>
//         </View>
//     )
//
// }
//
// export default ContactScreen;

import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

// const image = { uri: "https://reactjs.org/logo-og.png" };
import image from '../../../Images/aboutImage/image3.jpg';
import Paragraph from "react-native-paper";

const ContactScreen = () => (
    <View style={styles.container}>
        <ImageBackground source={image} style={styles.image}>


            <Text style={styles.text}>Address : 54/3 , Jayawardana Rd , Katubedda , Moratuwa</Text>
            <Text style={styles.text1}>Email : info@utracker.com</Text>
            <Text style={styles.text1}>Phone : +94 76 567 3451</Text>

        </ImageBackground>
    </View>





);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    },

    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    text: {
        color: "lightseagreen",
        fontSize: 32,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "transparent"

    },
    text1: {
        color: "lightseagreen",
        fontSize: 32,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "transparent",
        lineHeight: 70

    }
});

export default ContactScreen;


