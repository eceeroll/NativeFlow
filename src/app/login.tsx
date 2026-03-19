import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [error, setError] = useState("");

  const isValid = email.includes("@") && password.length >= 6;

  const handleLogin = () => {
    if (!isValid) {
      setError("Please enter a valid email and password.");
      return;
    }
    setError("");
    // TODO: wire up real auth
    router.replace("/(tabs)/home" as any);
  };

  return (
    <View style={styles.root}>
      <SafeAreaView style={styles.safe}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <ScrollView
            contentContainerStyle={styles.scroll}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            {/* Back */}
            <TouchableOpacity
              onPress={() => router.back()}
              style={styles.backBtn}
              hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
            >
              <Text style={styles.backArrow}>‹</Text>
            </TouchableOpacity>

            {/* Title */}
            <Text style={styles.title}>Welcome back 👋</Text>
            <Text style={styles.subtitle}>
              Sign in to continue your learning streak
            </Text>

            {/* Error */}
            {error !== "" && (
              <View style={styles.errorBox}>
                <Ionicons
                  name="alert-circle-outline"
                  size={16}
                  color="#EF4444"
                />
                <Text style={styles.errorText}>{error}</Text>
              </View>
            )}

            {/* Email */}
            <Text style={styles.fieldLabel}>Email</Text>
            <View
              style={[styles.inputWrap, emailFocused && styles.inputFocused]}
            >
              <Ionicons
                name="mail-outline"
                size={20}
                color={emailFocused ? "#7C3AED" : "#9CA3AF"}
              />
              <TextInput
                style={styles.input}
                placeholder="your@email.com"
                placeholderTextColor="#C4C2D4"
                value={email}
                onChangeText={(t) => {
                  setEmail(t);
                  setError("");
                }}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                onFocus={() => setEmailFocused(true)}
                onBlur={() => setEmailFocused(false)}
              />
            </View>

            {/* Password */}
            <Text style={styles.fieldLabel}>Password</Text>
            <View
              style={[styles.inputWrap, passwordFocused && styles.inputFocused]}
            >
              <Ionicons
                name="lock-closed-outline"
                size={20}
                color={passwordFocused ? "#7C3AED" : "#9CA3AF"}
              />
              <TextInput
                style={styles.input}
                placeholder="Your password"
                placeholderTextColor="#C4C2D4"
                value={password}
                onChangeText={(t) => {
                  setPassword(t);
                  setError("");
                }}
                secureTextEntry={!showPassword}
                autoCapitalize="none"
                autoCorrect={false}
                onFocus={() => setPasswordFocused(true)}
                onBlur={() => setPasswordFocused(false)}
              />
              <TouchableOpacity
                onPress={() => setShowPassword(!showPassword)}
                hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
              >
                <Ionicons
                  name={showPassword ? "eye-outline" : "eye-off-outline"}
                  size={20}
                  color="#9CA3AF"
                />
              </TouchableOpacity>
            </View>

            {/* Forgot password */}
            <TouchableOpacity
              onPress={() => router.push("/forgot-password" as any)}
              style={styles.forgotBtn}
              hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
            >
              <Text style={styles.forgotText}>Forgot password?</Text>
            </TouchableOpacity>

            {/* Sign in button */}
            <TouchableOpacity
              onPress={handleLogin}
              activeOpacity={isValid ? 0.8 : 1}
              style={styles.loginBtnWrap}
            >
              <LinearGradient
                colors={
                  isValid ? ["#7C3AED", "#6366F1"] : ["#D1D5DB", "#D1D5DB"]
                }
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.loginBtn}
              >
                <Text style={styles.loginBtnText}>Sign in</Text>
              </LinearGradient>
            </TouchableOpacity>

            {/* Divider */}
            <View style={styles.divider}>
              <View style={styles.dividerLine} />
              <Text style={styles.dividerText}>or</Text>
              <View style={styles.dividerLine} />
            </View>

            {/* Google */}
            <TouchableOpacity
              style={styles.googleBtn}
              onPress={() => console.log("Google")}
              activeOpacity={0.8}
            >
              <Ionicons name="logo-google" size={20} color="#EA4335" />
              <Text style={styles.googleBtnText}>Continue with Google</Text>
            </TouchableOpacity>

            {/* Apple */}
            <TouchableOpacity
              style={styles.appleBtn}
              onPress={() => console.log("Apple")}
              activeOpacity={0.8}
            >
              <Ionicons name="logo-apple" size={22} color="#FFFFFF" />
              <Text style={styles.appleBtnText}>Continue with Apple</Text>
            </TouchableOpacity>

            {/* Sign up link */}
            <View style={styles.signupRow}>
              <Text style={styles.signupText}>Don't have an account? </Text>
              <TouchableOpacity
                onPress={() => router.push("/signup-form" as any)}
                hitSlop={{ top: 8, bottom: 8, left: 4, right: 4 }}
              >
                <Text style={styles.signupLink}>Sign up</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: "#F5F5F7" },
  safe: { flex: 1 },
  scroll: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 8,
    paddingBottom: 40,
  },

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

  title: {
    fontSize: 28,
    fontWeight: "800",
    color: "#1A1228",
    letterSpacing: -0.5,
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 15,
    color: "#6B6880",
    marginBottom: 28,
  },

  // Error
  errorBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: "#FEE2E2",
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#FECACA",
  },
  errorText: {
    fontSize: 13,
    color: "#EF4444",
    fontWeight: "500",
    flex: 1,
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
    marginBottom: 20,
  },
  inputFocused: {
    borderColor: "#7C3AED",
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: "#1A1228",
    paddingVertical: 0,
  },

  forgotBtn: {
    alignSelf: "flex-end",
    marginTop: -10,
    marginBottom: 28,
  },
  forgotText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#7C3AED",
  },

  loginBtnWrap: { marginBottom: 20 },
  loginBtn: {
    height: 56,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  loginBtnText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },

  divider: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 16,
  },
  dividerLine: { flex: 1, height: 1, backgroundColor: "#E8E6F9" },
  dividerText: { fontSize: 13, color: "#9CA3AF" },

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
    marginBottom: 12,
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
    marginBottom: 28,
  },
  appleBtnText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#FFFFFF",
  },

  signupRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  signupText: { fontSize: 14, color: "#6B6880" },
  signupLink: { fontSize: 14, fontWeight: "700", color: "#7C3AED" },
});
