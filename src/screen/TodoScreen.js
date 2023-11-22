import {
	FlatList,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import React, { useState } from "react";
import { IconButton } from "react-native-paper";
import EmptyListing from "../components/EmptyListing";

console.log(Date.now().toString());

const TodoScreen = () => {
	const [todo, setTodo] = useState("");
	const [todoList, setTodoList] = useState([]);
	const [editedTodo, setEditedTodo] = useState(null);

	// Handle Add Todo
	const handleAddTodo = () => {


		if (todo === "") {
			return; // early return
		}

		setTodoList([...todoList, { id: Date.now().toString(), title: todo }]);
		setTodo("");
	};

	// Handle Delete
	const handleDeleteTodo = (id) => {
		const updatedTodoList = todoList.filter((todo) => todo.id !== id);

		setTodoList(updatedTodoList);
	};

	// Handle Edit todo

	const handleEditTodo = (todo) => {
		setEditedTodo(todo);
		setTodo(todo.title);
	};

	// Handle Update

	const handleUpdateTodo = () => {
		const updatedTodos = todoList.map((item) => {
			if (item.id === editedTodo.id) {
				return { ...item, title: todo };
			}

			return item;
		});
		setTodoList(updatedTodos);
		setEditedTodo(null);
		setTodo("");
	};

	// Render todo
	const renderTodos = ({ item, index }) => {
		return (
			<View

				style={{
					backgroundColor: "#9c712a",
					borderRadius: 6,
					paddingHorizontal: 6,
					paddingVertical: 8,
					marginBottom: 12,
					flexDirection: "row",
					alignItems: "center",
					shadowColor: "#000",
					shadowOffset: { width: 0, height: 2 },
					shadowOpacity: 0.8,
					shadowRadius: 3
				}}
			>
				<IconButton
					icon="pen"
					iconColor="#EAEEE9"
					onPress={() => handleEditTodo(item)}
				/>
				
				<Text
					style={{ color: "#EAEEE9", fontSize: 20, fontWeight: "800", flex: 1 }}
				>
					{item.title}
				</Text>

				<IconButton
					icon="trash-can"
					iconColor="#EAEEE9"
					onPress={() => handleDeleteTodo(item.id)}
				/>
			</View>
		);
	};
	return (
		<View style={{ marginHorizontal: 16, marginTop: 60 }}>
			<TextInput
				style={{
					borderWidth: 2,
					paddingVertical: 8,
					paddingHorizontal: 16,
					borderColor: "#000",
					borderRadius: 6
				}}
				placeholder="Tap to create some task"
				value={todo}
				onChangeText={(userText) => setTodo(userText)}
			/>
			{editedTodo ? (
				<TouchableOpacity
					style={{
						backgroundColor: "#34282C",
						borderRadius: 6,
						paddingVertical: 12,
						marginVertical: 34,
						alignItems: "center",
						shadowColor: "#000",
						shadowOffset: { width: 0, height: 2 },
						shadowOpacity: 0.8,
						shadowRadius: 3,
					}}
					onPress={() => handleUpdateTodo()}
				>
					<Text style={{ color: "#EAEEE9", fontWeight: "bold", fontSize: 20 }}>
						Save
					</Text>
				</TouchableOpacity>
			) : (
				<TouchableOpacity
					style={{
						backgroundColor: "#34282C",
						borderRadius: 6,
						alignItems: "center",
						paddingVertical: 12,
						marginVertical: 34,
						shadowColor: "#000",
						shadowOffset: { width: 0, height: 2 },
						shadowOpacity: 0.8,
						shadowRadius: 3,
					}}
					onPress={() => handleAddTodo()}
				>
					<Text style={{ color: "#EAEEE9", fontWeight: "bold", fontSize: 20 }}> ADD YOUR TASK </Text>
				</TouchableOpacity>
			)}

			{/* Render todo list */}

			<FlatList data={todoList} renderItem={renderTodos} />

			{todoList.length <= 0 && <EmptyListing />}
		</View>
	);
};

export default TodoScreen;
const styles = StyleSheet.create({});