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
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
	const { width, height } = Dimensions.get("screen");

	const navigation = useNavigation();

	const profile = () => {
		navigation.navigate("Profile");
	};

	const donate = () => {
		navigation.navigate("Categories");
	};

	return (
		<View>
			<ScrollView>
				<ImageBackground
					source={require("../assets/zero-hunger.jpg")}
					style={{
						width: width,
						//height: height,
						//flex: 1,
						resizeMode: "contain",
						//justifyContent: 'center',
					}}
				>
					<View style={{ alignSelf: "flex-end", paddingEnd: 6 }}>
						<TouchableOpacity onPress={profile}>
							<MaterialIcon
								name={"account-circle"}
								style={{ color: "#E8DAFE" }}
								size={45}
							/>
						</TouchableOpacity>
						<BlankSpacer height={height / 2.7} />
					</View>

					<View>
						<View
							style={{
								//borderRadius: 30,
								backgroundColor: "#E8DAFE",
								paddingTop: 20,
								paddingBottom: 5,
								paddingHorizontal: 20,
								borderTopStartRadius: 30,
								borderTopEndRadius: 30,
							}}
						>
							<View style={{ paddingTop: 10 }}>
								<TouchableOpacity onPress={donate}>
									<View
										style={{
											borderRadius: 5,
											//borderColor: 'white',
											//borderWidth: 1,
											alignItems: "center",
											paddingVertical: 8,
											backgroundColor: "#B795FF",
											width: 170,
											height: 40,
											alignSelf: "flex-end",
										}}
									>
										<Text
											style={[
												human.title3,
												{ fontFamily: "arial" },
											]}
										>
											Donate Now
										</Text>
									</View>
								</TouchableOpacity>
							</View>

							<BlankSpacer height={20} />

							<View
								style={{
									flexDirection: "row",
									borderRadius: 20,
									backgroundColor: "#B795FF",
								}}
							>
								<View style={{ padding: 10, flex: 1 }}>
									<Image
										resizemode="contain"
										style={{
											width: 130,
											height: 150,
											borderRadius: 10,
										}}
										source={require("../assets/orphanage.png")}
									/>
								</View>

								<View
									style={{
										flex: 1.5,
										justifyContent: "center",
									}}
								>
									<View style={{}}>
										<Text style={[human.body]}>
											Change lives every month by donating
											any amount possible
										</Text>

										<BlankSpacer height={10} />

										<View alignItems={"center"}>
											<TouchableOpacity>
												<View
													style={{
														borderRadius: 5,
														//borderColor: 'white',
														//borderWidth: 1,
														alignItems: "center",
														paddingVertical: 8,
														backgroundColor:
															"white",
														alignSelf: "flex-end",
													}}
												>
													<Text
														style={[
															human.body,
															{
																fontFamily:
																	"arial",
																paddingHorizontal: 10,
															},
														]}
													>
														Learn More
													</Text>
												</View>
											</TouchableOpacity>
										</View>
									</View>
								</View>
							</View>

							<BlankSpacer height={20} />

							<View>
								<Text style={[human.title3]}>What's new?</Text>
							</View>

							<BlankSpacer height={20} />

							<ScrollView horizontal={true}>
								<Cards
									head={"Families in Palestine"}
									dets={
										"Support the Palestinian families and children"
									}
									pic={require("../assets/orphanage.png")}
								/>

								<BlankSpacer width={10} />

								<Cards
									head={"Families in Palestine"}
									dets={
										"Support the Palestinian families and children"
									}
									pic={require("../assets/orphanage.png")}
								/>

								<BlankSpacer width={10} />

								<Cards
									head={"Families in Palestine"}
									dets={
										"Support the Palestinian families and children"
									}
									pic={require("../assets/orphanage.png")}
								/>
							</ScrollView>
						</View>

						{/* <BlankSpacer height={10} /> */}
					</View>
				</ImageBackground>
			</ScrollView>
		</View>
	);
};

const Cards = ({ head, dets, pic }) => {
	const { width, height } = Dimensions.get("screen");

	return (
		<View
			style={{
				//flexDirection: "row",

				alignItems: "center",
				// justifyContent: "center",
				width: width - 40,
			}}
		>
			<View
				style={{
					flexDirection: "row",
					backgroundColor: "white",
					borderRadius: 5,
					paddingVertical: 10,
					paddingHorizontal: 5,
				}}
			>
				<View
					style={{
						flex: 1.5,
						justifyContent: "center",
					}}
				>
					<View>
						<Text style={[human.title3]}>{head}</Text>

						<Text style={[human.body, { color: "grey" }]}>
							{dets}
						</Text>
					</View>
				</View>

				<View
					style={{
						flex: 1,
						alignItems: "center",
					}}
				>
					<Image
						resizemode="contain"
						style={{
							width: 130,
							height: 120,
							//borderRadius: 10,
						}}
						source={pic}
					/>
				</View>
			</View>
		</View>
	);
};

export { Home };
