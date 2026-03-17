import React, { useRef, useState, ReactNode } from "react";
import {
  View,
  TouchableOpacity,
  Animated,
  StyleSheet,
  Dimensions,
  Text,
  ViewStyle,
  StyleProp,
} from "react-native";
import { Colors } from "../theme/colors";
import { Radius } from "../theme/radius";
import { Spacing } from "../theme/spacing";
import { Shadows } from "../theme/shadows";
import { Heading, Body, Caption, Label, Highlight } from "./Typography";
import Badge from "./Badge";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

// ─── Types ────────────────────────────────────────────────────────────────

type ExpressionType =
  | "idiom"
  | "phrasalVerb"
  | "slang"
  | "collocation"
  | "expression";

type Difficulty = "beginner" | "intermediate" | "advanced";

interface CardProps {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
  elevated?: boolean;
  tinted?: boolean;
  noPadding?: boolean;
}

interface ExpressionCardProps {
  expression: string;
  type?: ExpressionType;
  exampleSentence?: string;
  highlightWords?: string[];
  explanation: string;
  usageTip?: string;
  difficulty?: Difficulty;
  onBookmark?: () => void;
  isBookmarked?: boolean;
  style?: StyleProp<ViewStyle>;
}

interface LessonCardProps {
  title: string;
  expressionCount: number;
  duration: string;
  isCompleted?: boolean;
  isLocked?: boolean;
  progress?: number;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

// ─── Base Card ────────────────────────────────────────────────────────────

export const Card: React.FC<CardProps> = ({
  children,
  style,
  onPress,
  elevated = false,
  tinted = false,
  noPadding = false,
}) => {
  const content = (
    <View
      style={[
        styles.card,
        elevated ? Shadows.lg : Shadows.sm,
        tinted && styles.cardTinted,
        noPadding && styles.noPadding,
        style,
      ]}
    >
      {children}
    </View>
  );

  if (onPress) {
    return (
      <TouchableOpacity onPress={onPress} activeOpacity={0.85}>
        {content}
      </TouchableOpacity>
    );
  }

  return content;
};

// ─── Expression Card ──────────────────────────────────────────────────────

export const ExpressionCard: React.FC<ExpressionCardProps> = ({
  expression,
  type = "expression",
  exampleSentence,
  highlightWords,
  explanation,
  usageTip,
  difficulty,
  onBookmark,
  isBookmarked = false,
  style,
}) => {
  const [flipped, setFlipped] = useState(false);
  const flipAnim = useRef(new Animated.Value(0)).current;

  const frontOpacity = flipAnim.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [1, 0, 0],
  });

  const backOpacity = flipAnim.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, 0, 1],
  });

  const frontRotate = flipAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"],
  });

  const backRotate = flipAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["180deg", "360deg"],
  });

  const flip = () => {
    Animated.spring(flipAnim, {
      toValue: flipped ? 0 : 1,
      useNativeDriver: true,
      damping: 16,
      stiffness: 120,
    }).start();

    setFlipped((prev) => !prev);
  };

  const badgeType = type;

  const renderExample = () => {
    if (!exampleSentence) return null;

    if (!highlightWords || highlightWords.length === 0) {
      return (
        <Body size="lg" style={styles.exampleText}>
          {'"'}
          {exampleSentence}
          {'"'}
        </Body>
      );
    }

    const words = exampleSentence.split(/(\s+)/);
    const lowerHighlight = highlightWords.map((w) => w.toLowerCase());

    return (
      <Body size="lg" style={styles.exampleText}>
        {'"'}
        {words.map((word, i) => {
          if (/\s+/.test(word)) return word;

          const clean = word.replace(/[^a-zA-Z]/g, "").toLowerCase();
          const isHighlighted = lowerHighlight.includes(clean);

          return isHighlighted ? (
            <Highlight
              key={i}
              color={typeColorMap[badgeType]?.text || Colors.primary}
            >
              {word}
            </Highlight>
          ) : (
            <Text key={i}>{word}</Text>
          );
        })}
        {'"'}
      </Body>
    );
  };

  return (
    <TouchableOpacity
      onPress={flip}
      activeOpacity={1}
      style={[styles.expressionCardWrapper, style]}
    >
      {/* FRONT */}
      <Animated.View
        style={[
          styles.expressionCard,
          typeColorMap[badgeType]?.card || styles.expressionCardDefault,
          {
            opacity: frontOpacity,
            transform: [{ perspective: 1000 }, { rotateY: frontRotate }],
          },
        ]}
      >
        <View style={styles.cardTopRow}>
          <Badge type={badgeType} />
          {difficulty && (
            <Caption>{difficultyLabel[difficulty] || difficulty}</Caption>
          )}
        </View>

        <View style={styles.expressionSection}>
          <Heading level={1} style={styles.expressionText}>
            {expression}
          </Heading>
        </View>

        <View style={styles.expressionSection}>{renderExample()}</View>

        <View style={styles.cardFooter}>
          <Caption style={styles.tapHint}>Tap to see explanation →</Caption>

          {onBookmark && (
            <TouchableOpacity onPress={onBookmark}>
              <Caption style={{ fontSize: 20 }}>
                {isBookmarked ? "🔖" : "🤍"}
              </Caption>
            </TouchableOpacity>
          )}
        </View>
      </Animated.View>

      {/* BACK */}
      <Animated.View
        style={[
          styles.expressionCard,
          styles.expressionCardBack,
          {
            opacity: backOpacity,
            transform: [{ perspective: 1000 }, { rotateY: backRotate }],
          },
        ]}
      >
        <View style={styles.backContent}>
          <Label size="sm" color={Colors.primary} uppercase>
            Meaning
          </Label>

          <Body size="lg" style={styles.explanationText}>
            {explanation}
          </Body>

          {usageTip && (
            <View style={styles.usageTipBox}>
              <Caption style={styles.usageTipLabel}>💡 Usage tip</Caption>
              <Body size="sm" style={styles.usageTipText}>
                {usageTip}
              </Body>
            </View>
          )}

          <Caption style={styles.expressionBackLabel}>{expression}</Caption>
        </View>
      </Animated.View>
    </TouchableOpacity>
  );
};

