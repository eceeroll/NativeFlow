import { View, Text, StyleSheet, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Onboarding() {
  const handleStart = async () => {
    await AsyncStorage.setItem("hasOnboarded", "true");
    router.replace("/level-selection");
  };

  return (
    <LinearGradient
      colors={["#6C63FF", "#5A54E6", "#4F46E5"]}
      style={styles.container}
    >
      <SafeAreaView style={styles.safe}>
        <View style={styles.content}>
          <View style={styles.iconBox}>
            <Text style={styles.icon}>💬</Text>
          </View>

          <Text style={styles.title}>NativeFlow</Text>

          <Text style={styles.subtitle}>
            Learn English the way natives actually speak it — one expression at
            a time.
          </Text>
        </View>

        <View style={styles.buttons}>
          <Pressable style={styles.primaryBtn} onPress={handleStart}>
            <Text style={styles.primaryText}>Get Started</Text>
          </Pressable>

          <Pressable style={styles.secondaryBtn}>
            <Text style={styles.secondaryText}>
              Already have an account? Sign in
            </Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  safe: {
    flex: 1,
    justifyContent: "space-between",
    padding: 24,
  },

  content: {
    alignItems: "center",
    marginTop: 80,
  },

  iconBox: {
    width: 110,
    height: 110,
    borderRadius: 28,
    backgroundColor: "rgba(255,255,255,0.15)",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
  },

  icon: {
    fontSize: 40,
  },

  title: {
    fontSize: 42,
    fontWeight: "800",
    color: "white",
    marginBottom: 16,
  },

  subtitle: {
    textAlign: "center",
    fontSize: 18,
    color: "rgba(255,255,255,0.85)",
    lineHeight: 26,
    paddingHorizontal: 20,
  },

  buttons: {
    marginBottom: 30,
  },

  primaryBtn: {
    backgroundColor: "rgba(255,255,255,0.2)",
    borderRadius: 18,
    paddingVertical: 18,
    alignItems: "center",
    marginBottom: 12,
  },

  primaryText: {
    color: "white",
    fontSize: 18,
    fontWeight: "700",
  },

  secondaryBtn: {
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.25)",
    paddingVertical: 18,
    alignItems: "center",
  },

  secondaryText: {
    color: "white",
    fontSize: 16,
  },
});
