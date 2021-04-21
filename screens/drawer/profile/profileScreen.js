import React, {useState, useEffect} from "react";
import {ImageBackground, StyleSheet, Text, View, Picker} from "react-native";
import axios from "axios";


import image from '../../../Images/aboutImage/image3.jpg';
import {Button, TextInput} from "react-native-paper";

const Profile = ({navigation, route}) => {



    //user id
    // const [userId, setUserId] = useState('');
    const [first_name, setFirst_name] = useState('');
    const [last_name, setLast_name] = useState('');
    const [nic, setNic] = useState('');
    const [contact_no, setContact_no] = useState('');
    const [email, setEmail] = useState('');
    const [dataLoad, setDataLoad] = useState(true);

    let userId=route.params.name;
    console.log("profileId", userId)


    useEffect(() => {
        axios.get('http://104.236.96.123:8000/api/getuserdetails/' + userId)
            .then((res) => {
                console.log(res.data);
                setFirst_name(res.data.user[0].first_name);
                setLast_name(res.data.user[0].last_name);
                setNic(res.data.user[0].nic);
                setContact_no(res.data.user[0].contact_no);
                setEmail(res.data.user[0].email);
                setDataLoad(false);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);


    // if(dataLoad===true){
    //     return (
    //         <View>
    //             <Text>Data is Loading</Text>
    //         </View>
    //     );
    // }else{
    return (
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.image}>


                <View>

                    {/*<Text>This is PreviousPathScreen page</Text>*/}
                    {/*<Form*/}
                    {/*onSubmit={submitHandler}*/}
                    {/*>*/}
                    <TextInput
                        label="First Name"
                        value={first_name}
                        //onChangeText={(val) => setCompanyName(val)}
                    />

                    <TextInput
                        label="Last Name"
                        value={last_name}
                        //onChangeText={(val) => setCompanyLocation(val)}
                    />

                    <TextInput
                        label="NIC"
                        value={nic}
                        //onChangeText={(val) => setCompanyAddress(val)}
                    />


                    <TextInput
                        label="Contact Number"
                        value={contact_no}
                        //onChangeText={(val) => setCompanyAddress(val)}
                    />

                    <TextInput
                        label="EMAIL"
                        value={email}
                        //onChangeText={(val) => setCompanyAddress(val)}
                    />


                    {/*<TouchableOpacity style={styles.commandButton}  onPress={() => submitHandler(companyName)}>*/}
                    {/*    <Text style={styles.panelButtonTitle}>Submit</Text>*/}
                    {/*</TouchableOpacity>*/}
                    <Button
                        style={styles.button}
                        mode="contained"
                        onPress={() => console.log('Pressed')}
                    >View Your Profile Details
                    </Button>

                    {/*<Button*/}
                    {/*    mode="contained"*/}
                    {/*    onPress={() => console.log('Pressed')}*/}
                    {/*>Save Details*/}
                    {/*</Button>*/}

                    {/*</Form>*/}

                </View>


            </ImageBackground>
        </View>

    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    text: {
        color: "lightseagreen",
        fontSize: 42,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "transparent"
    }
});

export default Profile;
