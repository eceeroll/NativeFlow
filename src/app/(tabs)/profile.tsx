import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../../components/theme.js";

export default function HomeScreen() {
  return (
    <View style={styles.root}>
      <Text style={styles.label}>Profile</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
  label: { fontFamily: "Nunito-Bold", fontSize: 18, color: Colors.textPrimary },
});
