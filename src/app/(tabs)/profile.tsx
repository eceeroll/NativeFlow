import { View, Text, StyleSheet } from "react-native";

export default function ProfileScreen() {
  return (
    <View style={styles.root}>
      <Text style={styles.heading}>Profile</Text>
      <Text style={styles.subheading}>Learning since March 2026</Text>

      <View style={styles.summaryCard}>
        <Text style={styles.profileName}>Learner</Text>
        <View style={styles.statsRow}>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>47</Text>
            <Text style={styles.statLabel}>Expressions</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>7</Text>
            <Text style={styles.statLabel}>Day Streak</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>B1</Text>
            <Text style={styles.statLabel}>Level</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: "#F7F7FB", padding: 20 },
  heading: { fontSize: 32, fontWeight: "800", color: "#111827" },
  subheading: { marginTop: 8, color: "#6B7280" },
  summaryCard: {
    marginTop: 16,
    borderRadius: 18,
    backgroundColor: "#6D28D9",
    padding: 16,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 3,
  },
  profileName: { color: "#fff", fontSize: 24, fontWeight: "800" },
  statsRow: {
    marginTop: 12,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  statItem: {
    width: "30%",
    backgroundColor: "rgba(255,255,255,0.15)",
    borderRadius: 10,
    padding: 8,
    alignItems: "center",
  },
  statValue: { color: "#fff", fontWeight: "800", fontSize: 18 },
  statLabel: { color: "#EDE9FE", marginTop: 2, fontSize: 12 },
});
