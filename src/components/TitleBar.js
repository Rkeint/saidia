import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Text } from "react-native-paper";
import { human } from "react-native-typography";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";

const Head = ({ head, icon, touch }) => {
	return (
		<View
			style={{
				flexDirection: "row",
				padding: 10,
				borderBottomColor: "black",
				borderBottomWidth: 1,
			}}
		>
			<View style={{ flex: 1 }}>
				<TouchableOpacity onPress={touch}>
					<MaterialIcon name={icon} style={{}} size={30} />
				</TouchableOpacity>
			</View>
			<View style={{ flex: 2 }}>
				<Text style={[human.title1]}>{head}</Text>
			</View>
		</View>
	);
};

export { Head };
