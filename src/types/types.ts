import { typeConfig, statusConfig } from "../constants/badges";

// ─────────────────────────────────────────────────────────────
// BADGE TYPES
// ─────────────────────────────────────────────────────────────

export type BadgeProps = {
  type?: keyof typeof typeConfig; // "idiom" | "phrasalVerb" | "slang" | "collocation" | "expression"
  label?: string;
  size?: "sm" | "md";
  style?: any;
};

export type StatusBadgeProps = {
  status?: keyof typeof statusConfig; // "new" | "completed" | "locked" | "popular" | "daily"
  style?: any;
};

export type XPBadgeProps = {
  xp?: number;
  style?: any;
};

export type PillProps = {
  label?: string;
  active?: boolean;
  onPress?: () => void;
  style?: any;
};

export type Variant = "primary" | "secondary" | "ghost" | "danger" | "accent";
export type Size = "sm" | "md" | "lg";

export type ExpressionType =
  | "idiom"
  | "phrasalVerb"
  | "slang"
  | "collocation"
  | "expression";

export type Difficulty = "beginner" | "intermediate" | "advanced";

export type RNTextProps = {
  variant?: "title" | "subtitle" | "caption";
  color?: string;
  style?: any;
  children?: React.ReactNode;
  [key: string]: any;
};
