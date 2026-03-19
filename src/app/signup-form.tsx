// app/sign-up.tsx
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

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  const isValid = email.includes("@") && password.length >= 6;

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
            <Text style={styles.title}>Create your account</Text>
            <Text style={styles.subtitle}>
              Start your learning journey today
            </Text>

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
                onChangeText={setEmail}
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
              style={[
                styles.inputWrap,
                styles.inputWrapLast,
                passwordFocused && styles.inputFocused,
              ]}
            >
              <Ionicons
                name="lock-closed-outline"
                size={20}
                color={passwordFocused ? "#7C3AED" : "#9CA3AF"}
              />
              <TextInput
                style={styles.input}
                placeholder="Create a strong password"
                placeholderTextColor="#C4C2D4"
                value={password}
                onChangeText={setPassword}
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

            {/* Create account */}
            <TouchableOpacity
              onPress={() => isValid && router.push("/(tabs)/home" as any)}
              activeOpacity={isValid ? 0.8 : 1}
            >
              <LinearGradient
                colors={
                  isValid ? ["#7C3AED", "#6366F1"] : ["#D1D5DB", "#D1D5DB"]
                }
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.createBtn}
              >
                <Text style={styles.createBtnText}>Create account</Text>
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
              <Text style={styles.googleBtnText}>Google</Text>
            </TouchableOpacity>

            {/* Apple */}
            <TouchableOpacity
              style={styles.appleBtn}
              onPress={() => console.log("Apple")}
              activeOpacity={0.8}
            >
              <Ionicons name="logo-apple" size={22} color="#FFFFFF" />
              <Text style={styles.appleBtnText}>Apple</Text>
            </TouchableOpacity>

            {/* Sign in link */}
            <View style={styles.signinRow}>
              <Text style={styles.signinText}>Already have an account? </Text>
              <TouchableOpacity
                onPress={() => router.push("/login" as any)}
                hitSlop={{ top: 8, bottom: 8, left: 4, right: 4 }}
              >
                <Text style={styles.signinLink}>Sign in</Text>
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
    marginBottom: 20,
  },
  inputWrapLast: {
    marginBottom: 28,
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

  createBtn: {
    height: 56,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  createBtnText: {
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

  signinRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  signinText: { fontSize: 14, color: "#6B6880" },
  signinLink: { fontSize: 14, fontWeight: "700", color: "#7C3AED" },
});
