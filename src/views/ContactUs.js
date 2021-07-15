import React from "react";
import {Card} from 'react-native-shadow-cards';
import { View, Text, ScrollView, ImageBackground, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Head } from "../components/TitleBar";
import Icon from 'react-native-vector-icons/Entypo'
import { CardViewWithIcon } from 'react-native-simple-card-view'
import { human } from "react-native-typography";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";

const ContactUs = () => {
    const navigation = useNavigation();
      const back = () => {
            navigation.navigate("Profile");
        };

        
        Icon.loadFont();
        const image = { uri: "https://www.kindpng.com/picc/m/646-6462393_design-illustration-contact-us-hd-png-download.png" };

        return(
            <ScrollView>
            <Head
				head={"Contact information"}
				icon={"chevron-left"}
				touch={back}
			/>
            <View>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                    <Text style={styles.text}>About us</Text>
                </ImageBackground>
            </View>

            <View style={styles.container}>
                
                <Card style={{padding: 15, margin: 10}}>
                  <View style={{flexDirection: 'row'}}>
                    <Icon name='location' size={40} color='#777' />
                     <Text style={styles.info}>Location</Text></View>
                     <Text style={styles.info2}>Nairobi, Kenya</Text>
                     
                </Card>

                <Card style={{padding: 15, margin: 10}}>
                <View style={{flexDirection: 'row'}}>
                    <Icon name='old-phone' size={40} color='#777' />
                    <Text style={styles.info}>Contact number</Text></View>
                    <Text style={styles.info2}>+254 798 654 321</Text>
                     
                </Card>

                <Card style={{padding: 20, margin: 10}}>
                <View style={{flexDirection: 'row'}}>
                    <Icon name='mail-with-circle' size={40} color='#777' />
                    <Text style={styles.info}>E-mail address</Text></View>
                    <Text style={styles.info2}>saidia2021@gmail.com</Text>
                    
                </Card>
            </View>
            </ScrollView>
        );

};

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      flex: 1,
      justifyContent: "center"
    },
    text: {
      color: "transparent",
      fontSize: 28,
      lineHeight: 250,
      fontWeight: "bold",
      textAlign: "justify",
      backgroundColor: "transparent"
    },
    info: {
      color: "black",
      fontSize: 17,
      fontWeight: "bold",
      textAlign: "justify",
      paddingLeft: 20,
      
    },

    info2: {
      color: "black",
      fontSize: 16,
      fontWeight: "normal",
      marginTop: 20,
      textAlign: "justify",
      marginLeft: 58,
      marginTop: -15,
      
      
    }

  });

  


export { ContactUs };
