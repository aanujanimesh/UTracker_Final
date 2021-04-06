import React from 'react';
import {Text, View, Button} from "react-native";
import styles from './style';
import {createStackNavigator} from "@react-navigation/stack";
//import {Button} from "react-native-paper";





const ContactScreen = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Text>This is contact page</Text>
            <Button title="Go to contact" onPress={()=> {navigation.push("Contact")}}/>
        </View>
    )

}

export default ContactScreen;
