import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../../components/theme.js";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24 }}>Profile</Text>

      <Text style={{ marginTop: 10 }}>Name: Ece</Text>
      <Text>Level: Intermediate</Text>
      <Text>Expressions learned: 47</Text>
      <Text>🔥 Streak: 7 days</Text>
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
