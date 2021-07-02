import React from "react";
import { View, Text, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Head } from "../components/TitleBar";

const AboutUs = () => {
    const navigation = useNavigation();
      const back = () => {
            navigation.navigate("Profile");
        };

        return(
            <ScrollView>
            <Head
				head={"About US"}
				icon={"chevron-left"}
				touch={back}
			/>
            <View>
                <Text>About us page</Text>
            </View>
            </ScrollView>
        );

};

export { AboutUs };
