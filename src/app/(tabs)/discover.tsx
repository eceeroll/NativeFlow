import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../../components/theme.js";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 28 }}>Break the ice</Text>
      <Text style={{ marginTop: 10 }}>Start a conversation</Text>
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
