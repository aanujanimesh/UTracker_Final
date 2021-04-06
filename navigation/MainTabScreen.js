import React from 'react'

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from "react-native-vector-icons/Ionicons";
import {createStackNavigator} from "@react-navigation/stack";
//import Icon from "react-native-vector-icons/Ionicons";

import HomeScreen from "../screens/bottomTab/home/homeScreen";
import LocationScreen from "../screens/bottomTab/loacation/locationScreen";
import  DeviceScreen from "../screens/bottomTab/device/deviceScreen";
import ReportScreen from "../screens/bottomTab/reports/reportsScreen";
import PreviousLocationScreen from "../screens/bottomTab/loacation/previousLocation/previousLocationScreen";
import DrawerContent from "./DrawerContent"
//import ExploreScreen from "../screens/ExploreScreen";

const HomeStack = createStackNavigator();
const LocationStack = createStackNavigator();
const DeviceStack = createStackNavigator();
const ReportStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();


const HomeStackScreen = ({navigation}) =>(
    <HomeStack.Navigator screenOptions={{
        headerStyle:{
            backgroundColor:'#009387',

        },
        headerTintColor:'#fff',
        headerTitleStyle:{
            fontWeight:'bold'
        }
    }}>
        <HomeStack.Screen name="Home" component={HomeScreen} options={{
            title:'Overview',
            headerLeft:() => (
                <Icon.Button name="ios-menu"
                             size={25}
                             backgroundColor ="#009387"
                             onPress={() =>navigation.openDrawer()}>
                </Icon.Button>
            )
        }} />
    </HomeStack.Navigator>
);

const LocationStackScreen = ({navigation}) =>(
    <LocationStack.Navigator screenOptions={{
        headerStyle:{
            backgroundColor:'#009387',
        },
        headerTintColor:'#fff',
        headerTitleStyle:{
            fontWeight:'bold'
        }
    }}>
        <LocationStack.Screen name="Location" component={LocationScreen} options={{
            title:'Location',
            headerLeft:() => (
                <Icon.Button name="ios-menu"
                             size={25}
                             backgroundColor ="#009387"
                             onPress={() =>navigation.openDrawer()}>
                </Icon.Button>
            )
        }}/>
    </LocationStack.Navigator>
);
////////////////////////////////////



const DeviceStackScreen = ({navigation}) =>(
    <DeviceStack.Navigator screenOptions={{
        headerStyle:{
            backgroundColor:'#009387',
        },
        headerTintColor:'#fff',
        headerTitleStyle:{
            fontWeight:'bold'
        }
    }}>
        <DeviceStack.Screen name="Device" component={DeviceScreen} options={{
            title:'Device',
            headerLeft:() => (
                <Icon.Button name="ios-menu"
                             size={25}
                             backgroundColor ="#009387"
                             onPress={() =>navigation.openDrawer()}>
                </Icon.Button>
            )
        }}/>
    </DeviceStack.Navigator>
);


const ReportStackScreen = ({navigation}) =>(
    <ReportStack.Navigator screenOptions={{
        headerStyle:{
            backgroundColor:'#009387',
        },
        headerTintColor:'#fff',
        headerTitleStyle:{
            fontWeight:'bold'
        }
    }}>
        <ReportStack.Screen name="Report" component={ReportScreen} options={{
            title:'Report',
            headerLeft:() => (
                <Icon.Button name="ios-menu"
                             size={25}
                             backgroundColor ="#009387"
                             onPress={() =>navigation.openDrawer()}>
                </Icon.Button>
            )
        }}/>
    </ReportStack.Navigator>
);




const MainTabScreen =() => {
    return (
        <Tab.Navigator drawerContent={(props) => <DrawerContent {...props} />}
            // initialRouteName="Home"
            // activeColor="#fff"
            // barStyle={{ backgroundColor: '#009387' }}
        >
            <Tab.Screen
                name="Home"
                component={HomeStackScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarColor:'#009387',
                    tabBarIcon: ({ color }) => (
                        <Icon name="ios-home" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Location"
                component={LocationStackScreen}
                options={{
                    tabBarLabel: 'Location',
                    tabBarColor:'#009387',
                    tabBarIcon: ({ color }) => (
                        <Icon name="md-location-sharp" color={color} size={26} />//26
                    ),
                }}
            />

            <Tab.Screen
                name="Device"
                component={DeviceStackScreen}
                options={{
                    tabBarLabel: 'Device',
                    tabBarColor:'#009387',
                    tabBarIcon: ({ color }) => (
                        <Icon name="md-settings" color={color} size={26} />
                    ),
                }}
            />


            <Tab.Screen
                name="Report"
                component={ReportStackScreen}
                options={{
                    tabBarLabel: 'Report',
                    tabBarColor:'#009387',
                    tabBarIcon: ({ color }) => (
                        <Icon name="md-reader" color={color} size={26} />
                    ),
                }}
            />



        </Tab.Navigator>
    );
}


export default MainTabScreen;



