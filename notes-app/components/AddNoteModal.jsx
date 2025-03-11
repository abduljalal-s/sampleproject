import {
	Modal,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
const AddNotesModal = ({
	modalVisible,
	setModalVisible,
	newNote,
	setNewNote,
	addNote,
}) => {
	return (
		<Modal
			visible={modalVisible}
			animationType='slide'
			transparent
			onRequestClose={() => setModalVisible(false)}
		>
			<View style={style.modalOverlay}>
				<View style={style.modalContent}>
					<Text style={style.modalTitle}>Add a New Note</Text>
					<TextInput
						style={style.input}
						placeholder='Enter note...'
						placeholderTextColor={"#aaa"}
						value={newNote}
						onChangeText={setNewNote}
					/>
					<View style={style.modalButtons}>
						<TouchableOpacity
							style={style.cancelButton}
							onPress={() => setModalVisible(false)}
						>
							<Text style={style.cancleButtonText}>Cancel</Text>
						</TouchableOpacity>

						<TouchableOpacity style={style.saveButtton} onPress={addNote}>
							<Text style={style.saveButtonText}>Save</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</Modal>
	);
};
const style = StyleSheet.create({
	modalOverlay: {
		flex: 1,
		backgroundColor: "rgba(0,0,0,0.5)",
		justifyContent: "center",
		alignItems: "center",
	},
	modalContent: {
		backgroundColor: "#fff",
		padding: 20,
		borderRadius: 10,
		width: "80%",
	},
	modalTitle: {
		fontSize: 20,
		fontWeight: "bold",
		marginBottom: 10,
		textAlign: "center",
	},
	input: {
		borderWidth: 1,
		borderColor: "#ccc",
		borderRadius: 8,
		padding: 10,
		fontSize: 16,
		marginBottom: 15,
	},
	modalButtons: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	cancelButton: {
		backgroundColor: "#ccc",
		padding: 10,
		borderRadius: 5,
		flex: 1,
		marginRight: 10,
		alignItems: "center",
	},
	cancleButtonText: {
		fontSize: 16,
		color: "#333",
	},
	saveButtton: {
		backgroundColor: "#007bff",
		padding: 10,
		borderRadius: 5,
		flex: 1,
		alignItems: "center",
	},
	saveButtonText: {
		fontSize: 16,
		color: "black",
	},
});
export default AddNotesModal;