// ─── Lesson Card ──────────────────────────────────────────────────────────

export const LessonCard: React.FC<LessonCardProps> = ({
  title,
  expressionCount,
  duration,
  isCompleted,
  isLocked,
  progress = 0,
  onPress,
  style,
}) => (
  <TouchableOpacity
    onPress={isLocked ? undefined : onPress}
    activeOpacity={0.85}
    style={[
      styles.lessonCard,
      isCompleted && styles.lessonCardCompleted,
      style,
    ]}
  >
    <View style={styles.lessonCardLeft}>
      <View style={styles.lessonIcon}>
        <Body>{isCompleted ? "✅" : isLocked ? "🔒" : "📖"}</Body>
      </View>

      <View style={styles.lessonMeta}>
        <Label>{title}</Label>
        <Caption>
          {expressionCount} expressions · {duration}
        </Caption>
      </View>
    </View>

    {!isLocked && (
      <View style={styles.lessonProgress}>
        <View
          style={[styles.lessonProgressFill, { width: `${progress * 100}%` }]}
        />
      </View>
    )}
  </TouchableOpacity>
);

// ─── Color Maps ───────────────────────────────────────────────────────────

const typeColorMap = {
  idiom: { card: { backgroundColor: Colors.idiomLight }, text: Colors.idiom },
  phrasalVerb: {
    card: { backgroundColor: Colors.phrasalVerbLight },
    text: Colors.phrasalVerb,
  },
  slang: { card: { backgroundColor: Colors.slangLight }, text: Colors.slang },
  collocation: {
    card: { backgroundColor: Colors.collocationLight },
    text: Colors.collocation,
  },
  expression: {
    card: { backgroundColor: Colors.expressionLight },
    text: Colors.expression,
  },
};

const difficultyLabel = {
  beginner: "🟢 Beginner",
  intermediate: "🟡 Intermediate",
  advanced: "🔴 Advanced",
};

// ─── Styles ───────────────────────────────────────────────────────────────

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.surface,
    borderRadius: Radius["2xl"],
    padding: Spacing[5],
    borderWidth: 1,
    borderColor: Colors.border,
  },
  cardTinted: {
    backgroundColor: Colors.surfaceAlt,
  },
  noPadding: {
    padding: 0,
  },

  expressionCardWrapper: {
    width: SCREEN_WIDTH - Spacing[8] * 2,
    minHeight: 280,
    maxHeight: 360,
    alignSelf: "center",
  },

  expressionCard: {
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: Radius["2xl"],
    padding: Spacing[6],
    backfaceVisibility: "hidden",
    borderWidth: 1.5,
    borderColor: Colors.border,
    ...Shadows.lg,
  },

  expressionCardDefault: {
    backgroundColor: Colors.surface,
  },

  expressionCardBack: {
    backgroundColor: Colors.primary,
  },

  cardTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: Spacing[4],
  },

  expressionSection: {
    flex: 1,
    justifyContent: "center",
  },

  expressionText: {
    fontSize: 28,
  },

  exampleText: {
    fontStyle: "italic",
    color: Colors.textSecondary,
  },

  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  tapHint: {
    fontSize: 11,
  },

  backContent: {
    flex: 1,
  },

  explanationText: {
    color: Colors.textInverse,
  },

  usageTipBox: {
    marginTop: Spacing[2],
    padding: Spacing[4],
  },

  usageTipLabel: {
    marginBottom: Spacing[1],
  },

  usageTipText: {},

  expressionBackLabel: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },

  lessonCard: {
    padding: Spacing[4],
    borderRadius: Radius.xl,
    backgroundColor: Colors.surface,
    marginBottom: Spacing[3],
  },

  lessonCardCompleted: {
    backgroundColor: Colors.successLight,
  },

  lessonCardLeft: {
    flexDirection: "row",
    alignItems: "center",
  },

  lessonIcon: {
    marginRight: Spacing[3],
  },

  lessonMeta: {
    flex: 1,
  },

  lessonProgress: {
    height: 3,
    backgroundColor: Colors.border,
  },

  lessonProgressFill: {
    height: "100%",
    backgroundColor: Colors.primary,
  },
});

export default Card;
