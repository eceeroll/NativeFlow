import { Tabs } from "expo-router";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../../components/theme/colors";

const TABS = [
  { name: "home", label: "Home", icon: "⊞" },
  { name: "discover", label: "Discover", icon: "◎" },
  { name: "saved", label: "Saved", icon: "⊡" },
  { name: "progress", label: "Progress", icon: "↗" },
  { name: "profile", label: "Profile", icon: "◯" },
];

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.textTertiary,
        tabBarLabelStyle: styles.tabLabel,
        tabBarIcon: ({ focused }) => {
          const tab = TABS.find((t) => t.name === route.name);
          return (
            <View style={[styles.iconWrap, focused && styles.iconWrapActive]}>
              <Text style={[styles.icon, focused && styles.iconActive]}>
                {tab?.icon}
              </Text>
            </View>
          );
        },
      })}
    >
      {TABS.map(({ name, label }) => (
        <Tabs.Screen key={name} name={name} options={{ title: label }} />
      ))}
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#E8E6F9",
    height: 72,
    paddingBottom: 12,
    paddingTop: 8,
  },
  tabLabel: {
    fontFamily: "Nunito-SemiBold",
    fontSize: 11,
  },
  iconWrap: {
    width: 32,
    height: 32,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  iconWrapActive: {
    backgroundColor: Colors.primaryLight,
  },
  icon: { fontSize: 18, color: Colors.textTertiary },
  iconActive: { fontSize: 18, color: Colors.primary },
});
