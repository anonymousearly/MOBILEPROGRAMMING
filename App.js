
import { StyleSheet, View, SafeAreaView } from "react-native";
import TodoScreen from "./src/screen/TodoScreen";

export default function App() {
	return (
		<SafeAreaView >
			<View style={{
					backgroundColor: "#ffffff",
				}} >
					
				<TodoScreen />
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({  });
