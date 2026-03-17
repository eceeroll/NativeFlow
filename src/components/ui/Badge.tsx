// NativeFlow — Badge.tsx (UPDATED)

import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "./Text";
import { Colors } from "../theme/colors";
import { Radius } from "../theme/radius";
import { Shadows } from "../theme/shadows";
import { Spacing } from "../theme/spacing";

// ─────────────────────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────────────────────

type BadgeProps = {
  type?: keyof typeof typeConfig;
  label?: string;
  size?: "sm" | "md";
  style?: any;
};

type StatusBadgeProps = {
  status?: keyof typeof statusConfig;
  style?: any;
};

type XPBadgeProps = {
  xp?: number;
  style?: any;
};

type PillProps = {
  label?: string;
  active?: boolean;
  onPress?: () => void;
  style?: any;
};

// ─────────────────────────────────────────────────────────────
// MAIN BADGE
// ─────────────────────────────────────────────────────────────

const Badge: React.FC<BadgeProps> = ({
  type = "expression",
  label,
  size = "md",
  style,
}) => {
  const config = typeConfig[type] || typeConfig.expression;
  const displayLabel = label || config.label;

  return (
    <View
      style={[
        styles.badge,
        {
          backgroundColor: config.bg,
        },
        size === "sm" && styles.badgeSm,
        style,
      ]}
    >
      {config.emoji && (
        <Text
          variant="caption"
          style={[styles.emoji, size === "sm" && styles.emojiSm]}
        >
          {config.emoji}
        </Text>
      )}

      <Text
        variant="caption"
        style={[
          styles.label,
          { color: config.text },
          size === "sm" && styles.labelSm,
        ]}
      >
        {displayLabel}
      </Text>
    </View>
  );
};

// ─────────────────────────────────────────────────────────────
// STATUS BADGE
// ─────────────────────────────────────────────────────────────

export const StatusBadge: React.FC<StatusBadgeProps> = ({
  status = "new",
  style,
}) => {
  const config = statusConfig[status] || statusConfig.new;

  return (
    <View style={[styles.badge, { backgroundColor: config.bg }, style]}>
      {config.emoji && (
        <Text variant="caption" style={styles.emoji}>
          {config.emoji}
        </Text>
      )}

      <Text variant="caption" style={[styles.label, { color: config.text }]}>
        {config.label}
      </Text>
    </View>
  );
};

// ─────────────────────────────────────────────────────────────
// XP BADGE
// ─────────────────────────────────────────────────────────────

export const XPBadge: React.FC<XPBadgeProps> = ({ xp = 0, style }) => (
  <View style={[styles.xpBadge, style]}>
    <Text variant="caption" style={styles.xpLabel}>
      +{xp} XP
    </Text>
  </View>
);

// ─────────────────────────────────────────────────────────────
// PILL (FILTER / TAG)
// ─────────────────────────────────────────────────────────────

export const Pill: React.FC<PillProps> = ({
  label = "",
  active = false,
  onPress,
  style,
}) => {
  const Wrapper = onPress ? TouchableOpacity : View;

  return (
    <Wrapper
      onPress={onPress}
      activeOpacity={0.7}
      style={[styles.pill, active && styles.pillActive, style]}
    >
      <Text
        variant="caption"
        style={{
          color: active ? "#fff" : Colors.textSecondary,
        }}
      >
        {label}
      </Text>
    </Wrapper>
  );
};

// ─────────────────────────────────────────────────────────────
// CONFIG (THEME ALIGNED)
// ─────────────────────────────────────────────────────────────

const typeConfig = {
  idiom: {
    label: "Idiom",
    emoji: "🎭",
    bg: "#F3E8FF",
    text: Colors.primary,
  },
  phrasalVerb: {
    label: "Phrasal Verb",
    emoji: "⚡",
    bg: "#E0F2FE",
    text: Colors.secondary,
  },
  slang: {
    label: "Slang",
    emoji: "🔥",
    bg: "#FFE4E6",
    text: "#E11D48",
  },
  collocation: {
    label: "Collocation",
    emoji: "🔗",
    bg: "#ECFDF5",
    text: Colors.success,
  },
  expression: {
    label: "Expression",
    emoji: "💬",
    bg: "#EEF2FF",
    text: Colors.primary,
  },
};

const statusConfig = {
  new: {
    label: "New",
    emoji: "✨",
    bg: "#EEF2FF",
    text: Colors.primary,
  },
  completed: {
    label: "Done",
    emoji: "✅",
    bg: "#ECFDF5",
    text: Colors.success,
  },
  locked: {
    label: "Locked",
    emoji: "🔒",
    bg: "#F3F4F6",
    text: Colors.textSecondary,
  },
  popular: {
    label: "Popular",
    emoji: "🌟",
    bg: "#FEF3C7",
    text: "#D97706",
  },
  daily: {
    label: "Daily",
    emoji: "📅",
    bg: "#E0F2FE",
    text: Colors.secondary,
  },
};

// ─────────────────────────────────────────────────────────────
// STYLES (FIXED)
// ─────────────────────────────────────────────────────────────

const styles = StyleSheet.create({
  badge: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Spacing.sm,
    paddingVertical: Spacing.xs,
    borderRadius: Radius.full,
    alignSelf: "flex-start",
  },

  badgeSm: {
    paddingHorizontal: Spacing.xs,
    paddingVertical: 2,
  },

  emoji: {
    marginRight: 4,
  },

  emojiSm: {
    fontSize: 10,
  },

  label: {
    fontWeight: "600",
  },

  labelSm: {
    fontSize: 10,
  },

  // XP
  xpBadge: {
    backgroundColor: "#FEF3C7",
    paddingHorizontal: Spacing.sm,
    paddingVertical: Spacing.xs,
    borderRadius: Radius.full,
    ...Shadows.sm,
  },

  xpLabel: {
    color: "#D97706",
    fontWeight: "700",
  },

  // Pill
  pill: {
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    borderRadius: Radius.full,
    backgroundColor: "#F3F4F6",
    marginRight: Spacing.sm,
  },

  pillActive: {
    backgroundColor: Colors.primary,
  },
});

export default Badge;
