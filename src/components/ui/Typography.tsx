// A complete text system: Display, Heading, Body, Label, Caption

import React from "react";
import { Text, StyleSheet, TextStyle, StyleProp } from "react-native";
import { Colors } from "../theme/colors";

type NFTextProps = {
  style?: StyleProp<TextStyle>;
  children?: React.ReactNode;
  numberOfLines?: number;
  [key: string]: any;
};

const NFText: React.FC<NFTextProps> = ({
  style,
  children,
  numberOfLines,
  ...props
}) => (
  <Text numberOfLines={numberOfLines} style={[styles.base, style]} {...props}>
    {children}
  </Text>
);

// ─── Display ────────────────────────────────────────────────────────────────
// For hero headings, splash screens, large numbers

type DisplayProps = {
  size?: "sm" | "lg";
  color?: string;
  style?: StyleProp<TextStyle>;
  children?: React.ReactNode;
  [key: string]: any;
};

export const Display: React.FC<DisplayProps> = ({
  size = "lg",
  color,
  style,
  children,
  ...props
}) => (
  <NFText
    style={[
      styles.display,
      size === "sm" && styles.displaySm,
      size === "lg" && styles.displayLg,
      color && { color },
      style,
    ]}
    {...props}
  >
    {children}
  </NFText>
);

// ─── Heading ────────────────────────────────────────────────────────────────
// H1–H4 for screen titles, section labels

type HeadingProps = {
  level?: 1 | 2 | 3 | 4;
  color?: string;
  style?: StyleProp<TextStyle>;
  children?: React.ReactNode;
  [key: string]: any;
};

export const Heading: React.FC<HeadingProps> = ({
  level = 1,
  color,
  style,
  children,
  ...props
}) => (
  <NFText
    style={[
      styles.heading,
      level === 1 && styles.h1,
      level === 2 && styles.h2,
      level === 3 && styles.h3,
      level === 4 && styles.h4,
      color && { color },
      style,
    ]}
    {...props}
  >
    {children}
  </NFText>
);

// ─── Body ────────────────────────────────────────────────────────────────────
// Regular reading text, descriptions

type BodyProps = {
  size?: "sm" | "md" | "lg";
  weight?: "regular" | "bold" | "semibold";
  color?: string;
  muted?: boolean;
  style?: StyleProp<TextStyle>;
  children?: React.ReactNode;
  [key: string]: any;
};

export const Body: React.FC<BodyProps> = ({
  size = "md",
  weight = "regular",
  color,
  muted,
  style,
  children,
  ...props
}) => (
  <NFText
    style={[
      styles.body,
      size === "sm" && styles.bodySm,
      size === "md" && styles.bodyMd,
      size === "lg" && styles.bodyLg,
      weight === "bold" && styles.bold,
      weight === "semibold" && styles.semibold,
      muted && styles.muted,
      color && { color },
      style,
    ]}
    {...props}
  >
    {children}
  </NFText>
);

// ─── Label ────────────────────────────────────────────────────────────────────
// Button labels, form labels, nav items — always semibold

type LabelProps = {
  size?: "sm" | "md" | "lg";
  color?: string;
  uppercase?: boolean;
  style?: StyleProp<TextStyle>;
  children?: React.ReactNode;
  [key: string]: any;
};

export const Label: React.FC<LabelProps> = ({
  size = "md",
  color,
  uppercase,
  style,
  children,
  ...props
}) => (
  <NFText
    style={[
      styles.label,
      size === "sm" && styles.labelSm,
      size === "md" && styles.labelMd,
      size === "lg" && styles.labelLg,
      uppercase && styles.uppercase,
      color && { color },
      style,
    ]}
    {...props}
  >
    {uppercase ? String(children).toUpperCase() : children}
  </NFText>
);

// ─── Caption ────────────────────────────────────────────────────────────────
// Tiny helper text, timestamps, metadata

type CaptionProps = {
  color?: string;
  muted?: boolean;
  style?: StyleProp<TextStyle>;
  children?: React.ReactNode;
  [key: string]: any;
};

export const Caption: React.FC<CaptionProps> = ({
  color,
  muted = true,
  style,
  children,
  ...props
}) => (
  <NFText
    style={[styles.caption, muted && styles.muted, color && { color }, style]}
    {...props}
  >
    {children}
  </NFText>
);

// ─── Highlight ────────────────────────────────────────────────────────────────
// Inline colored text, e.g. inside Body for expression emphasis

type HighlightProps = {
  color?: string;
  style?: StyleProp<TextStyle>;
  children?: React.ReactNode;
  [key: string]: any;
};

export const Highlight: React.FC<HighlightProps> = ({
  color = Colors.primary,
  style,
  children,
  ...props
}) => (
  <Text style={[styles.highlight, { color }, style]} {...props}>
    {children}
  </Text>
);

// ─── Styles ──────────────────────────────────────────────────────────────────

const styles = StyleSheet.create({
  base: {
    color: Colors.textPrimary,
    includeFontPadding: false,
    textAlignVertical: "center",
  },

  // Display
  display: {
    fontFamily: "Nunito-ExtraBold",
    color: Colors.textPrimary,
    letterSpacing: -1,
    lineHeight: 50,
  },
  displaySm: {
    fontSize: 30,
    lineHeight: 38,
  },
  displayLg: {
    fontSize: 48,
    lineHeight: 56,
  },

  // Headings
  heading: {
    fontFamily: "Nunito-Bold",
    color: Colors.textPrimary,
    letterSpacing: -0.3,
  },
  h1: { fontSize: 28, lineHeight: 36 },
  h2: { fontSize: 22, lineHeight: 30 },
  h3: { fontSize: 18, lineHeight: 26 },
  h4: { fontSize: 15, lineHeight: 22 },

  // Body
  body: {
    fontFamily: "Nunito-Regular",
    color: Colors.textPrimary,
    letterSpacing: 0,
  },
  bodySm: { fontSize: 13, lineHeight: 20 },
  bodyMd: { fontSize: 15, lineHeight: 24 },
  bodyLg: { fontSize: 17, lineHeight: 28 },

  // Labels
  label: {
    fontFamily: "Nunito-SemiBold",
    color: Colors.textPrimary,
  },
  labelSm: { fontSize: 12, lineHeight: 16, letterSpacing: 0.2 },
  labelMd: { fontSize: 14, lineHeight: 20, letterSpacing: 0.1 },
  labelLg: { fontSize: 16, lineHeight: 24, letterSpacing: 0 },

  // Caption
  caption: {
    fontFamily: "Nunito-Regular",
    fontSize: 11,
    lineHeight: 16,
    letterSpacing: 0.2,
    color: Colors.textTertiary,
  },

  // Modifiers
  bold: { fontFamily: "Nunito-Bold" },
  semibold: { fontFamily: "Nunito-SemiBold" },
  muted: { color: Colors.textSecondary },
  uppercase: { textTransform: "uppercase", letterSpacing: 1 },

  // Inline highlight
  highlight: {
    fontFamily: "Nunito-Bold",
  },
});
