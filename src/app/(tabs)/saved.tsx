import { View, Text, StyleSheet } from "react-native";

export default function SavedScreen() {
  return (
    <View style={styles.root}>
      <Text style={styles.heading}>Saved Expressions</Text>
      <Text style={styles.subtitle}>7 expressions saved</Text>

      <View style={styles.card}>
        <Text style={styles.expression}>&quot;I got it&quot;</Text>
        <Text style={styles.explanation}>I understand</Text>
        <View style={styles.tagRow}>
          <Text style={styles.tag}>casual</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.expression}>&quot;No worries&quot;</Text>
        <Text style={styles.explanation}>It&apos;s okay</Text>
        <View style={styles.tagRow}>
          <Text style={styles.tag}>casual</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.expression}>&quot;Touch base&quot;</Text>
        <Text style={styles.explanation}>Contact someone</Text>
        <View style={styles.tagRow}>
          <Text style={styles.tag}>business</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: "#F7F7FB", padding: 20 },
  heading: { fontSize: 30, fontWeight: "800", color: "#111827" },
  subtitle: { color: "#6B7280", marginTop: 6, marginBottom: 14 },
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 14,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.03,
    shadowRadius: 6,
    elevation: 1,
  },
  expression: { fontSize: 18, fontWeight: "800", color: "#111827" },
  explanation: { marginTop: 3, color: "#6B7280" },
  tagRow: { marginTop: 8 },
  tag: {
    backgroundColor: "#EEF2FF",
    color: "#3730A3",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 999,
    fontWeight: "700",
  },
});
