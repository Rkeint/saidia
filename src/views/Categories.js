import React from "react";
import {
	ScrollView,
	View,
	ImageBackground,
	TouchableOpacity,
} from "react-native";
import { human } from "react-native-typography";
import { Text, Button } from "react-native-paper";
import BlankSpacer from "react-native-blank-spacer";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

const Categories = () => {
	const navigation = useNavigation();

	const back = () => {
		navigation.navigate("Home");
	};



	return (
		<View>
			<View style={{ flexDirection: "row" , padding: 10, borderBottomColor:"black", borderBottomWidth:1 }}>
				<View style={{ flex: 1 }}>
					<TouchableOpacity onPress={back}>
						<MaterialIcon
							name={"keyboard-backspace"}
							style={{}}
							size={30}
						/>
					</TouchableOpacity>
				</View>
				<View style={{ flex: 2 }}>
					<Text style={[human.title1]}>Categories</Text>
				</View>
			</View>

			<ScrollView style={{ paddingHorizontal: 20, paddingBottom:20 }}>

			<BlankSpacer height={20} />

			<View>
				<Cards
					head={"Street children"}
					dets={
						"Everyday more than a thousand street children go to sleep hungry. To help out click on Donate to help them out."
					}
					pic={require("../assets/hungry-kid1.png")}
				/>

				<BlankSpacer height={20} />

				<Cards
					head={"Orphanages"}
					dets={
						"Orphanages help children without parents get food and shelter. You can lend a hand with this good deed."
					}
					pic={require("../assets/orphanage.png")}
				/>

				<BlankSpacer height={20} />

				<Cards
					head={"Children Homes"}
					dets={
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
					}
					pic={require("../assets/home.png")}
				/>

				<BlankSpacer height={20} />

				<Cards
					head={"Refugee Camps"}
					dets={
						"Help people who have lost their homes by buying them a meal."
					}
					pic={require("../assets/refugee_camp.png")}
				/>
				<BlankSpacer height={80} />
			</View>
		</ScrollView>
		</View>
	);
};

const Cards = ({ head, dets, pic }) => {
	const navigation = useNavigation();

	const next = () => {
		navigation.navigate("Donations");
	}
	return (
		<View
			style={{
				flexDirection: "row",
				borderRadius: 10,
				padding: 5,
				backgroundColor: "#B795FF",
				paddingStart: 10,
				paddingTop: 10,
			}}
		>
			<View style={{ flex: 2 }}>
				<View>
					<Text style={[human.title2, { color: "white" }]}>
						{head}
					</Text>
				</View>

				<BlankSpacer height={10} />

				<View>
					<Text style={[human.body, { color: "white" }]}>{dets}</Text>
				</View>

				<BlankSpacer height={10} />

				<View style={{ paddingEnd: 80, paddingBottom: 1 }}>
					<TouchableOpacity onPress={next}>
						<View
							style={{
								borderRadius: 5,
								borderColor: "white",
								borderWidth: 1,
								alignItems: "center",
								paddingVertical: 8,
							}}
						>
							<Text
								style={[
									human.bodyObject,
									{ color: "white", fontFamily: "arial" },
								]}
							>
								Donate
							</Text>
						</View>
					</TouchableOpacity>
				</View>
			</View>

			<View style={{ flex: 1 }}>
				<View
					style={{
						alignItems: "flex-end",
						//backgroundColor: 'red',
					}}
				>
					<ImageBackground
						resizemode="contain"
						style={{ width: 100, height: 150, borderRadius: 10 }}
						source={pic}
					/>
				</View>
			</View>
		</View>
	);
};

export { Categories };
