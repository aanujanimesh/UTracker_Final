import React,{useState,Component} from 'react';
import {View, Text,StyleSheet,Picker} from 'react-native';
import {Alert} from "react-native";
import { TextInput,Card,Avatar,IconButton } from 'react-native-paper';
import {Button} from "react-native";
import {Formik,Field,Form} from 'formik';
import DatePicker from 'react-native-datepicker'
import axios from "axios";
import DateTimePicker from '@react-native-community/datetimepicker';

const PreviousLocationScreen = ({navigation}) =>{


    const [vehicleNumber, setVehicleNumber] = useState('');


    return (
        <View>
            <Card>
                <Card.Title
                    title="Card Title"
                    subtitle="Card Subtitle"
                    left={(props) => <Avatar.Icon {...props} icon="folder" />}
                    right={(props) => <IconButton {...props} icon="more-vert" onPress={() => {}} />}
                />
            <Formik
                initialValues={{ name: '',id:''}}
                onSubmit={(values, actions) => {
                    console.log(values);
                    actions.resetForm();
                    // addReview(values);
                }}
            >
                {props => (
                    <View>
                        <TextInput
                            // style={globalStyles.input}
                            placeholder='Enter Name'
                            onChangeText={props.handleChange('name')}
                            value={props.values.name}
                        />

                        <Picker
                            placeholder='Vehicle Number'
                            onValueChange={props.handleChange('id')}
                            value={props.values.id}

                            // selectedValue={id}
                            style={{ height: 50, width: 200 }}
                            // onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                        >
                            <Picker.Item label="2" value="java" />
                            <Picker.Item label="1" value="1" />
                            <Picker.Item label="KS-5647" value="KS-5647" />
                            <Picker.Item label="GH-5647" value="GH-5647" />
                        </Picker>


                        <Button color='maroon' title="Submit" onPress={props.handleSubmit} />
                    </View>
                )}
            </Formik>
            </Card>
        </View>
    );





}

export default PreviousLocationScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
    },
    input: {
        width: 200,
        height: 44,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
    },
});
