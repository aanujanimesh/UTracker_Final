// import _ from 'lodash';
import MapView, {Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import React, {useState, useRef, Component, useEffect} from 'react';
import {View, StyleSheet, Dimensions, Text, Button} from 'react-native';
import axios from "axios";


//need to implement vehicles live locations in home screen

const HomeScreen = ({navigation}) => {

    // const [markers, setMarkers] = useState([
    //     {lat: 6.9271, lng: 79.8612},
    //     {lat: 6.9783, lng: 79.7845},
    //     {lat: 6.8868, lng: 79.9187}
    //
    // ]);

    const [vehiclesLongLat,setVehiclesLongLat]=useState([]);
    const [status,setStatus] = useState(false);

    //=====================should set params=========
    const [company_id,setCompany_id] = useState('')


    useEffect(()=>{

        setCompany_id(JSON.stringify(global.companyId));

        axios.get('http://104.236.96.123:8000/api/getuniquedata', {
            params: {
                company_id: company_id
            }
        })
            .then((res) => {
                console.log(res.data);
                res.data["GPS_DATA"].map(value => {
                    // console.log(value.vehiclenum)
                    let coordinate = {
                        lat: value.latitude,
                        lng: value.longitude,
                        vehicleNum: value.vehiclenum
                    }
                    vehiclesLongLat.push(coordinate);
                });

                setStatus(true);

            })
            .catch((err) => {
                console.log(err);
            });
    });






    return (

        <View style={styles.container}>

            {status ?
                <MapView style={styles.map}
                         initialRegion={{
                             latitude: 7.8731,
                             longitude: 80.7718,
                             latitudeDelta: 7.0,
                             longitudeDelta: 7.0,
                         }}
                >
                    {vehiclesLongLat.map((mark, index) => (
                        <MapView.Marker
                            key={index}
                            coordinate={{latitude: mark.lat*1, longitude: mark.lng*1}}
                            // title={"title"}
                            // description={"description"}
                        />
                    ))}
                </MapView>
                :null}




        </View>
    );
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    }
});


export default HomeScreen;
