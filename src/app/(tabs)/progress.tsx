import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../../components/theme.js";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24 }}>Progress</Text>

      <Text style={{ marginTop: 10 }}>🔥 7 day streak</Text>
      <Text>47 expressions learned</Text>
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
