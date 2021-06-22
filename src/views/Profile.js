import React from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Head } from "../components/TitleBar";

const Profile = () => {
	const navigation = useNavigation();

	const back = () => {
		navigation.navigate("Home");
	};
	return (
		<View>
			<Head
				head={"MY PROFILE"}
				icon={"keyboard-backspace"}
				touch={back}
			/>
		</View>
	);
};

export { Profile };
