import { View, Text, StyleSheet, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { router } from "expo-router";

const LEVELS = [
  {
    id: "beginner",
    title: "Beginner",
    subtitle: "Learning basics & simple phrases",
    icon: "🌱",
  },
  {
    id: "intermediate",
    title: "Intermediate",
    subtitle: "Can hold conversations, want to sound natural",
    icon: "⚡",
  },
  {
    id: "advanced",
    title: "Advanced",
    subtitle: "Fluent, polishing idioms & nuance",
    icon: "🎯",
  },
];

export default function LevelSelection() {
  const [selected, setSelected] = useState("intermediate");

  const handleContinue = () => {
    router.replace("/(tabs)/home");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>What is your{"\n"}English level?</Text>

      <Text style={styles.subtitle}>
        We will personalise your learning path
      </Text>

      <View style={styles.list}>
        {LEVELS.map((level) => {
          const active = selected === level.id;

          return (
            <Pressable
              key={level.id}
              onPress={() => setSelected(level.id)}
              style={[styles.card, active && styles.cardActive]}
            >
              <Text style={styles.icon}>{level.icon}</Text>

              <View style={styles.textWrap}>
                <Text style={styles.cardTitle}>{level.title}</Text>

                <Text style={styles.cardSubtitle}>{level.subtitle}</Text>
              </View>

              {active && <Text style={styles.check}>✓</Text>}
            </Pressable>
          );
        })}
      </View>

      <Pressable style={styles.continueBtn} onPress={handleContinue}>
        <Text style={styles.continueText}>Continue</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7FB",
    padding: 24,
  },

  title: {
    fontSize: 34,
    fontWeight: "800",
    marginTop: 20,
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 18,
    color: "#666",
    marginBottom: 40,
  },

  list: {
    gap: 16,
  },

  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 18,
    borderWidth: 2,
    borderColor: "#E7E6F6",
  },

  cardActive: {
    borderColor: "#5A54E6",
    backgroundColor: "#F1F0FF",
  },

  icon: {
    fontSize: 28,
    marginRight: 16,
  },

  textWrap: {
    flex: 1,
  },

  cardTitle: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 4,
  },

  cardSubtitle: {
    color: "#666",
  },

  check: {
    fontSize: 20,
    color: "#5A54E6",
    fontWeight: "800",
  },

  continueBtn: {
    marginTop: 40,
    backgroundColor: "#5A54E6",
    paddingVertical: 18,
    borderRadius: 18,
    alignItems: "center",
  },

  continueText: {
    color: "white",
    fontSize: 18,
    fontWeight: "700",
  },
});
