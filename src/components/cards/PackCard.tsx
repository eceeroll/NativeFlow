import { View, StyleSheet } from "react-native";
import { Text } from "../ui/Text";
import Badge from "../ui/Badge";
import { Radius } from "../theme/radius";
import { Spacing } from "../theme/spacing";

interface PackCardProps {
  title: string;
  count: number;
  level: string;
  progress?: number; // 0-1 for progress bar
}

export const PackCard: React.FC<PackCardProps> = ({
  title,
  count,
  level,
  progress = 0,
}) => {
  return (
    <View style={styles.card}>
      {/* Badge */}
      <View style={styles.badgeWrapper}>
        <Badge label={level} />
      </View>

      {/* Content */}
      <Text variant="subtitle" style={styles.title}>
        {title}
      </Text>
      <Text variant="caption" style={styles.count}>
        {count} expressions
      </Text>

      {/* Progress Bar */}
      <View style={styles.progressBackground}>
        <View style={[styles.progressFill, { width: `${progress * 100}%` }]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: Radius.lg,
    padding: Spacing.lg,
    marginBottom: Spacing.md,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5, // Android shadow
    position: "relative",
  },
  badgeWrapper: {
    position: "absolute",
    top: Spacing.md,
    right: Spacing.md,
  },
  title: {
    marginBottom: Spacing.xs,
  },
  count: {
    marginBottom: Spacing.sm,
    color: "#555",
  },
  progressBackground: {
    height: 6,
    backgroundColor: "#eee",
    borderRadius: 3,
    overflow: "hidden",
    marginTop: Spacing.sm,
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#6B46C1", // purple gradient can be applied if using LinearGradient
    borderRadius: 3,
  },
});
