// app/daily-goal.tsx
import { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Svg, { Circle, Path, Polyline } from "react-native-svg";

// ─── Goal options (matching Figma: Easy / Medium / Hard) ─────────────────────

const GOALS = [
  {
    value: 5,
    label: "Easy",
    description: "5 expressions/day",
    hint: "Perfect for busy days",
    iconBg: ["#34D399", "#10B981"] as [string, string],
    selectedBorder: "#10B981",
    selectedBg: "#F0FDF4",
    icon: "target",
  },
  {
    value: 10,
    label: "Medium",
    description: "10 expressions/day",
    hint: "Balanced learning pace",
    iconBg: ["#60A5FA", "#3B82F6"] as [string, string],
    selectedBorder: "#5B4FE9",
    selectedBg: "#EEF0FF",
    icon: "bolt",
  },
  {
    value: 20,
    label: "Hard",
    description: "20 expressions/day",
    hint: "Challenge yourself",
    iconBg: ["#FB923C", "#EF4444"] as [string, string],
    selectedBorder: "#EF4444",
    selectedBg: "#FFF7ED",
    icon: "flame",
  },
];

// ─── Inline SVG icons ─────────────────────────────────────────────────────────

const TargetIcon = () => (
  <Svg width={32} height={32} viewBox="0 0 32 32" fill="none">
    <Circle
      cx="16"
      cy="16"
      r="12"
      stroke="white"
      strokeWidth="2.5"
      fill="none"
    />
    <Circle
      cx="16"
      cy="16"
      r="7"
      stroke="white"
      strokeWidth="2.5"
      fill="none"
    />
    <Circle cx="16" cy="16" r="2.5" fill="white" />
  </Svg>
);

const BoltIcon = () => (
  <Svg width={32} height={32} viewBox="0 0 32 32" fill="none">
    <Path
      d="M18 4L8 18H16L14 28L24 14H16L18 4Z"
      fill="white"
      strokeLinejoin="round"
    />
  </Svg>
);

const FlameIcon = () => (
  <Svg width={32} height={32} viewBox="0 0 32 32" fill="none">
    <Path
      d="M16 28C10.477 28 6 23.523 6 18C6 13 10 10 12 7C12 7 11 13 15 13C15 13 13 9 17 6C17 6 17 11 21 12C23 13 26 15.5 26 18C26 23.523 21.523 28 16 28Z"
      fill="white"
    />
    <Path
      d="M16 24C13.791 24 12 22.209 12 20C12 18 14 17 14 17C14 17 13.5 19 15.5 19C15.5 19 14.5 18 16 16.5C16 16.5 16 19 18 19C19 19.5 20 20.5 20 21C20 22.657 18.209 24 16 24Z"
      fill="rgba(255,255,255,0.4)"
    />
  </Svg>
);

const CheckIcon = () => (
  <Svg width={18} height={18} viewBox="0 0 18 18" fill="none">
    <Path
      d="M3.5 9L7.5 13L14.5 5"
      stroke="white"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

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
