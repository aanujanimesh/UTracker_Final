import _ from 'lodash';
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import React, { useState, useRef } from 'react';
import {View, StyleSheet, Dimensions, Text,Button} from 'react-native';


//need to implement vehicles live locations in home screen

const HomeScreen=({navigation})=> {



        const API_KEY = 'AIzaSyDpv6eCg72bvXFAtKzEO_fpJ1Rgy1-MTb0';
        const { width, height } = Dimensions.get('window');
        const mapView = useRef();
        const [coordinates, setCoordinates] = useState([
            {
                latitude: 37.3317876,
                longitude: -122.0054812,
            },
            {
                latitude: 37.771707,
                longitude: -122.4053769
            },
        ]);




    return (
        <View>
            <Text>This is home</Text>
        </View>
        // <View style={styles.container}>
        //     <Text style={styles.text}>This is Home screen</Text>
        //     <Text>Home Screen</Text>
        //     <Button title="Go to details screen" onPress={()=> navigation.navigate('Details')}/>
        //     <MapView
        //         style={{flex: 1, width: '100%'}}
        //         ref={mapView}>
        //         {coordinates.map((coordinate, index) =><MapView.Marker key={`coordinate_${index}`} coordinate={coordinate} /> )}
        //         <MapViewDirections
        //             apikey={API_KEY}
        //             origin={coordinates[0]}
        //             waypoints={coordinates}
        //             destination={coordinates[coordinates.length - 1]}
        //             strokeWidth={3}
        //             strokeColor="hotpink"
        //             optimizeWaypoints
        //             onStart={(params) => {
        //                 console.log(`Started routing between "${params.origin}" and "${params.destination}"`);
        //             }}
        //             onReady={result => {
        //                 console.log(`routing complete, distance is: ${result.distance}`);
        //                 mapView.current.fitToCoordinates(result.coordinates, {
        //                     edgePadding: {
        //                         right: (width / 20),
        //                         bottom: (height / 20),
        //                         left: (width / 20),
        //                         top: (height / 20),
        //                     }
        //                 });
        //             }}
        //             onError={(errorMessage) => {
        //                 console.log(`GOT AN ERROR: ${errorMessage}`);
        //             }}
        //         />
        //     </MapView>
        //
        //
        // </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text:{
        fontSize:30,
    }
});



// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'flex-start',
//         alignItems: 'stretch',
//     },
// });



export default HomeScreen;

