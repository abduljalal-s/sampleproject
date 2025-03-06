import { Link } from "expo-router";
import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../styles/auth.styles";


export default function Index() {
  return (
    <View style={styles.container}>
      <Link href={"/notifications"}> visit notification screen
      </Link>



    </View>
  );
}
