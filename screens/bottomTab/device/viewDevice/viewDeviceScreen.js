import React,{useEffect,useState} from 'react';
import {View, Text} from "react-native";
import axios from 'axios';
import {FlatList,StyleSheet} from "react-native";

const ViewDeviceScreen = ({navigation}) =>{


    const[devices,setDevices] = useState({});



useEffect(()=>{
    axios.get('https://run.mocky.io/v3/54c762e4-fb68-4b8c-88a8-fd0895d1fe91')
        .then(res=>{
            console.log(res.data);
            setDevices(res.data);
        })
        .catch(err=>{
        console.log(err);
        })
},[]);





        const devicelist= devices.length ? (
            devices.map(device=>{
            return(
                <View>
                    <Text key={device.id}>{device.name}</Text>
                </View>
            )

        })
        ) : (<Text>Data not yet</Text>);

        return(
            <View>
                {devicelist}
            </View>
        );

}

export default ViewDeviceScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
    },
    device: {
        flex: 1,
        marginHorizontal: 10,
        marginTop: 24,
        padding: 30,
        backgroundColor: 'pink',
        fontSize: 24,
    },
});
