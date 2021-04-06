import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createDrawerNavigator} from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/Ionicons";
import { ActivityIndicator } from 'react-native-paper';
import SignInScreen from "../screens/signin/SigninScreen"

import MainTabScreen from "./MainTabScreen";
import AboutScreen from "../screens/drawer/about/aboutScreen";
import ContactScreen from "../screens/drawer/contact/contactScreen";
import PreviousLocationScreen from "../screens/bottomTab/loacation/previousLocation/previousLocationScreen";
import PreviousPathScreen from "../screens/bottomTab/loacation/previousPath/previousPathScreen";
import DailyRunningReportScreen from "../screens/bottomTab/reports/dailyRunningReport/dailyRunningReportScreen";
import MonthlyRunningReportScreen from "../screens/bottomTab/reports/monthlyRunningReport/monthlyRunningReportScreen";
import WeeklyRunningReportScreen from "../screens/bottomTab/reports/weeklyRunningReport/weeklyRunningReportScreen";
import ProfileScreen from "../screens/drawer/profile/profileScreen";
import AuthContext from '../Components/context'

import DrawerContent from "./DrawerContent"
import {createStackNavigator} from "@react-navigation/stack";
import MainTab from "./DrawerContent";
import HomeScreen from "../screens/bottomTab/home/homeScreen";
import ViewDeviceScreen from "../screens/bottomTab/device/viewDevice/viewDeviceScreen";
import AddDeviceScreen from "../screens/bottomTab/device/addDevice/addDeviceScreen";
import { View} from 'react-native'

const Drawer = createDrawerNavigator();

const ContactStack = createStackNavigator();
const PreviousLocationStack = createStackNavigator();
const AboutStack = createStackNavigator();
const PreviousPathStack = createStackNavigator();
const DailyRunningReportStack = createStackNavigator();
const MonthlyRunningReportStack = createStackNavigator();
const WeeklyRunningReportStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const ViewDeviceStack = createStackNavigator();
const AddDeviceStack = createStackNavigator();


const Stack = createStackNavigator();


const ContactStackScreen = ({navigation}) =>(
    <ContactStack.Navigator screenOptions={{
        headerStyle:{
            backgroundColor:'#009387',
        },
        headerTintColor:'#fff',
        headerTitleStyle:{
            fontWeight:'bold'
        }
    }}>
        <ContactStack.Screen name="Contact" component={ContactScreen} options={{
            title:'Contact',
            headerLeft:()=>(
                <Icon.Button name="arrow-back"
                             size={25}
                              backgroundColor ="#009387"
                             onPress={()=>navigation.navigate('Home')}>
                             </Icon.Button>
            )
        }}/>
    </ContactStack.Navigator>
);



const AboutStackScreen = ({navigation}) =>(
    <AboutStack.Navigator screenOptions={{
        headerStyle:{
            backgroundColor:'#009387',
        },
        headerTintColor:'#fff',
        headerTitleStyle:{
            fontWeight:'bold'
        }
    }}>
        <AboutStack.Screen name="About" component={AboutScreen} options={{
            title:'About',
            headerLeft:()=>(
                <Icon.Button name="arrow-back"
                             size={25}
                             backgroundColor ="#009387"
                             onPress={()=>navigation.navigate('Home')}>
                </Icon.Button>
            )
        }}/>
    </AboutStack.Navigator>
);



const PreviousLocationStackScreen = ({navigation}) =>(
    <PreviousLocationStack.Navigator screenOptions={{
        headerStyle:{
            backgroundColor:'#009387',
        },
        headerTintColor:'#fff',
        headerTitleStyle:{
            fontWeight:'bold'
        }
    }}>
        <PreviousLocationStack.Screen name="Previous-Location1" component={PreviousLocationScreen} options={{
            title:'Previous-location',
            headerLeft:()=>(
                <Icon.Button  name="arrow-back"
                              size={25}
                              backgroundColor ="#009387"
                              onPress={()=>navigation.navigate('Location')}>
                </Icon.Button>
            )
        }}/>
    </PreviousLocationStack.Navigator>
);


