import React from 'react'
import { StyleSheet, Text, View,} from "react-native";
import {Button} from 'react-native-paper';
import {ImageBackground} from "react-native";
//import styles from "";

//import image from '/assets/report-background.jpg';
//const image = { uri: "https://reactjs.org/logo-og.png" };

const ReportScreen =({navigation})=> {
    return (
        <View style={styles.container}>
            <ImageBackground source={import('./images.jpg')} style={styles.image}>
            <View  style={styles.button}>
            <Text>Report Screen</Text>
            </View>

            <View style={styles.button}>
            <Button
                mode="contained"
                dark="true"
                icon="file-multiple"
                onPress={()=> {navigation.navigate('Daily-running-report')}}>
                Daily Running Report</Button>
            </View>

            <View style={styles.button}>
            <Button
                mode="contained"
                dark="true"
                icon="file-multiple"
                onPress={()=> {navigation.navigate('Weekly-running-report')}}>
                Weekly Running Report</Button>
            </View>

            <View style={styles.button}>
            <Button
                mode="contained"
                dark="true"
                icon="file-multiple"
                onPress={()=> {navigation.navigate('Monthly-running-report')}}>
                Monthly Running Report</Button>
            </View>
            </ImageBackground>
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
    button:{
        marginBottom:30,
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"

    },
});



export default ReportScreen;
