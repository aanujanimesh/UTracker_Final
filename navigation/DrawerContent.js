import React from "react";
import { View, StyleSheet, Image } from "react-native";
import {
    useTheme,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch,
} from "react-native-paper";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";


import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function DrawerContent1(props) {


    const paperTheme = useTheme();

    return (
        <View style={{ flex: 2 }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>

                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            style={styles.homelabel}
                              icon={({ color, size }) => (
                                <Icon name="home-outline" color={"#777777"} size={30} />
                              )}
                            label="Home"
                            onPress={() => {
                                props.navigation.navigate("Home");
                            }}
                        />

                        <DrawerItem
                            style={styles.homelabel}
                              icon={({ color, size }) => (
                                <Icon name="account-outline" color={"#777777"} size={30} />
                              )}
                            label="Profile"
                            onPress={() => {
                                props.navigation.navigate("Profile");
                            }}
                        />

                        <DrawerItem
                            style={styles.homelabel}
                              icon={({ color, size }) => (
                                <Icon name="bookmark-outline" color={"#777777"} size={30} />
                              )}
                            label="Contact"
                            onPress={() => {
                                props.navigation.navigate("Contact");
                            }}
                        />

                        <DrawerItem
                            style={styles.homelabel}
                            icon={({ color, size }) => (
                                <Icon name="bookmark-outline" color={"#777777"} size={30} />
                            )}
                            label="About"
                            onPress={() => {
                                props.navigation.navigate("About");
                            }}
                        />




                        {/* <DrawerItem
              style={styles.homelabel}
            //   icon={({ color, size }) => (
            //     <Icon name="settings-outline" color={"#777777"} size={30} />
            //   )}
              label="        Payments"
              onPress={() => {
                props.navigation.navigate("Report");
              }}
            /> */}

                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    style={styles.bottombutton}
                    //   icon={({ color, size }) => (
                    //     <Icon name="exit-to-app" color="white" size={30} />
                    //   )}
                    label="Sign Out"
                    color="white"

                />
            </Drawer.Section>
        </View>
    );
}
export default DrawerContent1;
const styles = StyleSheet.create({
    drawerContent: {
        flex: 0.5,
    },
    bottombutton: {
        width: 198,
        height: 40,
        backgroundColor: "#174D36",
        borderRadius: 13,
    },
    homelabel: {
        width: 198,
        height: 40,
        borderColor: "#777777",
        borderWidth: 1,
        marginTop: 3,
        borderRadius: 29,
    },
    userInfoSection: {
        paddingLeft: 0,
        paddingTop: 0,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: "bold",
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: "row",
        alignItems: "center",
    },
    section: {
        flexDirection: "row",
        alignItems: "center",
        marginRight: 15,
    },
    paragraph: {
        fontWeight: "bold",
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: "#f4f4f4",
        borderTopWidth: 1,
    },
    preference: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
});