const PreviousPathStackScreen = ({navigation}) =>(
    <PreviousPathStack.Navigator screenOptions={{
        headerStyle:{
            backgroundColor:'#009387',
        },
        headerTintColor:'#fff',
        headerTitleStyle:{
            fontWeight:'bold'
        }
    }}>
        <PreviousPathStack.Screen name="Previous-path" component={PreviousPathScreen} options={{
            title:'Previous-path',
            headerLeft:()=>(
                <Icon.Button  name="arrow-back"
                              size={25}
                              backgroundColor ="#009387"
                              onPress={()=>navigation.navigate('Location')}>
                </Icon.Button>
            )
        }}/>
    </PreviousPathStack.Navigator>
);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
const DailyRunningReportStackScreen = ({navigation}) =>(
    <DailyRunningReportStack.Navigator screenOptions={{
        headerStyle:{
            backgroundColor:'#009387',
        },
        headerTintColor:'#fff',
        headerTitleStyle:{
            fontWeight:'bold'
        }
    }}>
        <DailyRunningReportStack.Screen name="Daily-running-report" component={DailyRunningReportScreen} options={{
            title:'Daily-running-report',
            headerLeft:()=>(
                <Icon.Button  name="arrow-back"
                              size={25}
                              backgroundColor ="#009387"
                              onPress={()=>navigation.navigate('Report')}>
                </Icon.Button>
            )
        }}/>
    </DailyRunningReportStack.Navigator>
);


const WeeklyRunningReportStackScreen = ({navigation}) =>(
    <WeeklyRunningReportStack.Navigator screenOptions={{
        headerStyle:{
            backgroundColor:'#009387',
        },
        headerTintColor:'#fff',
        headerTitleStyle:{
            fontWeight:'bold'
        }
    }}>
        <WeeklyRunningReportStack.Screen name="Weekly-running-report" component={WeeklyRunningReportScreen} options={{
            title:'Weekly-running-report',
            headerLeft:()=>(
                <Icon.Button  name="arrow-back"
                              size={25}
                              backgroundColor ="#009387"
                              onPress={()=>navigation.navigate('Report')}>
                </Icon.Button>
            )
        }}/>
    </WeeklyRunningReportStack.Navigator>
)



const MonthlyRunningReportStackScreen = ({navigation}) =>(
    <MonthlyRunningReportStack.Navigator screenOptions={{
        headerStyle:{
            backgroundColor:'#009387',
        },
        headerTintColor:'#fff',
        headerTitleStyle:{
            fontWeight:'bold'
        }
    }}>
        <MonthlyRunningReportStack.Screen name="Monthly-running-report" component={MonthlyRunningReportScreen} options={{
            title:'Monthly-running-report',
            headerLeft:()=>(
                <Icon.Button  name="arrow-back"
                              size={25}
                              backgroundColor ="#009387"
                              onPress={()=>navigation.navigate('Report')}>
                </Icon.Button>
            )
        }}/>
    </MonthlyRunningReportStack.Navigator>
);
/////////////////////////////////////////////////////////////////////////

const ProfileStackScreen = ({navigation}) =>(
    <ProfileStack.Navigator screenOptions={{
        headerStyle:{
            backgroundColor:'#009387',
        },
        headerTintColor:'#fff',
        headerTitleStyle:{
            fontWeight:'bold'
        }
    }}>
        <ProfileStack.Screen name="Profile" component={ProfileScreen} options={{
            title:'Profile',
            headerLeft:()=>(
                <Icon.Button  name="arrow-back"
                              size={25}
                              backgroundColor ="#009387"
                              onPress={()=>navigation.navigate('Home')}>
                </Icon.Button>
            )
        }}/>
    </ProfileStack.Navigator>
);
////////////////////////////////////////////////////////////////////////////////////////////
const ViewDeviceStackScreen = ({navigation}) =>(
    <ViewDeviceStack.Navigator screenOptions={{
        headerStyle:{
            backgroundColor:'#009387',
        },
        headerTintColor:'#fff',
        headerTitleStyle:{
            fontWeight:'bold'
        }
    }}>
        <ViewDeviceStack.Screen name="View-device" component={ViewDeviceScreen} options={{
            title:'View-device',
            headerLeft:()=>(
                <Icon.Button  name="arrow-back"
                              size={25}
                              backgroundColor ="#009387"
                              onPress={()=>navigation.navigate('Device')}>
                </Icon.Button>
            )
        }}/>
    </ViewDeviceStack.Navigator>
);

