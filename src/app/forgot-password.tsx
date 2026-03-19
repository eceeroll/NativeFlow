import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [focused, setFocused] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const isValid = email.includes("@");

  const handleSend = () => {
    if (!isValid) return;
    // TODO: call your auth API to send reset email
    setSubmitted(true);
  };

  // ── Success state ─────────────────────────────────────────────────────────
  if (submitted) {
    return (
      <View style={styles.root}>
        <SafeAreaView style={styles.safe}>
          <TouchableOpacity
            onPress={() => router.back()}
            style={styles.backBtn}
            hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
          >
            <Text style={styles.backArrow}>‹</Text>
          </TouchableOpacity>

          <View style={styles.successContent}>
            {/* Icon */}
            <View style={styles.successIconWrap}>
              <LinearGradient
                colors={["#7C3AED", "#6366F1"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.successIcon}
              >
                <Ionicons name="mail-open-outline" size={40} color="#FFFFFF" />
              </LinearGradient>
            </View>

            <Text style={styles.successTitle}>Check your inbox</Text>
            <Text style={styles.successSubtitle}>
              We sent a password reset link to{"\n"}
              <Text style={styles.successEmail}>{email}</Text>
            </Text>

            <Text style={styles.successHint}>
              Didn't receive it? Check your spam folder or try again.
            </Text>

            {/* Try again */}
            <TouchableOpacity
              onPress={() => setSubmitted(false)}
              style={styles.tryAgainBtn}
              activeOpacity={0.7}
            >
              <Text style={styles.tryAgainText}>Try a different email</Text>
            </TouchableOpacity>

            {/* Back to sign in */}
            <TouchableOpacity
              onPress={() => router.push("/login" as any)}
              activeOpacity={0.8}
            >
              <LinearGradient
                colors={["#7C3AED", "#6366F1"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.backToSignInBtn}
              >
                <Text style={styles.backToSignInText}>Back to Sign In</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>
    );
  }

  // ── Form state ────────────────────────────────────────────────────────────
  return (
    <View style={styles.root}>
      <SafeAreaView style={styles.safe}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View style={styles.content}>
            {/* Back */}
            <TouchableOpacity
              onPress={() => router.back()}
              style={styles.backBtn}
              hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
            >
              <Text style={styles.backArrow}>‹</Text>
            </TouchableOpacity>

            {/* Lock icon */}
            <View style={styles.iconSection}>
              <LinearGradient
                colors={["#7C3AED", "#6366F1"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.lockIcon}
              >
                <Ionicons name="lock-open-outline" size={36} color="#FFFFFF" />
              </LinearGradient>
            </View>

            {/* Title */}
            <Text style={styles.title}>Forgot password?</Text>
            <Text style={styles.subtitle}>
              No worries! Enter your email and we'll send you a reset link.
            </Text>

            {/* Email input */}
            <Text style={styles.fieldLabel}>Email address</Text>
            <View style={[styles.inputWrap, focused && styles.inputFocused]}>
              <Ionicons
                name="mail-outline"
                size={20}
                color={focused ? "#7C3AED" : "#9CA3AF"}
              />
              <TextInput
                style={styles.input}
                placeholder="your@email.com"
                placeholderTextColor="#C4C2D4"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                autoFocus
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
              />
              {email.length > 0 && (
                <TouchableOpacity
                  onPress={() => setEmail("")}
                  hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
                >
                  <Ionicons name="close-circle" size={18} color="#C4C2D4" />
                </TouchableOpacity>
              )}
            </View>

            {/* Send button */}
            <TouchableOpacity
              onPress={handleSend}
              activeOpacity={isValid ? 0.8 : 1}
              style={styles.sendBtnWrap}
            >
              <LinearGradient
                colors={
                  isValid ? ["#7C3AED", "#6366F1"] : ["#D1D5DB", "#D1D5DB"]
                }
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.sendBtn}
              >
                <Text style={styles.sendBtnText}>Send reset link</Text>
              </LinearGradient>
            </TouchableOpacity>

            {/* Back to sign in */}
            <TouchableOpacity
              onPress={() => router.push("/login" as any)}
              style={styles.backToSignIn}
              hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
            >
              <Ionicons name="arrow-back-outline" size={16} color="#7C3AED" />
              <Text style={styles.backToSignInLink}>Back to Sign In</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: "#F5F5F7" },
  safe: { flex: 1, paddingHorizontal: 24 },
  content: { flex: 1, paddingTop: 8 },

  backBtn: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  backArrow: {
    fontSize: 32,
    color: "#1A1228",
    lineHeight: 36,
    marginTop: -4,
  },

  // Lock icon
  iconSection: { alignItems: "center", marginBottom: 28 },
  lockIcon: {
    width: 80,
    height: 80,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#7C3AED",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 16,
    elevation: 6,
  },

  title: {
    fontSize: 28,
    fontWeight: "800",
    color: "#1A1228",
    letterSpacing: -0.5,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 15,
    color: "#6B6880",
    lineHeight: 24,
    marginBottom: 32,
  },

  fieldLabel: {
    fontSize: 14,
    fontWeight: "700",
    color: "#1A1228",
    marginBottom: 8,
  },
  inputWrap: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: "#E8E6F9",
    paddingHorizontal: 16,
    height: 58,
    gap: 12,
    marginBottom: 24,
  },
  inputFocused: { borderColor: "#7C3AED" },
  input: {
    flex: 1,
    fontSize: 15,
    color: "#1A1228",
    paddingVertical: 0,
  },

  sendBtnWrap: { marginBottom: 20 },
  sendBtn: {
    height: 56,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  sendBtnText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },

  backToSignIn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    paddingVertical: 8,
  },
  backToSignInLink: {
    fontSize: 14,
    fontWeight: "600",
    color: "#7C3AED",
  },

  // ── Success state ──────────────────────────────────────────────────────────
  successContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 8,
  },
  successIconWrap: { marginBottom: 28 },
  successIcon: {
    width: 96,
    height: 96,
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#7C3AED",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 16,
    elevation: 6,
  },
  successTitle: {
    fontSize: 26,
    fontWeight: "800",
    color: "#1A1228",
    letterSpacing: -0.5,
    marginBottom: 12,
    textAlign: "center",
  },
  successSubtitle: {
    fontSize: 15,
    color: "#6B6880",
    textAlign: "center",
    lineHeight: 24,
    marginBottom: 20,
  },
  successEmail: {
    fontWeight: "700",
    color: "#7C3AED",
  },
  successHint: {
    fontSize: 13,
    color: "#9CA3AF",
    textAlign: "center",
    lineHeight: 20,
    marginBottom: 32,
  },
  tryAgainBtn: {
    paddingVertical: 12,
    marginBottom: 12,
  },
  tryAgainText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#6B6880",
    textAlign: "center",
  },
  backToSignInBtn: {
    width: "100%",
    height: 56,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 18,
  },
  backToSignInText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
});
