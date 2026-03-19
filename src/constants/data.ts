// ─── Goal options (Easy / Medium / Hard) ─────────────────────

export const GOALS = [
  {
    value: 5,
    label: "Easy",
    description: "5 expressions/day",
    hint: "Perfect for busy days",
    iconBg: ["#34D399", "#10B981"] as [string, string],
    selectedBorder: "#10B981",
    selectedBg: "#F0FDF4",
    icon: "target",
  },
  {
    value: 10,
    label: "Medium",
    description: "10 expressions/day",
    hint: "Balanced learning pace",
    iconBg: ["#60A5FA", "#3B82F6"] as [string, string],
    selectedBorder: "#5B4FE9",
    selectedBg: "#EEF0FF",
    icon: "bolt",
  },
  {
    value: 20,
    label: "Hard",
    description: "20 expressions/day",
    hint: "Challenge yourself",
    iconBg: ["#FB923C", "#EF4444"] as [string, string],
    selectedBorder: "#EF4444",
    selectedBg: "#FFF7ED",
    icon: "flame",
  },
];

// --- Expressions

export const EXPRESSIONS = [
  {
    type: "Expression",
    typeColor: "#5B4FE9",
    typeBg: "#EEF0FF",
    emoji: "🎯",
    phrase: "Break the ice",
    meaning: "Start a conversation in a friendly way",
  },
  {
    type: "Idiom",
    typeColor: "#7C3AED",
    typeBg: "#EDE9FE",
    emoji: "🌊",
    phrase: "Go with the flow",
    meaning: "Accept things as they happen naturally",
  },
  {
    type: "Slang",
    typeColor: "#FF6B4A",
    typeBg: "#FFF0ED",
    emoji: "🔥",
    phrase: "That's lit",
    meaning: "Something exciting or excellent",
  },
];

// ─── Level options (Beginner / Intermediate / Advanced) ─────────────────────

export const LEVELS = [
  {
    id: "beginner",
    title: "Beginner",
    subtitle: "Learning basics & simple phrases",
    icon: "🌱",
  },
  {
    id: "intermediate",
    title: "Intermediate",
    subtitle: "Can hold conversations, want to sound natural",
    icon: "⚡",
  },
  {
    id: "advanced",
    title: "Advanced",
    subtitle: "Fluent, polishing idioms & nuance",
    icon: "🎯",
  },
];
