import React from "react";
import {
	ScrollView,
	Image,
	Dimensions,
	View,
	TouchableOpacity,
} from "react-native";
import { Head } from "../components/TitleBar";
import { human } from "react-native-typography";
import { Text, Button } from "react-native-paper";
import BlankSpacer from "react-native-blank-spacer";
//import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcon from "react-native-vector-icons/Entypo";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

const PaymentMethods = () => {
	const { width, height } = Dimensions.get("screen");

	const navigation = useNavigation();

	const back = () => {
		navigation.navigate("Categories");
	};
	return (
		<ScrollView>
			<Head icon="chevron-left" head="Payment Methods" touch={back} />
			<View
				style={{ borderBottomColor: "lightgrey", borderBottomWidth: 1 }}
			>
				<View>
					<Image
						style={{ width: width, height: height / 2.2 }}
						source={require("../assets/payment.jpg")}
						resizeMode="cover"
					/>
				</View>
				<View style={{ alignItems: "center", paddingVertical: 15 }}>
					<Text style={[human.title1]}>Add Payment Method</Text>
				</View>
			</View>
			<Options method={"Credit / Debit card"} icon="credit-card" />
			<Options method={"Paypal"} icon="paypal" />
			<Options method={"M-Pesa"} icon="mobile" />
		</ScrollView>
	);
};

const Options = ({ method, icon }) => {
	return (
		<TouchableOpacity>
			<View
				style={{ borderBottomColor: "lightgrey", borderBottomWidth: 1 }}
			>
				<View style={{ flexDirection: "row" }}>
					<View
						style={{
							flex: 1,
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<MaterialIcon name={icon} size={30} />
					</View>
					<View
						style={{
							alignItems: "flex-start",
							paddingVertical: 15,
							flex: 8,
						}}
					>
						<Text style={[human.title2]}>{method}</Text>
					</View>
				</View>
			</View>
		</TouchableOpacity>
	);
};

export { PaymentMethods };
