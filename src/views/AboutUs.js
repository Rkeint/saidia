import React from "react";
import { View, Text, ScrollView, ImageBackground, StyleSheet} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Head } from "../components/TitleBar";

const AboutUs = () => {
    
    const navigation = useNavigation();
      const back = () => {
            navigation.navigate("Profile");
        };

        const image = { uri: "https://cdn4.iconfinder.com/data/icons/illustrations-1/1200/72-512.png" };

        return(
            <ScrollView>
            <Head
				      icon={"chevron-left"}
				      touch={back}
			/>
            <View>
                <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                    <Text style={styles.text}>About us</Text>
                </ImageBackground>
               
           </View>
                
            <View>
                <Text style={styles.info}>Saidia is an initiative to work towards the 2nd Sustainable Development Goal(SDG): Zero hunger.
                                            It helps willing food donors from various parts of the world connect to the different categories
                                            of the society that are vulnerable to hunger in Kenya.</Text>

                <Text style={styles.info}>Every donation made goes towards helping a street child, orphan or refugee have a meal. Saidia
                                            focusses on increasing hunger awareness especially among people who are willing to donate
                                            but have no direction. </Text> 

                <Text style={styles.info}>We believe that any amount donated can help fight towards the global issue of hunger and reduce the number
                                            of people that die of hunger or starve everyday. </Text>                         
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
        lineHeight: 25,
        fontWeight: "normal",
        textAlign: "justify",
        margin: 20,
        marginTop: 10,
        marginBottom: 10
        
      }
  });

export { AboutUs };
