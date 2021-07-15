/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import type { Node } from "react";
import {
	SafeAreaView,
	ScrollView,
	StatusBar,
	StyleSheet,
	Text,
	useColorScheme,
	View,
} from "react-native";
// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';
import { Categories } from "./src/views/Categories";
import { Home } from "./src/views/Home";
import { Donations } from "./src/views/Donations";
import { Profile } from "./src/views/Profile";
import { PaymentMethods } from "./src/views/PaymentMethods";
import { Login } from "./src/views/Login";
import { AboutUs } from "./src/views/AboutUs";
import { Policy } from "./src/views/Policy";
import { ContactUs } from "./src/views/ContactUs";

const Stack = createStackNavigator();

const theme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		primary: "navy",
		accent: "green",
	},
};

const Section = ({ children, title }): Node => {
	const isDarkMode = useColorScheme() === "dark";

	return (
		<View style={styles.sectionContainer}>
			<Text
				style={[
					styles.sectionTitle,
					{
						color: isDarkMode ? Colors.white : Colors.black,
					},
				]}
			>
				{title}
			</Text>
			<Text
				style={[
					styles.sectionDescription,
					{
						color: isDarkMode ? Colors.light : Colors.dark,
					},
				]}
			>
				{children}
			</Text>
		</View>
	);
};

const App: () => Node = () => {
	return (
		<PaperProvider theme={theme}>
			<StatusBar hidden />
			<NavigationContainer>
				<Stack.Navigator
					screenOptions={{
						headerShown: false,
					}}
					initialRouteName="Home"
				>
					<Stack.Screen name="Categories" component={Categories} />
					<Stack.Screen name="Home" component={Home} />
					<Stack.Screen name="Donations" component={Donations} />
					<Stack.Screen name="Profile" component={Profile} />
					<Stack.Screen name="Login" component={Login} />
					<Stack.Screen
						name="PaymentMethods"
						component={PaymentMethods}
					/>
					<Stack.Screen name="AboutUs" component={AboutUs} />
					<Stack.Screen name="Policy" component={Policy} />
					<Stack.Screen name="ContactUs" component={ContactUs} />
				</Stack.Navigator>
			</NavigationContainer>
		</PaperProvider>
	);
};
export default App;
