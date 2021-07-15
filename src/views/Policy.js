import React from "react";
import { View, Text, ScrollView, ImageBackground, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Head } from "../components/TitleBar";

const Policy = () => {
    const navigation = useNavigation();
      const back = () => {
            navigation.navigate("Profile");
        };

        const image = { uri: "https://thumbs.dreamstime.com/b/business-contract-signing-corporate-document-agreement-checking-data-protection-terms-conditions-privacy-policy-legal-notice-183370865.jpg" };

        return(
            <ScrollView>
            <Head
				head={"Privacy Policy"}
				icon={"chevron-left"}
				touch={back}
			/>
            <View>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                    <Text style={styles.text}>privacy policy</Text>
                </ImageBackground>
            </View>

            <View>
                <Text style={styles.info}> How do we protect your personal information</Text>

                <Text style={styles.info2}> We maintain administrative and technical safeguards designed to protect the personal information
                                            we collect through our Services against accidental, unlawful or unauthorized destruction, loss, alteration, access, disclosure or use </Text> 
                <Text style={styles.info2}> We do not sell your personal information - such as name and contact information - to third parties to use for their own marketing purposes. </Text>                         
           
                <Text style={styles.info}> How we use your information</Text>

                <Text style={styles.info2}> 1. to ensure technical functionality of the service, develop new features and services and analyze your use of the service. </Text> 
                <Text style={styles.info2}> 2. to process your payement to prevent or detect fraud including fraudulent payments and fradulent use of the service. </Text>                         
                <Text style={styles.info2}> 3. to enable and promote the service and other relevent services or products, either within or outside the service, including features and content of the service 
                                            and products and services made available through the service. </Text>                         
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
      lineHeight: 200,
      fontWeight: "bold",
      textAlign: "justify",
      backgroundColor: "transparent"
    },
      info: {
        color: "black",
        fontSize: 19,
        lineHeight: 20,
        fontWeight: "bold",
        textAlign: "center",
        margin: 20,
        
        
      },
      info2: {
        color: "black",
        fontSize: 19,
        lineHeight: 20,
        fontWeight: "normal",
        textAlign: "justify",
        margin: 20,
        marginTop: 5,
        marginBottom: 5
      
        
      }
  });


export { Policy };
