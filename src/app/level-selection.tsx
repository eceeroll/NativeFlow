import { View, Text, StyleSheet, Pressable } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { useState } from "react";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { LEVELS } from "../constants/data";

export default function LevelSelection() {
  const [selected, setSelected] = useState("intermediate");
  const insets = useSafeAreaInsets();

  const handleContinue = () => {
    router.push("/daily-goal"); // 🔥 replace değil push
  };

  return (
    <View style={styles.root}>
      <SafeAreaView style={styles.safe}>
        {/* 🔥 Back Button */}
        <Pressable
          onPress={() => {
            if (router.canGoBack()) {
              router.back();
            } else {
              router.push("/");
            }
          }}
          style={[styles.backBtn, { top: insets.top + 8 }]}
          hitSlop={12}
        >
          <Ionicons name="arrow-back" size={22} color="#1A1228" />
        </Pressable>

        {/* Content */}
        <View style={styles.content}>
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
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#F7F7FB",
  },

  safe: {
    flex: 1,
    paddingHorizontal: 24,
  },

  content: {
    flex: 1,
    justifyContent: "center", // 🔥 sadece content ortalı
  },

  backBtn: {
    position: "absolute",
    left: 24,
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
  },

  title: {
    fontSize: 34,
    fontWeight: "800",
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
