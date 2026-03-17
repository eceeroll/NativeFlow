import { View, Text, StyleSheet } from "react-native";

export default function ProgressScreen() {
  return (
    <View style={styles.root}>
      <Text style={styles.title}>Your Progress</Text>
      <Text style={styles.subtitle}>Keep up the amazing work!</Text>

      <View style={styles.row}>
        <View style={styles.metricCard}>
          <Text style={styles.metricValue}>7</Text>
          <Text style={styles.metricLabel}>Day Streak</Text>
        </View>
        <View style={styles.metricCard}>
          <Text style={styles.metricValue}>47</Text>
          <Text style={styles.metricLabel}>Learned</Text>
        </View>
        <View style={styles.metricCard}>
          <Text style={styles.metricValue}>92%</Text>
          <Text style={styles.metricLabel}>Accuracy</Text>
        </View>
      </View>

      <View style={styles.bigCard}>
        <Text style={styles.bigHeading}>Amazing Progress!</Text>
        <Text style={styles.bigText}>
          You&apos;re learning faster than 78% of users.
        </Text>
        <View style={styles.track}>
          <View style={styles.trackFill} />
        </View>
        <Text style={styles.next}>Next milestone • 50 expressions</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: "#F7F7FB", padding: 20 },
  title: { fontSize: 32, fontWeight: "800", color: "#111827" },
  subtitle: { color: "#6B7280", marginTop: 8, marginBottom: 16, fontSize: 16 },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
    gap: 8,
    flexWrap: "wrap",
  },
  metricCard: {
    width: "31%",
    minWidth: 100,
    borderRadius: 16,
    backgroundColor: "#fff",
    padding: 14,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 1,
  },
  metricValue: { fontSize: 24, fontWeight: "800", color: "#111827" },
  metricLabel: { color: "#6B7280", marginTop: 4 },
  bigCard: {
    marginTop: 18,
    backgroundColor: "#7B3FE4",
    borderRadius: 18,
    padding: 16,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 3,
  },
  bigHeading: { color: "#fff", fontSize: 22, fontWeight: "800" },
  bigText: { color: "#f3efff", marginTop: 6 },
  track: {
    marginTop: 12,
    backgroundColor: "rgba(255,255,255,0.2)",
    height: 8,
    borderRadius: 6,
    overflow: "hidden",
  },
  trackFill: { width: "60%", height: "100%", backgroundColor: "#fff" },
  next: { marginTop: 8, color: "#fff", fontWeight: "600" },
});
