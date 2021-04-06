import React,{useState} from 'react'
import { StyleSheet, Text, View,TextInput} from "react-native";
import {Button} from 'react-native-paper';
//import styles from "";




const DeviceScreen=({navigation})=> {
    const [text, setText] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.text}> This is Device Screen</Text>
            {/*<TextInput*/}
            {/*    style={{height: 40}}*/}
            {/*    placeholder="Type here to translate!"*/}
            {/*    onChangeText={text => setText(text)}*/}
            {/*    defaultValue={text}*/}
            {/*/>*/}
            <Button
                style={styles.button}
                icon="shield-plus"
                mode="contained"
                dark="true"
                onPress={()=> {navigation.navigate('View-device')}}>
            View All Device</Button>

            <Button
                style={styles.button}
                icon="shield-plus"
                mode="contained"
                dark="true"
                onPress={()=> {navigation.navigate('Add-device')}}
            >Add Device</Button>

        </View>
    );
}


 const styles = StyleSheet.create({
     container: {
         flex: 1,
         backgroundColor: '#b3fff0',
         alignItems: 'center',
        justifyContent: 'center',
     },
     text:{
         fontSize:30,
     },
     button:{
         marginBottom:30,
     },
 });



export default DeviceScreen;
