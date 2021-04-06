import React from 'react'
import {StyleSheet, Text, View} from "react-native";
import {Button} from 'react-native-paper';
import PreviousLocationScreen from "./previousLocation/previousLocationScreen";

import {createStackNavigator} from "@react-navigation/stack";
//PreviousLocationStackScreen
//import MainStack from "../../../navigation/MainStack";
//import {PreviousLocationStackScreen} from "../../../navigation/MainStack";
const PreviousLocationStack = createStackNavigator();

//const Stack = createStackNavigator();






const LocationScreen=({navigation})=> {




    return (
        <View  style={styles.container} >
            <View style={styles.button}>
            <Text style={styles.text}>This is location screen</Text>
            </View>

            <View style={styles.button}>
            <Button
                mode="contained"
                icon="map-marker-multiple"
                dark="true"
                onPress={()=> {navigation.navigate('Previous-Location')}}
            >
                Previous Location</Button>
            </View>

            <View>
            <Button
                mode="contained"
                icon="map-outline"
                dark="true"
                onPress={()=> navigation.navigate('Previous-path')}>
                Previous Paths
            </Button>
            </View>
        </View>

        // <NavigationContainer>
        //     <Stack.Navigator>
        //         <Stack.Screen name="PreviousLocation" component={PreviousLocationScreen} />
        //         <Stack.Screen name="PreviousPath" component={PreviousPathScreen} />
        //         {/*<Stack.Screen name="Settings" component={Settings} />*/}
        //     </Stack.Navigator>
        // </NavigationContainer>




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
    }
});



export default LocationScreen;
