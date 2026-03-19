import { Colors } from "../components/theme";

export const typeConfig = {
  idiom: {
    label: "Idiom",
    emoji: "🎭",
    bg: Colors.idiomLight,
    text: Colors.idiom,
  },
  phrasalVerb: {
    label: "Phrasal Verb",
    emoji: "⚡",
    bg: Colors.phrasalVerbLight,
    text: Colors.phrasalVerb,
  },
  slang: {
    label: "Slang",
    emoji: "🔥",
    bg: Colors.slangLight,
    text: Colors.slang,
  },
  collocation: {
    label: "Collocation",
    emoji: "🔗",
    bg: Colors.collocationLight,
    text: Colors.collocation,
  },
  expression: {
    label: "Expression",
    emoji: "💬",
    bg: Colors.expressionLight,
    text: Colors.expression,
  },
} as const;

export const statusConfig = {
  new: {
    label: "New",
    emoji: "✨",
    bg: Colors.surfaceAlt,
    text: Colors.primary,
  },
  completed: {
    label: "Done",
    emoji: "✅",
    bg: Colors.successLight,
    text: Colors.success,
  },
  locked: {
    label: "Locked",
    emoji: "🔒",
    bg: Colors.border,
    text: Colors.textSecondary,
  },
  popular: { label: "Popular", emoji: "🌟", bg: "#FEF3C7", text: "#D97706" }, // gradient yoksa sabit
  daily: {
    label: "Daily",
    emoji: "📅",
    bg: Colors.phrasalVerbLight,
    text: Colors.phrasalVerb,
  },
} as const;
