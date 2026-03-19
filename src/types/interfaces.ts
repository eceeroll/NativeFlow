import type {
  GestureResponderEvent,
  ViewStyle,
  TextStyle,
  StyleProp,
} from "react-native";
import { Size, Variant } from "@/src/types/types";

export interface AnswerActionsProps {
  onCorrect: () => void;
  onWrong: () => void;
}

export interface ExpressionCardProps {
  expression: string;
  meaning: string;
  tag: string;
}

export interface PackCardProps {
  title: string;
  count: number;
  level: string;
  progress?: number; // 0-1 for progress bar
}

export interface ProgressCardProps {
  progress: number;
  total: number;
  onStart?: () => void;
}

export interface TopicCardProps {
  title: string;
}

export interface ButtonProps {
  variant?: Variant;
  size?: Size;
  label: string;
  icon?: React.ReactNode;
  iconRight?: React.ReactNode;
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  onPress?: (event: GestureResponderEvent) => void;
  style?: ViewStyle;
  labelStyle?: StyleProp<TextStyle>;
}

export interface ScreenProps {
  children: React.ReactNode;
  scrollable?: boolean;
  padded?: boolean;
  centered?: boolean;
  backgroundColor?: string;
  style?: ViewStyle;
  contentStyle?: ViewStyle;
}
