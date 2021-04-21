import React from 'react'

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from "react-native-vector-icons/Ionicons";
import {createStackNavigator} from "@react-navigation/stack";
//import Icon from "react-native-vector-icons/Ionicons";

import HomeScreen from "../screens/bottomTab/home/homeScreen";
import CompanyScreen from "../screens/bottomTab/company/CompanyScreen";
import DeviceScreen from "../screens/bottomTab/device/DeviceScreen";
import ReportScreen from "../screens/bottomTab/vehicle/VehicleScreen";
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
        <LocationStack.Screen name="Company" component={CompanyScreen} options={{
            title:'Company',
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
        <ReportStack.Screen name="Vehicle" component={ReportScreen} options={{
            title:'Vehicle',
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
                name="Company"
                component={LocationStackScreen}
                options={{
                    tabBarLabel: 'Company',
                    tabBarColor:'#009386',
                    tabBarIcon: ({ color }) => (
                        <Icon name="grid-sharp" color={color} size={26} />//26
                    ),
                }}
            />

            {/*<Tab.Screen*/}
            {/*    name="Device"*/}
            {/*    component={DeviceStackScreen}*/}
            {/*    options={{*/}
            {/*        tabBarLabel: 'Device',*/}
            {/*        tabBarColor:'#009387',*/}
            {/*        tabBarIcon: ({ color }) => (*/}
            {/*            <Icon name="desktop" color={color} size={26} />*/}
            {/*        ),*/}
            {/*    }}*/}
            {/*/>*/}


            <Tab.Screen
                name="Report"
                component={ReportStackScreen}
                options={{
                    tabBarLabel: 'Vehicle',
                    tabBarColor:'#009387',
                    tabBarIcon: ({ color }) => (
                        <Icon name="ios-car-sport-sharp" color={color} size={26} />
                    ),
                }}
            />





        </Tab.Navigator>
    );
}


export default MainTabScreen;



