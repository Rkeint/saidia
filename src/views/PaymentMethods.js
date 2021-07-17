import React, { useState } from "react";
import {
	ScrollView,
	Image,
	Dimensions,
	View,
	TouchableOpacity,
	Modal,
	ActivityIndicator,
} from "react-native";
import { Head } from "../components/TitleBar";
import { human } from "react-native-typography";
import { Text, Button } from "react-native-paper";
import BlankSpacer from "react-native-blank-spacer";
//import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcon from "react-native-vector-icons/Entypo";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { WebView } from "react-native-webview";
import Feather from "react-native-vector-icons/Feather";

const PaymentMethods = () => {
	const { width, height } = Dimensions.get("screen");

	const navigation = useNavigation();

	const back = () => {
		navigation.navigate("Categories");
	};

	const [showGateway, setShowGateway] = useState(false);
	const [prog, setProg] = useState(false);
	const [progClr, setProgClr] = useState("#000");

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
			<Options
				method={"Paypal"}
				icon="paypal"
				press={() => {
					setShowGateway(true);
				}}
			/>
			<Options method={"M-Pesa"} icon="mobile" />

			{showGateway ? (
				<Modal
					visible={showGateway}
					onDismiss={() => setShowGateway(false)}
					onRequestClose={() => setShowGateway(false)}
					animationType={"fade"}
					transparent
				>
					<View
						style={{
							position: "absolute",
							top: 0,
							left: 0,
							right: 0,
							bottom: 0,
						}}
					>
						<View
							style={{
								flexDirection: "row",
								alignItems: "center",
								backgroundColor: "#f9f9f9",
								zIndex: 25,
								elevation: 2,
							}}
						>
							<TouchableOpacity
								style={{ padding: 13 }}
								onPress={() => setShowGateway(false)}
							>
								<Feather name={"x"} size={24} />
							</TouchableOpacity>
							<Text
								style={{
									flex: 1,
									textAlign: "center",
									fontSize: 16,
									fontWeight: "bold",
									color: "#00457C",
								}}
							>
								PayPal GateWay
							</Text>
							<View style={{ padding: 13 }}>
								<ActivityIndicator
									size={24}
									color={"#00457C"}
								/>
							</View>
						</View>
						<WebView
							source={{
								uri: "https://saidia-ba480.web.app/paypal?",
							}}
							style={{ flex: 1 }}
						/>
					</View>
				</Modal>
			) : null}
		</ScrollView>
	);
};

const Options = ({ method, icon, press }) => {
	return (
		<TouchableOpacity onPress={press}>
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
