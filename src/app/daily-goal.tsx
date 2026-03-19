// app/daily-goal.tsx
import { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TargetIcon, BoltIcon, FlameIcon, CheckIcon } from "../icons";
import { GOALS } from "../constants/data";

const ICONS = {
  target: <TargetIcon />,
  bolt: <BoltIcon />,
  flame: <FlameIcon />,
};

// ─── Screen ───────────────────────────────────────────────────────────────────

export default function DailyGoal() {
  const [selected, setSelected] = useState(10);

  const handleContinue = async () => {
    await AsyncStorage.setItem("dailyGoal", String(selected));
    await AsyncStorage.setItem("hasOnboarded", "true");
    router.push("/save-progress" as any);
  };

  return (
    <View style={styles.root}>
      <SafeAreaView style={styles.safe}>
        {/* ── Header ── */}
        <View style={styles.header}>
          <Pressable
            onPress={() => router.back()}
            style={styles.backBtn}
            hitSlop={12}
          >
            <Text style={styles.backArrow}>‹</Text>
          </Pressable>
          {/* Progress bar — full (last step) */}
          <View style={styles.progressTrack}>
            <LinearGradient
              colors={["#6C63FF", "#A855F7"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.progressFill}
            />
          </View>
        </View>

        {/* ── Title ── */}
        <View style={styles.titleSection}>
          <Text style={styles.title}>Daily Goal</Text>
          <Text style={styles.subtitle}>
            How much do you want to learn daily?
          </Text>
        </View>

        {/* ── Options ── */}
        <View style={styles.optionList}>
          {GOALS.map((goal) => {
            const isSelected = selected === goal.value;
            return (
              <Pressable
                key={goal.value}
                onPress={() => setSelected(goal.value)}
                style={[
                  styles.optionCard,
                  isSelected && {
                    backgroundColor: goal.selectedBg,
                    borderColor: goal.selectedBorder,
                    borderWidth: 2,
                  },
                ]}
              >
                {/* Icon */}
                <LinearGradient
                  colors={goal.iconBg}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={styles.iconBox}
                >
                  {ICONS[goal.icon as keyof typeof ICONS]}
                </LinearGradient>

                {/* Text */}
                <View style={styles.optionText}>
                  <Text style={styles.optionLabel}>{goal.label}</Text>
                  <Text style={styles.optionDescription}>
                    {goal.description}
                  </Text>
                  <Text style={styles.optionHint}>{goal.hint}</Text>
                </View>

                {/* Checkmark */}
                {isSelected && (
                  <View
                    style={[styles.checkCircle, { backgroundColor: "#5B4FE9" }]}
                  >
                    <CheckIcon />
                  </View>
                )}
              </Pressable>
            );
          })}
        </View>

        {/* ── Note ── */}
        <Text style={styles.noteText}>
          You can always change this later in settings
        </Text>

        {/* ── CTA ── */}
        <View style={styles.bottom}>
          <Pressable onPress={handleContinue}>
            <LinearGradient
              colors={["#4F8EF7", "#7C3AED"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.continueBtn}
            >
              <Text style={styles.continueBtnText}>Continue</Text>
            </LinearGradient>
          </Pressable>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  safe: {
    flex: 1,
    paddingHorizontal: 24,
  },

  // Header
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 8,
    gap: 12,
  },
  backBtn: {
    width: 36,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
  },
  backArrow: {
    fontSize: 32,
    color: "#1A1228",
    lineHeight: 36,
    marginTop: -4,
  },
  progressTrack: {
    flex: 1,
    height: 5,
    backgroundColor: "#E8E6F9",
    borderRadius: 3,
    overflow: "hidden",
  },
  progressFill: {
    width: "100%",
    height: "100%",
    borderRadius: 3,
  },

  // Title
  titleSection: {
    alignItems: "center",
    marginTop: 40,
    marginBottom: 36,
  },
  title: {
    fontSize: 28,
    fontWeight: "800",
    color: "#1A1228",
    letterSpacing: -0.5,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 15,
    color: "#6B6880",
    textAlign: "center",
  },

  // Option list
  optionList: {
    gap: 14,
    flex: 1,
  },
  optionCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 16,
    borderWidth: 1.5,
    borderColor: "#E8E6F9",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
  },

  // Icon
  iconBox: {
    width: 64,
    height: 64,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 16,
  },

  // Text
  optionText: {
    flex: 1,
    gap: 2,
    paddingRight: 8,
  },
  optionLabel: {
    fontSize: 16,
    fontWeight: "800",
    color: "#1A1228",
    letterSpacing: -0.2,
  },
  optionDescription: {
    fontSize: 13,
    color: "#6B6880",
    fontWeight: "500",
  },
  optionHint: {
    fontSize: 12,
    color: "#9CA3AF",
    fontWeight: "400",
  },

  // Check circle
  checkCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 8,
    flexShrink: 0,
  },

  // Note
  noteText: {
    textAlign: "center",
    fontSize: 13,
    color: "#9CA3AF",
    marginTop: 20,
    marginBottom: 12,
  },

  // Bottom
  bottom: {
    paddingBottom: 24,
  },
  continueBtn: {
    borderRadius: 18,
    paddingVertical: 18,
    alignItems: "center",
  },
  continueBtnText: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "700",
  },
});
