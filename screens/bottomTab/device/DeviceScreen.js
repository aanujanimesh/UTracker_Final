import React,{useState} from 'react'
import { StyleSheet, Text, View,TextInput, ImageBackground, Image} from "react-native";
import {Button} from 'react-native-paper';
//import styles from "";


import image from '../../../Images/aboutImage/image2.jpg';


const DeviceScreen=({navigation})=> {
    const [text, setText] = useState('');

    return (
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.image}>







            <Text style={styles.text}> This is Device Screen</Text>
            {/*<TextInput*/}
            {/*    style={{height: 40}}*/}
            {/*    placeholder="Type here to translate!"*/}
            {/*    onChangeText={text => setText(text)}*/}
            {/*    defaultValue={text}*/}
            {/*/>*/}

            <View style={styles.button}>
            <Button

                icon="shield-plus"
                mode="contained"
                dark="true"
                onPress={()=> {navigation.navigate('View-device')}}>
            View All Device</Button>
            </View>


                <View style={styles.button}>
                <Button
                // style={styles.button}
                icon="shield-plus"
                mode="contained"
                dark="true"
                onPress={()=> {navigation.navigate('Add-device')}}
            >Add Device</Button>

                </View>

            </ImageBackground>
        </View>
    );
}


 const styles = StyleSheet.create({
     container: {
         flex: 1,
         // backgroundColor: '#b3fff0',
         // alignItems: 'center',
         flexDirection: "column"
     },
     text:{
         fontSize:30,
     },
     button:{
         marginBottom:30,
         alignItems: 'center',
     },

     image: {
         flex: 1,
         resizeMode: "cover",
         justifyContent: "center"

     },
 });



export default DeviceScreen;
