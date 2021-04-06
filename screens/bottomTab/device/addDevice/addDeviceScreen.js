import React from 'react';
import {View, Text, Picker, Button} from "react-native";
import {Avatar, Card, IconButton, TextInput} from "react-native-paper";
import {Formik} from "formik";

const AddDeviceScreen = ({navigation}) =>{
    return(
        <View>
            <Card>
                <Card.Title
                    title="Add Device"
                    subtitle="You can add device here"
                    left={(props) => <Avatar.Icon {...props} icon="folder" />}
                    right={(props) => <IconButton {...props} icon="more-vert" onPress={() => {}} />}
                />

                <Formik
                    initialValues={{ name: '',type:''}}
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
                                placeholder='Device Id'
                                onChangeText={props.handleChange('name')}
                                value={props.values.name}
                            />

                            <Picker
                                placeholder='Vehicle Type'
                                onValueChange={props.handleChange('type')}
                                value={props.values.type}

                                // selectedValue={id}
                                style={{ height: 50, width: 200 }}
                                // onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                            >
                                <Picker.Item label="2" value="java" />
                                <Picker.Item label="Van" value="van" />
                                <Picker.Item label="Car" value="car" />
                                <Picker.Item label="Bus" value="Bus" />
                            </Picker>


                            <Button color='maroon' title="Submit" onPress={props.handleSubmit} />
                        </View>
                    )}
                </Formik>

            </Card>
        </View>
    );

}

export default AddDeviceScreen;
