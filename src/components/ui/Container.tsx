import React from "react";
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  StatusBar,
  ViewStyle,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../theme/colors";
import { Spacing } from "../theme/spacing";

// ─── Types ───────────────────────────────────────────────────────────────

interface ScreenProps {
  children: React.ReactNode;
  scrollable?: boolean;
  padded?: boolean;
  centered?: boolean;
  backgroundColor?: string;
  style?: ViewStyle;
  contentStyle?: ViewStyle;
}

// ─── Screen ──────────────────────────────────────────────────────────────

export const Screen: React.FC<ScreenProps> = ({
  children,
  scrollable = false,
  padded = true,
  centered = false,
  backgroundColor = Colors.background,
  style,
  contentStyle,
}) => {
  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor }, style]}>
      <StatusBar barStyle="dark-content" backgroundColor={backgroundColor} />

      {scrollable ? (
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={[
            padded && styles.scrollPadded,
            centered && styles.centered,
            contentStyle,
          ]}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          {children}
        </ScrollView>
      ) : (
        <View
          style={[
            styles.inner,
            padded && styles.padded,
            centered && styles.centered,
            contentStyle,
          ]}
        >
          {children}
        </View>
      )}
    </SafeAreaView>
  );
};

// ─── Keyboard Screen ─────────────────────────────────────────────────────

interface KeyboardScreenProps {
  children: React.ReactNode;
  padded?: boolean;
  backgroundColor?: string;
  style?: ViewStyle;
  contentStyle?: ViewStyle;
}

export const KeyboardScreen: React.FC<KeyboardScreenProps> = ({
  children,
  padded = true,
  backgroundColor = Colors.background,
  style,
  contentStyle,
}) => (
  <SafeAreaView style={[styles.safeArea, { backgroundColor }, style]}>
    <StatusBar barStyle="dark-content" backgroundColor={backgroundColor} />

    <KeyboardAvoidingView
      style={styles.flex}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={[
          padded && styles.scrollPadded,
          styles.flexGrow,
          contentStyle,
        ]}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {children}
      </ScrollView>
    </KeyboardAvoidingView>
  </SafeAreaView>
);

// ─── Section ─────────────────────────────────────────────────────────────

interface SectionProps {
  children: React.ReactNode;
  title?: string;
  action?: React.ReactNode;
  style?: ViewStyle;
}

export const Section: React.FC<SectionProps> = ({
  children,
  title,
  action,
  style,
}) => {
  const { Heading } = require("./Typography");

  return (
    <View style={[styles.section, style]}>
      {(title || action) && (
        <View style={styles.sectionHeader}>
          {title && <Heading level={3}>{title}</Heading>}
          {action}
        </View>
      )}
      {children}
    </View>
  );
};

// ─── Row ─────────────────────────────────────────────────────────────────

interface RowProps {
  children: React.ReactNode;
  align?: ViewStyle["alignItems"];
  justify?: ViewStyle["justifyContent"];
  gap?: number;
  style?: ViewStyle;
}

export const Row: React.FC<RowProps> = ({
  children,
  align = "center",
  justify = "flex-start",
  gap,
  style,
}) => (
  <View
    style={[
      styles.row,
      { alignItems: align, justifyContent: justify },
      gap ? { gap } : null,
      style,
    ]}
  >
    {children}
  </View>
);

// ─── Divider ─────────────────────────────────────────────────────────────

interface DividerProps {
  style?: ViewStyle;
  vertical?: boolean;
}

export const Divider: React.FC<DividerProps> = ({
  style,
  vertical = false,
}) => (
  <View
    style={[
      vertical ? styles.dividerVertical : styles.dividerHorizontal,
      style,
    ]}
  />
);

// ─── Spacer ──────────────────────────────────────────────────────────────

interface SpacerProps {
  size?: number;
}

type SpacingKey = keyof typeof Spacing;

export const Spacer = ({ size = 4 }: { size?: SpacingKey | number }) => {
  return <View style={{ height: Spacing[size as SpacingKey] ?? size }} />;
};

// ─── Styles ──────────────────────────────────────────────────────────────

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  flex: {
    flex: 1,
  },
  flexGrow: {
    flexGrow: 1,
  },
  inner: {
    flex: 1,
  },
  padded: {
    paddingHorizontal: Spacing[5],
    paddingTop: Spacing[4],
  },
  scrollPadded: {
    paddingHorizontal: Spacing[5],
    paddingTop: Spacing[4],
    paddingBottom: Spacing[12],
  },
  centered: {
    alignItems: "center",
    justifyContent: "center",
  },
  scroll: {
    flex: 1,
  },

  section: {
    marginBottom: Spacing[6],
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: Spacing[3],
  },

  row: {
    flexDirection: "row",
  },

  dividerHorizontal: {
    height: 1,
    backgroundColor: Colors.border,
    marginVertical: Spacing[4],
  },
  dividerVertical: {
    width: 1,
    backgroundColor: Colors.border,
    marginHorizontal: Spacing[3],
  },
});
