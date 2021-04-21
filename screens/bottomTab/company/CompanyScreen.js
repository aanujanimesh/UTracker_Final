import React from 'react'
import {StyleSheet, View,} from "react-native";
import {Button} from 'react-native-paper';
import {ImageBackground} from "react-native";


import image from '../../../Images/aboutImage/image2.jpg'
// import {createStackNavigator} from "@react-navigation/stack";
//PreviousLocationStackScreen
//import MainStack from "../../../navigation/MainStack";
//import {PreviousLocationStackScreen} from "../../../navigation/MainStack";
// const PreviousLocationStack = createStackNavigator();

//const Stack = createStackNavigator();


const CompanyScreen = ({navigation}) => {


    return (
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.image}>


                {/*<View style={styles.button}>*/}
                {/*/!*<Text style={styles.text}>This is location screen</Text>*!/*/}
                {/*</View>*/}

                {/*<View style={styles.button}>*/}
                {/*<Button*/}
                {/*    mode="contained"*/}
                {/*    icon="map-marker-multiple"*/}
                {/*    dark="true"*/}
                {/*    onPress={()=> {navigation.navigate('Previous-Location')}}*/}
                {/*>*/}
                {/*    Previous Location</Button>*/}
                {/*</View>*/}

                <View style={styles.button}>
                    <Button
                        mode="contained"
                        icon="map-outline"
                        dark="true"
                        onPress={() => navigation.navigate('Previous-path')}>
                        Company Details
                    </Button>
                </View>

            </ImageBackground>
        </View>

        // <NavigationContainer>
        //     <Stack.Navigator>
        //         <Stack.Screen name="PreviousLocation" component={PreviousLocationScreen} />
        //         <Stack.Screen name="PreviousPath" component={CompanyDetailsScreen} />
        //         {/*<Stack.Screen name="Settings" component={Settings} />*/}
        //     </Stack.Navigator>
        // </NavigationContainer>


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#b3fff0',
        // alignItems: 'center',
        justifyContent: 'center',

    },
    text: {
        fontSize: 30,
    },
    button: {
        marginBottom: 30,
        alignItems: 'center',
    },

    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"

    },
});


export default CompanyScreen;
