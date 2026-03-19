import {
  View,
  Text,
  Pressable,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";

export default function SaveProgress() {
  const insets = useSafeAreaInsets();

  const handleMaybeLater = async () => {
    await AsyncStorage.setItem("hasOnboarded", "true");
    router.replace("/(tabs)/home" as any);
  };

  return (
    <View style={styles.root}>
      <SafeAreaView style={styles.safe}>
        {/* 🔥 Back Button */}
        <Pressable
          onPress={() => {
            if (router.canGoBack()) {
              router.back();
            } else {
              router.push("/");
            }
          }}
          style={[styles.backBtn, { top: insets.top + 8 }]}
          hitSlop={12}
        >
          <Ionicons name="arrow-back" size={22} color="#1A1228" />
        </Pressable>

        {/* Content */}
        <View style={styles.content}>
          {/* App icon */}
          <View style={styles.iconSection}>
            <LinearGradient
              colors={["#FB923C", "#EF4444"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.appIcon}
            >
              <Text style={styles.appIconEmoji}>🔥</Text>
            </LinearGradient>
          </View>

          {/* Title */}
          <View style={styles.textSection}>
            <Text style={styles.title}>Save your progress 🔥</Text>
            <Text style={styles.subtitle}>
              Create an account to keep your streak and never lose your learned
              expressions.
            </Text>
          </View>

          {/* Buttons */}
          <View style={styles.buttons}>
            <TouchableOpacity style={styles.googleBtn} activeOpacity={0.8}>
              <Ionicons name="logo-google" size={20} color="#EA4335" />
              <Text style={styles.googleBtnText}>Continue with Google</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.appleBtn} activeOpacity={0.8}>
              <Ionicons name="logo-apple" size={22} color="#FFFFFF" />
              <Text style={styles.appleBtnText}>Continue with Apple</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => router.push("/signup-form" as any)}
              activeOpacity={0.8}
            >
              <LinearGradient
                colors={["#7C3AED", "#6366F1"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.emailBtn}
              >
                <Ionicons name="mail-outline" size={20} color="#FFFFFF" />
                <Text style={styles.emailBtnText}>Sign up with Email</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>

          {/* Maybe later */}
          <TouchableOpacity
            onPress={handleMaybeLater}
            style={styles.laterBtn}
            activeOpacity={0.7}
          >
            <Text style={styles.laterText}>Maybe later</Text>
          </TouchableOpacity>

          {/* Security */}
          <View style={styles.securityRow}>
            <Ionicons
              name="shield-checkmark-outline"
              size={14}
              color="#9CA3AF"
            />
            <Text style={styles.securityText}>
              Your data is safe and secure
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#F5F5F7",
  },
  safe: {
    flex: 1,
    paddingHorizontal: 24,
  },

  content: {
    flex: 1,
    justifyContent: "center", // 🔥 artık sadece content ortalanıyor
  },

  backBtn: {
    position: "absolute",
    left: 24,
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
  },

  iconSection: {
    alignItems: "center",
    marginBottom: 32,
  },
  appIcon: {
    width: 96,
    height: 96,
    borderRadius: 26,
    alignItems: "center",
    justifyContent: "center",
  },
  appIconEmoji: {
    fontSize: 44,
  },

  textSection: {
    alignItems: "center",
    marginBottom: 40,
    paddingHorizontal: 8,
  },
  title: {
    fontSize: 26,
    fontWeight: "800",
    color: "#1A1228",
    letterSpacing: -0.5,
    marginBottom: 12,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 15,
    color: "#6B6880",
    textAlign: "center",
    lineHeight: 24,
  },

  buttons: {
    gap: 12,
    marginBottom: 24,
  },

  googleBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    height: 56,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: "#E5E7EB",
  },
  googleBtnText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1A1228",
  },

  appleBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    height: 56,
    backgroundColor: "#000000",
    borderRadius: 16,
  },
  appleBtnText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#FFFFFF",
  },

  emailBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    height: 56,
    borderRadius: 16,
  },
  emailBtnText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#FFFFFF",
  },

  laterBtn: {
    alignItems: "center",
    paddingVertical: 12,
    marginBottom: 20,
  },
  laterText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#6B6880",
  },

  securityRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
  },
  securityText: {
    fontSize: 13,
    color: "#9CA3AF",
  },
});
