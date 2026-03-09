import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import Button from "../components/Button";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>NativeFlow</Text>
      <Button
        title="Go to Test"
        onPress={() => router.push("/test")}
        color="#621b00"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#4F46E5",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#4F46E5",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
});
