import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, ScrollView, TouchableOpacity} from "react-native";
import {TextInput, Button} from 'react-native-paper';
import axios from "axios";
import {Alert} from "react-native-web";

//import {Form} from "react-native-paper";


const CompanyDetailsScreen = ({navigation}) => {


    const [companyName, setCompanyName] = useState('');
    const [companyLocation, setCompanyLocation] = useState('');
    const [companyAddress, setCompanyAddress] = useState('');
    ///user id should get from login user id
    const [userId, setUserId] = useState('');
    const [dataLoad,setDataLoad] = useState(true);



    useEffect(() => {

        setUserId(JSON.stringify(global.userId));

        axios.get('http://104.236.96.123:8000/api/getusercompanydetails/' + userId)
            .then((res) => {
                console.log(res.data);
                setCompanyName(res.data.details[0].company_name);
                setCompanyLocation(res.data.details[0].company_location);
                setCompanyAddress(res.data.details[0].company_address);
                setDataLoad(false);
            })
            .catch((err) => {
                //console.log(err);
                Alert.alert(err);
            })
        //https://run.mocky.io/v3/19f55f47-5b2f-41bf-a12d-5f31ccce17e7
    },[]);


    const submitHandler = (companyName) => {

        console.log(companyName);
    }


    // if(dataLoad===true){
    //     return (
    //         <View>
    //             <Text>Data is Loading</Text>
    //         </View>
    //     );
    // }else{
    return (
        <View>

            {/*<Text>This is PreviousPathScreen page</Text>*/}
            {/*<Form*/}
            {/*onSubmit={submitHandler}*/}
            {/*>*/}
            <TextInput
                label="Company Name"
                value={companyName}
                //onChangeText={(val) => setCompanyName(val)}
            />

            <TextInput
                label="Company Location"
                value={companyLocation}
                //onChangeText={(val) => setCompanyLocation(val)}
            />

            <TextInput
                label="Company Address"
                value={companyAddress}
                //onChangeText={(val) => setCompanyAddress(val)}
            />

            {/*<TouchableOpacity style={styles.commandButton}  onPress={() => submitHandler(companyName)}>*/}
            {/*    <Text style={styles.panelButtonTitle}>Submit</Text>*/}
            {/*</TouchableOpacity>*/}
            <Button
                style={styles.button}
                mode="contained"
                onPress={() => console.log('Pressed')}
            >Get Company Details
            </Button>

            <Button
                mode="contained"
                onPress={() => console.log('Pressed')}
            >Save Details
            </Button>

            {/*</Form>*/}

        </View>
    );
    // }




}

export default CompanyDetailsScreen;

const styles = StyleSheet.create({
    button: {
        marginBottom: 5
    }
});
