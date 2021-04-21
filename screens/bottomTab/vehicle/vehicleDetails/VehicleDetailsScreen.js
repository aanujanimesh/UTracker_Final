import React,{useEffect,useState} from 'react';
import {View, Text, StyleSheet, Picker} from "react-native";
import axios from "axios";
import {Button, TextInput} from "react-native-paper";


const VehicleDetailsScreen = ({route}) =>{


    const[vehicleNumber,setVehicleNumber] = useState('');
    const[type,setType] = useState('');
    const[status,setStatus] = useState('');
    const[unitPerKm,setUnitPerKm] = useState('');
    const[driverName,setDriverName] = useState('');
    const[ownerName,setOwnerName] = useState('');




    useEffect(()=>{

//=======set vehicle number========================
        axios.get('http://104.236.96.123:8000/api/getvehicledetails',{
            params:{
                vehicle_number:'ABC-5629'
            }
        })
            .then((res)=>{
                //console.log(res.data);
                setVehicleNumber(res.data.vehicle_number);
                setType(res.data.type1);
                setStatus(res.data.status1);
                setUnitPerKm(res.data.unit_per_km);
                setDriverName(res.data.driver_name);
                setOwnerName(res.data.owner_name);
            })
            .catch((err)=>{
                console.log(err);
            })
    },[]);



    return(
        <View>





            <TextInput
                label="Vehicle Number"
                value={vehicleNumber}
                onChangeText={(val) => setVehicleNumber(val)}
            />

            <TextInput
                label="Type"
                value={type}
                onChangeText={(val) => setType(val)}
            />


            <TextInput
                label="Unit Per Km"
                value={unitPerKm}
                onChangeText={(val) => setUnitPerKm(val)}
            />

            <TextInput
                label="Driver Name"
                value={driverName}
                onChangeText={(val) => setDriverName(val)}
            />

            <TextInput
                label="Owner Name"
                value={ownerName}
                onChangeText={(val) => setOwnerName(val)}
            />


            <Button
                style={styles.button}
                mode="contained"
                onPress={() => console.log('Pressed')}
            >Vehicle Details
            </Button>

            <Button
                mode="contained"
                onPress={() => console.log('Pressed')}
            >Save Details
            </Button>


        </View>

    );

}

export default VehicleDetailsScreen;


const styles =StyleSheet.create({
    button:{
        marginBottom:5
    }
});
