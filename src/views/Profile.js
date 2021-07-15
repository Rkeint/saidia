import React from "react";
import { TouchableOpacity, View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Head } from "../components/TitleBar";
import { Text } from "react-native-paper";
import { human } from "react-native-typography";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";

const Profile = () => {
	const navigation = useNavigation();

	const back = () => {
		navigation.navigate("Home");
	};

	const aboutus = () => {
		navigation.navigate("AboutUs");
	};

	const policy = () => {
		navigation.navigate("Policy");
	};

	const contactus = () => {
		navigation.navigate("ContactUs");
	};

	return (
		<ScrollView>
			<Head
				head={"MY PROFILE"}
				icon={"chevron-left"}
				touch={back}
				rProp={"Edit"}
			/>
			<View>
				<PurplebgTitle head={"YOUR PAYMENT METHODS"} />
				<Details
					head={"Add payment information"}
					icoR={"chevron-right"}
				/>
			</View>

			<View>
				<PurplebgTitle head={"DONATION INFORMATION"} />
				<Details
					head={"History and receipts"}
					icoR={"chevron-right"}
					icoL={"point-of-sale"}
				/>
			</View>

			<View>
				<PurplebgTitle head={"PERSONAL INFORMATION"} />
				<Details head={"Country"} icoR={"chevron-down"} />
				<Details head={"Currency"} icoR={"chevron-down"} />
				<Details head={"Language"} icoR={"chevron-down"} />
			</View>

			<View>
				<PurplebgTitle head={"ADDITIONAL INFORMATION"} />
				<Details head={"About Us"} icoR={"chevron-right"} nav={aboutus}/>
				<Details head={"Privacy Policy"} icoR={"chevron-right"} nav={policy} />
				<Details head={"Contact Us"} icoR={"chevron-right"} nav={contactus} />
				<Details head={"Rate Us"} icoR={"chevron-right"} />
			</View>
		</ScrollView>
	);
};

const PurplebgTitle = ({ head }) => {
	return (
		<View
			style={{
				backgroundColor: "#E8DAFE",
				padding: 20,
			}}
		>
			<Text style={[human.title3, { alignSelf: "center" }]}>{head}</Text>
		</View>
	);
};

export const Details = ({ head, icoL, icoR, nav }) => {
	return (
		<View style={{ paddingVertical: 10 }}>
			<TouchableOpacity onPress={nav}>
				<View style={{ flexDirection: "row", paddingHorizontal: 10 }}>
					<View
						style={{
							flexDirection: "row",
							flex: 3,
							justifyContent: "flex-start",
						}}
					>
						<View style={{ flex: icoL === undefined ? 0 : 1 }}>
							<MaterialIcon name={icoL} style={{}} size={30} />
						</View>
						<View
							style={{
								flex: 7,
								paddingLeft: icoL === undefined ? 10 : 0,
								justifyContent: "center",
							}}
						>
							<Text style={[human.title3]}>{head}</Text>
						</View>
					</View>
					<View
						style={{
							flex: 1,
							alignItems: "flex-end",
							justifyContent: "center",
						}}
					>
						<MaterialIcon name={icoR} style={{}} size={30} />
					</View>
				</View>
			</TouchableOpacity>
		</View>
	);
};

export { Profile };
