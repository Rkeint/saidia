import React from "react";
import {
	ScrollView,
	View,
	ImageBackground,
	TouchableOpacity,
	Dimensions,
	Image,
} from "react-native";
import { human } from "react-native-typography";
import { Text, Button } from "react-native-paper";
import BlankSpacer from "react-native-blank-spacer";
import { useNavigation } from "@react-navigation/native";

const Donations = () => {
	const { width, height } = Dimensions.get("screen");

	const navigation = useNavigation();

	const nav = () => {
		navigation.navigate("PaymentMethods");
	};

	return (
		<View>
			<View
				style={{
					backgroundColor: "#B795FF",
					paddingBottom: 50,
					borderBottomEndRadius: 1000,
					borderBottomStartRadius: 1000,
				}}
			>
				<View
					style={{
						backgroundColor: "#E8DAFE",
						paddingVertical: 200,
						borderBottomEndRadius: 1000,
						borderBottomStartRadius: 1000,
						alignItems: "center",
					}}
				>
					<View style={{ paddingHorizontal: 10 }}>
						<Text
							style={[
								human.title2,
								{ alignSelf: "center", textAlign: "center" },
							]}
						>
							As little as $1 USD can help feed a hungry child in
							Kenya
						</Text>
					</View>
				</View>
			</View>

			<BlankSpacer height={30} />

			<View style={{ alignItems: "center" }}>
				<Text style={[human.title3]}>Help feed street children</Text>
			</View>

			<BlankSpacer height={30} />

			<View style={{ alignItems: "center" }}>
				<TouchableOpacity onPress={nav}>
					<View
						style={{
							borderRadius: 10,
							padding: 10,
							backgroundColor: "#B795FF",
						}}
					>
						<Text style={[human.body, { color: "white" }]}>
							Choose a payment method
						</Text>
					</View>
				</TouchableOpacity>
			</View>

			<BlankSpacer height={30} />

			<View
				style={{
					alignSelf: "center",
					position: "absolute",
					marginTop: height - 100,
				}}
			>
				<TouchableOpacity>
					<View>
						<Text style={[human.body, { color: "grey" }]}>
							How is my contribution used?
						</Text>
					</View>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export { Donations };
