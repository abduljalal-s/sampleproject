import { StyleSheet, Text, View } from "react-native";

const NoteItem = ({ note }) => {
	return (
		<View style={style.noteItem}>
			<Text style={style.noteText}>{note.text}</Text>
		</View>
	);
};

const style = StyleSheet.create({
	noteItem: {
		flexDirection: "row",
		justifyContent: "space-between",
		padding: 15,
		borderRadius: 5,
		marginVertical: 5,
		backgroundColor: "#f5f5f5",
	},
	noteText: {
		fontSize: 18,
	},
});
export default NoteItem;
 