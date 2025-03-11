// index.jsx
import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AddNotesModal from "../../components/AddNoteModal";
import NoteList from "../../components/NoteList";
import noteService from "../../services/noteService";



const NoteScreen = () => {
    const [notes, setNotes] = useState([ ]);
    const [modalVisible, setModalVisible] = useState(false);
    const [newNote, setNewNote] = useState("");
    const [loading, setLoading] =useState(true);
    const [error, setError] = useState(null);


    useEffect (() =>{
        fetchNotes();
    },[]);

    const fetchNotes = async () =>{
        setLoading(true);
        const response = await noteService.getNotes();

        if (response.error){
            setError(response.error);
            Alert.alert ('Error', response.error);
        }else {
            setNotes(response.data);
            setError(null);

        }
        setLoading(false); 
    };

    // add note
    const addNote = async () => {
        if (newNote.trim() === "") return;

        const response = await noteService.addNote(newNote)

if(response.error){
Alert.alert('Error',response.error);
}else {
    setNotes([...notes, response.data]);
}


        setNewNote("");
        setModalVisible(false);
    };

    return (
        <View style={styles.container}>
            <NoteList notes={notes} />

            <TouchableOpacity
                style={styles.addButton}
                onPress={() => setModalVisible(true)}
            >
                <Text style={styles.addButtonText}>+Add Note</Text>
            </TouchableOpacity>

            {/* Modal */}
            <AddNotesModal
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                newNote={newNote}
                setNewNote={setNewNote}
                addNote={addNote}
            />
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  noteItem: {
    flexDirection:'row',
    justifyContent:'space-between',
    padding: 15,
    borderRadius: 5,
    marginVertical: 5,
    backgroundColor:'#f5f5f5',
    },
  noteText: {
    fontSize: 18,
  },
addButton:{
  position: 'absolute',
  bottom:20,
  left:20,
  right:20,
  backgroundColor:"#007bff",
  padding:15,
  borderRadius:'center',
  alignItems:'center',
},
addButtonText: {
  color:'#fff',
  fontSize:18,
  fontWeight:'bold',
},
modalOverlay:{
  flex:1,
  backgroundColor:'rgba(0,0,0,0.5)',
  justifyContent:'center',
  alignItems:'center',
},
modalContent:{
  backgroundColor:'#fff',
  padding:20,
  borderRadius:10,
  width:'80%',

},
modalTitle:{
  fontSize:20,
  fontWeight:'bold',
  marginBottom:10,
  textAlign:'center',

},
input:{
  borderWidth:1,
  borderColor:'#ccc',
  borderRadius: 8,
  padding: 10,
  fontSize: 16,
  marginBottom: 15,

},
modalButtons: {
  flexDirection:'row',
  justifyContent:'space-between',
},
cancelButton:{
backgroundColor:'#ccc',
padding: 10,
borderRadius: 5,
flex: 1,
marginRight: 10,
alignItems: 'center',
},
cancleButtonText:{
  fontSize:16,
  color:'#333',
},
saveButtton:{
backgroundColor:'#007bff',
  padding: 10,
  borderRadius: 5,
  flex: 1,
  alignItems: "center",
},
saveButtonText:{
  fontSize:16,
  color:'black',
},
});

export default NoteScreen;