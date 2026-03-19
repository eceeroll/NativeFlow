import { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Animated,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { EXPRESSIONS } from "../constants/data";
import { CARD_HOLD_MS, SWIPE_OUT_MS } from "../constants/consts";

const { width: W } = Dimensions.get("window");

export default function HowItWorks() {
  const [index, setIndex] = useState(0);
  const [nextDir, setNextDir] = useState<"right" | "left">("right");

  const cardX = useRef(new Animated.Value(0)).current;
  const cardRotate = useRef(new Animated.Value(0)).current;
  const cardOpacity = useRef(new Animated.Value(0)).current;
  const knowOpacity = useRef(new Animated.Value(0)).current;
  const dontKnowOpacity = useRef(new Animated.Value(0)).current;
  const btnOpacity = useRef(new Animated.Value(0)).current;
  const btnTranslateY = useRef(new Animated.Value(12)).current;

  // Slide card in whenever index changes
  useEffect(() => {
    const fromX = nextDir === "right" ? -W : W;
    const fromRot = nextDir === "right" ? -8 : 8;

    cardX.setValue(fromX);
    cardRotate.setValue(fromRot);
    cardOpacity.setValue(0);
    knowOpacity.setValue(0);
    dontKnowOpacity.setValue(0);
    btnOpacity.setValue(0);
    btnTranslateY.setValue(12);

    Animated.parallel([
      Animated.spring(cardX, {
        toValue: 0,
        useNativeDriver: true,
        damping: 18,
        stiffness: 160,
      }),
      Animated.spring(cardRotate, {
        toValue: 0,
        useNativeDriver: true,
        damping: 18,
        stiffness: 160,
      }),
      Animated.timing(cardOpacity, {
        toValue: 1,
        duration: 250,
        useNativeDriver: true,
      }),
    ]).start(() => {
      // Buttons fade in after card lands
      Animated.parallel([
        Animated.timing(btnOpacity, {
          toValue: 1,
          duration: 350,
          delay: 150,
          useNativeDriver: true,
        }),
        Animated.timing(btnTranslateY, {
          toValue: 0,
          duration: 350,
          delay: 150,
          useNativeDriver: true,
        }),
      ]).start();
    });
  }, [index]);

  // Auto-swipe timer
  useEffect(() => {
    const timer = setTimeout(() => {
      triggerSwipe(index % 2 === 0 ? "right" : "left");
    }, CARD_HOLD_MS);
    return () => clearTimeout(timer);
  }, [index]);

  const triggerSwipe = (dir: "right" | "left") => {
    const toX = dir === "right" ? W * 1.3 : -W * 1.3;
    const toRot = dir === "right" ? 18 : -18;
    const labelAnim = dir === "right" ? knowOpacity : dontKnowOpacity;

    // Flash swipe label
    Animated.timing(labelAnim, {
      toValue: 1,
      duration: 160,
      useNativeDriver: true,
    }).start();

    // Hide buttons
    Animated.timing(btnOpacity, {
      toValue: 0,
      duration: 120,
      useNativeDriver: true,
    }).start();
    btnTranslateY.setValue(6);

    // Swipe out
    Animated.parallel([
      Animated.timing(cardX, {
        toValue: toX,
        duration: SWIPE_OUT_MS,
        useNativeDriver: true,
      }),
      Animated.timing(cardRotate, {
        toValue: toRot,
        duration: SWIPE_OUT_MS,
        useNativeDriver: true,
      }),
      Animated.timing(cardOpacity, {
        toValue: 0,
        duration: SWIPE_OUT_MS - 100,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setNextDir(dir);
      setIndex((prev) => (prev + 1) % EXPRESSIONS.length);
    });
  };

  const spin = cardRotate.interpolate({
    inputRange: [-20, 0, 20],
    outputRange: ["-20deg", "0deg", "20deg"],
  });

  const current = EXPRESSIONS[index];

  return (
    <View style={styles.root}>
      <SafeAreaView style={styles.safe}>
        {/* Header */}
        <View style={styles.header}>
          <Pressable
            onPress={() => router.back()}
            style={styles.backBtn}
            hitSlop={12}
          >
            <Text style={styles.backArrow}>‹</Text>
          </Pressable>
          <View style={styles.progressTrack}>
            <LinearGradient
              colors={["#6C63FF", "#A855F7"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.progressFill}
            />
          </View>
        </View>

        {/* Title */}
        <View style={styles.titleSection}>
          <Text style={styles.title}>How It Works</Text>
          <Text style={styles.subtitle}>Swipe to learn expressions</Text>
        </View>

        {/* Card area */}
        <View style={styles.cardArea}>
          {/* Left label — Don't know */}
          <Animated.View
            style={[
              styles.swipeLabel,
              styles.labelLeft,
              { opacity: dontKnowOpacity },
            ]}
          >
            <View style={[styles.labelPill, { backgroundColor: "#FF4D4D" }]}>
              <Text style={styles.labelText}>✕ Don't know</Text>
            </View>
          </Animated.View>

          {/* Right label — I know this */}
          <Animated.View
            style={[
              styles.swipeLabel,
              styles.labelRight,
              { opacity: knowOpacity },
            ]}
          >
            <View style={[styles.labelPill, { backgroundColor: "#22C55E" }]}>
              <Text style={styles.labelText}>✓ I know this</Text>
            </View>
          </Animated.View>

          {/* Card */}
          <Animated.View
            style={[
              styles.card,
              {
                opacity: cardOpacity,
                transform: [{ translateX: cardX }, { rotate: spin }],
              },
            ]}
          >
            <View
              style={[styles.typeBadge, { backgroundColor: current.typeBg }]}
            >
              <Text
                style={[styles.typeBadgeText, { color: current.typeColor }]}
              >
                {current.type}
              </Text>
            </View>

            <Text style={styles.cardEmoji}>{current.emoji}</Text>
            <Text style={styles.cardPhrase}>{current.phrase}</Text>
            <Text style={styles.cardMeaning}>{current.meaning}</Text>

            {/* Buttons — fade in after card lands */}
            <Animated.View
              style={[
                styles.actionRow,
                {
                  opacity: btnOpacity,
                  transform: [{ translateY: btnTranslateY }],
                },
              ]}
            >
              <Pressable
                style={[styles.actionBtn, { backgroundColor: "#FF4D4D" }]}
                onPress={() => triggerSwipe("left")}
              >
                <Text style={styles.actionBtnIcon}>‹</Text>
                <Text style={styles.actionBtnText}>Don't know</Text>
              </Pressable>

              <Pressable
                style={[styles.actionBtn, { backgroundColor: "#22C55E" }]}
                onPress={() => triggerSwipe("right")}
              >
                <Text style={styles.actionBtnText}>I know this</Text>
                <Text style={styles.actionBtnIcon}>›</Text>
              </Pressable>
            </Animated.View>

            <Text style={styles.cardHint}>Swipe to practice</Text>
          </Animated.View>

          {/* Dots */}
          <View style={styles.dots}>
            {EXPRESSIONS.map((_, i) => (
              <View
                key={i}
                style={[styles.dot, i === index && styles.dotActive]}
              />
            ))}
          </View>
        </View>

        {/* Bottom */}
        <View style={styles.bottom}>
          <Text style={styles.hintText}>
            Swipe right if you know it, left if you don't.{"\n"}It's that
            simple!
          </Text>
          <Pressable onPress={() => router.push("/level-selection" as any)}>
            <LinearGradient
              colors={["#4F8EF7", "#7C3AED"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.continueBtn}
            >
              <Text style={styles.continueBtnText}>Continue</Text>
            </LinearGradient>
          </Pressable>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: "#F8F7FF" },
  safe: { flex: 1, paddingHorizontal: 24 },

  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 8,
    gap: 12,
  },
  backBtn: {
    width: 36,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
  },
  backArrow: { fontSize: 32, color: "#1A1228", lineHeight: 36, marginTop: -4 },
  progressTrack: {
    flex: 1,
    height: 6,
    backgroundColor: "#E8E6F9",
    borderRadius: 3,
    overflow: "hidden",
  },
  progressFill: { width: "66%", height: "100%", borderRadius: 3 },

  titleSection: { alignItems: "center", marginTop: 28, marginBottom: 20 },
  title: {
    fontSize: 26,
    fontWeight: "800",
    color: "#1A1228",
    letterSpacing: -0.5,
    marginBottom: 6,
  },
  subtitle: { fontSize: 15, color: "#6B6880" },

  cardArea: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },

  swipeLabel: { position: "absolute", top: "28%", zIndex: 10 },
  labelLeft: { left: -8 },
  labelRight: { right: -8 },
  labelPill: { paddingHorizontal: 16, paddingVertical: 9, borderRadius: 999 },
  labelText: { color: "#FFFFFF", fontWeight: "700", fontSize: 14 },

  card: {
    width: W - 48,
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    padding: 28,
    alignItems: "center",
    borderWidth: 1.5,
    borderColor: "#E8E6F9",
    shadowColor: "#5B4FE9",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.1,
    shadowRadius: 24,
    elevation: 6,
  },
  typeBadge: {
    alignSelf: "flex-start",
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 999,
    marginBottom: 20,
  },
  typeBadgeText: { fontSize: 13, fontWeight: "600" },
  cardEmoji: { fontSize: 48, marginBottom: 16 },
  cardPhrase: {
    fontSize: 26,
    fontWeight: "800",
    color: "#1A1228",
    letterSpacing: -0.5,
    marginBottom: 10,
    textAlign: "center",
  },
  cardMeaning: {
    fontSize: 15,
    color: "#6B6880",
    textAlign: "center",
    lineHeight: 22,
    marginBottom: 28,
  },

  actionRow: { flexDirection: "row", width: "100%", gap: 12, marginBottom: 20 },
  actionBtn: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 14,
    borderRadius: 999,
    gap: 6,
  },
  actionBtnText: { color: "#FFFFFF", fontSize: 14, fontWeight: "700" },
  actionBtnIcon: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
    lineHeight: 20,
  },
  cardHint: { fontSize: 13, color: "#A8A5BC" },

  dots: { flexDirection: "row", gap: 6, marginTop: 20 },
  dot: { width: 6, height: 6, borderRadius: 3, backgroundColor: "#E8E6F9" },
  dotActive: { width: 18, borderRadius: 3, backgroundColor: "#5B4FE9" },

  bottom: { paddingBottom: 24, gap: 16 },
  hintText: {
    textAlign: "center",
    fontSize: 14,
    color: "#6B6880",
    lineHeight: 22,
  },
  continueBtn: { borderRadius: 18, paddingVertical: 18, alignItems: "center" },
  continueBtnText: { color: "#FFFFFF", fontSize: 17, fontWeight: "700" },
});
