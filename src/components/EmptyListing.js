import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const EmptyListing = () => {
	return (
		<View style={{ alignItems: "center"}}>
			<Image
				source={require("../../assets/me-picture.png")}
				style={{ height: 315, width: 315 }}
			/>
			
			<View
				style={{
					backgroundColor: "#ffffff",
					paddingVertical: 12,
					paddingHorizontal: 80,
					marginTop: 0,
					marginBottom: 20,
					shadowColor: "#F5F5F5",
					shadowOffset: { width: 0, height: 2 },
					shadowOpacity: 0.8,
					shadowRadius: 3

				}}
			>
				<Text style={{ color: "#000000", fontWeight: 'bold' }}>Elaco, Earl Dave R. - 3R8
				</Text>

			</View>
		</View>
	);
};

export default EmptyListing;

const styles = StyleSheet.create({});
