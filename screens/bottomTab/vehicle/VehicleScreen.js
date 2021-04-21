import React, {useState, useEffect} from 'react';
import {View, Text, Picker, Button} from "react-native";
import {Formik, Field, Form} from 'formik';
import {TextInput} from "react-native-paper";
import {ImageBackground} from "react-native";
import image from '../../../Images/aboutImage/image2.jpg';
import axios from "axios";
import VehicleDetailsScreen from "./vehicleDetails/VehicleDetailsScreen";


const ReportScreen = ({navigation}) => {


    const [vehicleNumbers, setVehicleNumbers] = useState([]);
    const [userId, setUserId] = useState('');
    const [dataLoad, setDataLoad] = useState(true);


    useEffect(() => {

        setUserId(JSON.stringify(global.userId))

        axios.get('http://104.236.96.123:8000/api/allvehiclenumbers/' + userId)
            .then((res) => {
                console.log(res.data);
                setVehicleNumbers(res.data.vehicles);
                setDataLoad(false);
            })
            .catch((err) => {
                console.log(err);
            })
    },[]);


    if (dataLoad === true) {
        return (
            <View>
                <Text>Data Loading</Text>
            </View>
        );
    } else {
        return (
            <View>
                <Formik
                    initialValues={{name: '', id: ''}}
                    onSubmit={(values, actions) => {
                        console.log(values.id);

                        navigation.navigate('Daily-running-report');
                        actions.resetForm();
                        // addReview(values);
                    }}
                >
                    {props => (
                        <View>
                            <Picker
                                placeholder='Vehicle Number'
                                onValueChange={props.handleChange('id')}
                                value={props.values.id}

                                // selectedValue={id}
                                style={{height: 50, width: 200}}
                                // onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                            >
                                <Picker.Item label="Select Vehicle Number" value={null}/>
                                {vehicleNumbers.map((vehicle,index) => (
                                    <Picker.Item label={vehicle} key={index} value={vehicle}/>
                                ))}
                            </Picker>
                            <Button
                                color='maroon'
                                title="Get Vehicle Details"
                                onPress={props.handleSubmit}

                            />
                        </View>
                    )}
                </Formik>
                {/*<VehicleDetailsScreen id={}/>*/}
            </View>
        );
    }

}


export default ReportScreen;
