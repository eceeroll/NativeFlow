import { View, Text, StyleSheet, Pressable } from "react-native";

export default function DiscoverScreen() {
  return (
    <View style={styles.root}>
      <Text style={styles.title}>Discover</Text>
      <Text style={styles.subtitle}>Swipe to personalize your learning</Text>

      <View style={styles.cardBig}>
        <View style={styles.rowTop}>
          <View style={styles.tag}>
            <Text style={styles.tagText}>casual</Text>
          </View>
          <View style={styles.rowActions}>
            <Text style={styles.action}>🔊</Text>
            <Text style={[styles.action, { marginLeft: 8 }]}>🔖</Text>
          </View>
        </View>
        <Text style={styles.expression}>&quot;I got you&quot;</Text>
        <Text style={styles.meaning}>I understand</Text>
        <Text style={styles.context}>
          &quot;Do not worry, I got you. I will help with the project.&quot;
        </Text>

        <View style={styles.actionsRow}>
          <Pressable style={[styles.circle, { borderColor: "#F87171" }]}>
            <Text style={styles.icon}>✕</Text>
          </Pressable>
          <Pressable style={[styles.circle, { borderColor: "#22C55E" }]}>
            <Text style={styles.icon}>✓</Text>
          </Pressable>
        </View>
        <Text style={styles.actionLabel}>
          ✕ I don&apos;t know this ✓ I know this
        </Text>
      </View>

      <Text style={styles.sectionTitle}>Expression Packs</Text>
      <View style={styles.packList}>
        <View style={styles.listItem}>
          <Text style={styles.listTitle}>Understand Pack</Text>
          <Text style={styles.listSubtitle}>5 expressions</Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.listTitle}>Agree Pack</Text>
          <Text style={styles.listSubtitle}>5 expressions</Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.listTitle}>Greetings Pack</Text>
          <Text style={styles.listSubtitle}>4 expressions</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: "#F7F7FB", padding: 20 },
  title: { fontSize: 34, fontWeight: "800", color: "#111827" },
  subtitle: { color: "#6B7280", marginTop: 8, marginBottom: 18, fontSize: 16 },
  cardBig: {
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 16,
    marginTop: 10,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },
  rowTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  tag: {
    backgroundColor: "#EDE9FE",
    borderRadius: 999,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  tagText: { color: "#7C3AED", fontSize: 12, fontWeight: "700" },
  rowActions: { flexDirection: "row" },
  action: { fontSize: 18 },
  expression: { marginTop: 10, fontSize: 24, fontWeight: "800" },
  meaning: { marginTop: 6, fontSize: 18, color: "#374151" },
  context: {
    marginTop: 10,
    backgroundColor: "#F2F2FF",
    borderRadius: 10,
    padding: 10,
    color: "#374151",
  },
  actionsRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 12,
    gap: 14,
  },
  circle: {
    width: 58,
    height: 58,
    borderRadius: 29,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: { fontSize: 24 },
  actionLabel: {
    textAlign: "center",
    marginTop: 8,
    color: "#6B7280",
    fontWeight: "600",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "800",
    marginTop: 20,
    color: "#111827",
  },
  packList: { marginTop: 8, gap: 8 },
  listItem: {
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 12,
    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowRadius: 6,
    elevation: 1,
  },
  listTitle: { fontWeight: "700", fontSize: 16, color: "#111827" },
  listSubtitle: { marginTop: 4, color: "#6B7280" },
});