const AddDeviceStackScreen = ({navigation}) =>(
    <AddDeviceStack.Navigator screenOptions={{
        headerStyle:{
            backgroundColor:'#009387',
        },
        headerTintColor:'#fff',
        headerTitleStyle:{
            fontWeight:'bold'
        }
    }}>
        <MonthlyRunningReportStack.Screen name="Add-device" component={AddDeviceScreen} options={{
            title:'Add-device',
            headerLeft:()=>(
                <Icon.Button  name="arrow-back"
                              size={25}
                              backgroundColor ="#009387"
                              onPress={()=>navigation.navigate('Device')}>
                </Icon.Button>
            )
        }}/>
    </AddDeviceStack.Navigator>
);










const AppNavigation = () =>{

    const initialLoginState={
        isLoading:true,
        userName:null,
        userToken:null,
       
     
      };
    
      const [tokenState,setTokenState] =React.useState(null)
      
      console.log('appjs token',tokenState)
     const loginReducer=(prevState,action)=>{
      
       switch(action.type){
         case 'RETRIVE_TOKEN':
           return{
             ...prevState,
             userToken:action.token,
             isLoading:false,
           };
           case 'LOGIN':
           return{
             ...prevState,
             userName:action.id,
             userToken:action.token,
             isLoading:false
           };
           case 'LOGOUT':
           return{
             ...prevState,
             userName:null,
             userToken:null,
             isLoading:false
           };
           case 'REGISTER':
           return{
             ...prevState,
             userName:action.id,
             userToken:action.token,
             isLoading:false
    
           };
       }
    
     };
     const[loginState,dispatch]=React.useReducer(loginReducer,initialLoginState)
     
      const authContext=React.useMemo(()=>( 
        
        {
        
        signIn:async(condition,token)=>{
          
          // setUserToken('false');
          // setIsLoading(false);
          setTokenState(token)
          
          let userToken;
          userToken=null;
        //  for(i;i<10;i++){
        //    if(userName===data1[i].id){
             
        //      break;
        //    }
        //    else continue;
        //  }
          //  console.log('user name',data1[0].id)
          //  console.log('pass',data1[0].releaseYear)
          if(condition==true){
            
            try {
              userToken='fksjf';
              await AsyncStorage.setItem('userToken', userToken);
             
            } catch (e) {
              console.log(e);
            }
          }
          console.log('user token',userToken);
          dispatch({type:'LOGIN', token: userToken});
        },
        signOut:async()=>{
          
          // setUserToken(null);
          // setIsLoading(false);
          try {
            await AsyncStorage.removeItem('userToken');
          } catch (e) {
            console.log(e);
          }
          dispatch({type:'LOGOUT'});
        },
        signUp:()=>{
          //setUserToken('fksjf');
          // setIsLoading(false);
        }
      }),[]);
      React.useEffect(() => {
        setTimeout(async() =>{
          // setIsLoading(false);
          let userToken;
          userToken=null;
          try {
           userToken= await AsyncStorage.getItem('userToken')
          } catch (e) {
            console.log(e);
          }
          console.log('user token',userToken);
          dispatch({type:'REGISTER', token:userToken});
        },1000);
        
      }, [])

      if (loginState.isLoading){
        return(
          
          <View style={{flex: 1,justifyContent: 'center',alignItems:'center'}}>
            <ActivityIndicator size="large"/>
          </View>
        )
      }

    return(
        <AuthContext.Provider value={authContext}>
        <NavigationContainer>
        {loginState.userToken !== null ?(
           
                <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
                <Drawer.Screen name="Home" component={MainTabScreen} />
                <Drawer.Screen name="Profile" component={ProfileStackScreen} />

                {/*<Drawer.Screen name="Details" component={DetailsStackScreen} />*/}
                <Drawer.Screen name="About" component={AboutStackScreen} />
                <Drawer.Screen name="Contact" component={ContactStackScreen} />

                <Drawer.Screen name="Previous-Location" component={PreviousLocationStackScreen} />
                <Drawer.Screen name="Previous-path" component={PreviousPathStackScreen} />

                    <Drawer.Screen name="Daily-running-report" component={DailyRunningReportStackScreen} />
                    <Drawer.Screen name="Weekly-running-report" component={WeeklyRunningReportStackScreen} />
                    <Drawer.Screen name="Monthly-running-report" component={MonthlyRunningReportStackScreen} />

                    <Drawer.Screen name="View-device" component={ViewDeviceStackScreen} />
                    <Drawer.Screen name="Add-device" component={AddDeviceStackScreen} />
                
            </Drawer.Navigator>):<SignInScreen/>}
        </NavigationContainer>
        </AuthContext.Provider>
    );
}

export default AppNavigation;
