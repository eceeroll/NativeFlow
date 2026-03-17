import { View, Text, StyleSheet, Pressable } from "react-native";

const categories = [
  { icon: "💬", title: "Daily Conversation", color: "#3B82F6" },
  { icon: "💼", title: "Business English", color: "#8B5CF6" },
  { icon: "🌍", title: "Travel English", color: "#10B981" },
  { icon: "👋", title: "Greetings", color: "#F59E0B" },
];

export default function HomeScreen() {
  return (
    <View style={styles.root}>
      <Text style={styles.pageTitle}>NativeFlow</Text>
      <Text style={styles.pageSubtitle}>
        English that feels natural, one expression at a time.
      </Text>

      <View style={styles.packCard}>
        <View style={styles.packHeader}>
          <Text style={styles.packLabel}>Today&apos;s Pack</Text>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>7 days</Text>
          </View>
        </View>
        <Text style={styles.packProgress}>0 / 5 learned</Text>
        <View style={styles.track}>
          <View style={styles.fill} />
        </View>
        <Pressable style={styles.startBtn}>
          <Text style={styles.startLabel}>▶ Start Learning</Text>
        </Pressable>
      </View>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Discover Expressions</Text>
        <Text style={styles.sectionLink}>See all</Text>
      </View>

      <View style={styles.discoverCard}>
        <View style={styles.cardTopRow}>
          <View style={styles.smallTag}>
            <Text style={styles.smallTagText}>casual</Text>
          </View>
          <View style={styles.inlineIcons}>
            <Text>🔊</Text>
            <Text style={{ marginLeft: 8 }}>🔖</Text>
          </View>
        </View>
        <Text style={styles.expression}>&quot;I got you&quot;</Text>
        <Text style={styles.meaning}>I understand</Text>
        <Text style={styles.swipe}>Swipe to discover more →</Text>
      </View>

      <Text style={styles.subheading2}>Expression Packs</Text>
      <View style={styles.categories}>
        {categories.map((item) => (
          <View key={item.title} style={styles.categoryCard}>
            <Text
              style={[
                styles.categoryIcon,
                { backgroundColor: `${item.color}20`, color: item.color },
              ]}
            >
              {item.icon}
            </Text>
            <Text style={styles.categoryText}>{item.title}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: "#F7F7FB", padding: 24 },
  pageTitle: { fontSize: 32, fontWeight: "800", color: "#111827" },
  pageSubtitle: {
    color: "#6B7280",
    marginTop: 8,
    marginBottom: 18,
    fontSize: 16,
  },
  packCard: {
    borderRadius: 24,
    padding: 16,
    backgroundColor: "#6D28D9",
    marginBottom: 22,
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 14,
    elevation: 3,
  },
  packHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  packLabel: { color: "#fff", fontWeight: "700", fontSize: 14 },
  badge: {
    backgroundColor: "rgba(255,255,255,0.2)",
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  badgeText: { color: "#fff", fontSize: 12, fontWeight: "700" },
  packProgress: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "800",
    marginTop: 12,
  },
  track: {
    height: 8,
    backgroundColor: "rgba(255,255,255,0.35)",
    borderRadius: 8,
    marginTop: 12,
    overflow: "hidden",
  },
  fill: { width: "0%", height: "100%", backgroundColor: "#fff" },
  startBtn: {
    marginTop: 14,
    backgroundColor: "#fff",
    borderRadius: 14,
    paddingVertical: 12,
    alignItems: "center",
  },
  startLabel: { color: "#6D28D9", fontWeight: "700" },
  sectionHeader: {
    marginTop: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sectionTitle: { fontSize: 20, fontWeight: "800", color: "#111827" },
  sectionLink: { color: "#7C3AED", fontWeight: "700" },
  discoverCard: {
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 16,
    marginTop: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  cardTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  smallTag: {
    backgroundColor: "#EDE9FE",
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  smallTagText: { color: "#5B21B6", fontSize: 12, fontWeight: "700" },
  inlineIcons: { flexDirection: "row" },
  expression: { fontSize: 22, fontWeight: "800", marginTop: 8 },
  meaning: { marginTop: 2, color: "#4B5563" },
  swipe: { marginTop: 8, color: "#7C3AED", fontWeight: "700" },
  subheading2: {
    marginTop: 16,
    fontSize: 18,
    fontWeight: "800",
    color: "#111827",
  },
  categories: {
    marginTop: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  categoryCard: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 10,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    shadowColor: "#000",
    shadowOpacity: 0.03,
    shadowRadius: 4,
    elevation: 1,
  },
  categoryIcon: {
    width: 30,
    height: 30,
    borderRadius: 10,
    textAlign: "center",
    lineHeight: 30,
    fontWeight: "700",
  },
  categoryText: { fontWeight: "700", flexShrink: 1, marginLeft: 6 },
});
