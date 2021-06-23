import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Text } from "react-native-paper";
import { human } from "react-native-typography";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";

const Head = ({ head, icon, touch, rProp }) => {
	return (
		<View
			style={{
				flexDirection: "row",
				padding: 10,
				borderBottomColor: "lightgrey",
				borderBottomWidth: 1,
			}}
		>
			<View style={{ flex: 1, justifyContent: "center" }}>
				<TouchableOpacity onPress={touch}>
					<MaterialIcon name={icon} style={{}} size={30} />
				</TouchableOpacity>
			</View>
			<View
				style={{
					flex: 5,
					alignItems: "center",
					//backgroundColor: "red",
				}}
			>
				<Text style={[human.title1]}>{head}</Text>
			</View>

			<View
				style={{
					flex: 1,
					justifyContent: "center",
					alignItems: "flex-end",
				}}
			>
				<TouchableOpacity>
					<View>
						<Text style={[human.title3]}>{rProp}</Text>
					</View>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export { Head };
