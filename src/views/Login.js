import React, { useState } from "react";
import {
	ScrollView,
	View,
	Image,
	Dimensions,
	TouchableOpacity,
} from "react-native";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { human } from "react-native-typography";
import { Text, TextInput } from "react-native-paper";
import { Head } from "../components/TitleBar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import BlankSpacer from "react-native-blank-spacer";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
	email: yup.string().email().required(),
});

const Login = () => {
	const { width, height } = Dimensions.get("screen");

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const [user, setUser] = useState("");

	const submit = () => {
		//setUser("verified");
		console.log(user);
		next();
	};

	const next = () => {
		user === ""
			? console.log("Not working")
			: navigation.navigate("PaymentMethods");
	};

	const navigation = useNavigation();

	const back = () => {
		navigation.navigate("Categories");
	};
	return (
		<ScrollView style={{ backgroundColor: "white" }}>
			<Head icon={"chevron-left"} head={"Register"} touch={back} />
			<View>
				<View style={{ alignItems: "center" }}>
					<Image
						style={{ width: width, height: height / 2.3 }}
						source={require("../assets/login.jpg")}
						resizeMode="cover"
					/>
				</View>

				<BlankSpacer height={20} />

				<View style={{ alignItems: "center" }}>
					<Text style={[human.title2, { color: "grey" }]}>
						Connect with
					</Text>
				</View>

				<BlankSpacer height={20} />

				<View
					style={{
						flexDirection: "row",
					}}
				>
					<View style={{ flex: 1, alignItems: "flex-end" }}>
						<TouchableOpacity>
							<MaterialIcon
								name={"facebook"}
								size={60}
								color={"darkblue"}
							/>
						</TouchableOpacity>
					</View>
					<View style={{ flex: 1, alignItems: "center" }}>
						<TouchableOpacity>
							<Image
								source={require("../assets/google_logo.png")}
								style={{ width: 60, height: 65 }}
								//color={"darkblue"}
							/>
						</TouchableOpacity>
					</View>
					<View style={{ flex: 1, alignItems: "flex-start" }}>
						<TouchableOpacity>
							<MaterialIcon
								name={"apple"}
								size={60}
								//color={"darkblue"}
							/>
						</TouchableOpacity>
					</View>
				</View>

				<BlankSpacer height={20} />

				<View style={{ alignItems: "center" }}>
					<Text style={[human.title2, { color: "grey" }]}>
						Or continue with email
					</Text>
				</View>

				<BlankSpacer height={20} />
				<View style={{ paddingHorizontal: 30 }}>
					<View>
						<Controller
							control={control}
							render={({
								field: { onChange, onBlur, value },
							}) => (
								<TextInput
									mode={"outlined"}
									keyboardType="email-address"
									label="Email Address"
									// onChange={}
									//value={value}
									onChangeText={(user) => {
										setUser(user);
									}}
									outlineColor={errors.email ? "red" : ""}
								/>
							)}
							name="email"
							rules={{ required: true }}
							defaultValue=""
						/>
					</View>

					<BlankSpacer height={20} />

					<View
						style={{
							paddingTop: 10,
							backgroundColor: "#E8DAFE",
							borderRadius: 5,
						}}
					>
						<TouchableOpacity onPress={submit}>
							<View
								style={{
									//borderColor: 'white',
									//borderWidth: 1,
									alignItems: "center",
									paddingVertical: 8,

									height: 40,
									alignSelf: "center",
								}}
							>
								<Text
									style={[
										human.title3,
										{ fontFamily: "arial" },
									]}
								>
									Verify
								</Text>
							</View>
						</TouchableOpacity>
					</View>
				</View>
			</View>
			<BlankSpacer height={20} />
		</ScrollView>
	);
};

export { Login };
