import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../../components/theme.js";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24 }}>Home</Text>

      <Text style={{ marginTop: 20 }}>Today's Pack: 0 / 5 expressions</Text>
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
