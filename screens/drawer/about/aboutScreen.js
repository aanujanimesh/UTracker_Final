// import React from 'react';
// import {Text, View} from "react-native";
// import styles from './style';
//
// const AboutScreen = () => {
//     return(
//         <View style={styles.container}>
//             <Text>This is about page</Text>
//         </View>
//     )
//
// }
//
// export default AboutScreen;

import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

// const image = { uri: "https://reactjs.org/logo-og.png" };
import image from '../../../Images/aboutImage/image3.jpg';

const AboutScreen = () => (
    <View style={styles.container}>
        <ImageBackground source={image} style={styles.image}>
            <Text style={styles.text}>"Utracker" is a useful vehicle tracking and managment system designed to cater to various fleet industries, both private and commercial. The system offers features like mobile app, multiple reports and with 24/7 reliable technical support.</Text>
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
        fontSize: 25,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "transparent",


    }
});

export default AboutScreen;
