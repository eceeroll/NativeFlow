import React, { useRef } from "react";
import {
  TouchableOpacity,
  Animated,
  View,
  ActivityIndicator,
  StyleSheet,
  GestureResponderEvent,
  ViewStyle,
} from "react-native";
import { Label } from "./Typography";
import { Colors } from "../theme/colors";
import { Radius } from "../theme/radius";
import { Spacing } from "../theme/spacing";
import { Shadows } from "../theme/shadows";
import { Size, Variant } from "@/src/types/types";
import { ButtonProps } from "@/src/types/interfaces";

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  label,
  icon,
  iconRight,
  loading = false,
  disabled = false,
  fullWidth = false,
  onPress,
  style,
  labelStyle,
}) => {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const isDisabled = disabled || loading;

  const handlePressIn = () => {
    if (isDisabled) return;
    Animated.spring(scaleAnim, {
      toValue: 0.96,
      useNativeDriver: true,
      damping: 15,
      stiffness: 300,
    }).start();
  };

  const handlePressOut = () => {
    if (isDisabled) return;
    Animated.spring(scaleAnim, {
      toValue: 1,
      useNativeDriver: true,
      damping: 10,
      stiffness: 200,
    }).start();
  };

  const variantStyle = variantStyles[variant];
  const sizeStyle = sizeStyles[size];

  return (
    <Animated.View
      style={[
        fullWidth && styles.fullWidth,
        { transform: [{ scale: scaleAnim }] },
      ]}
    >
      <TouchableOpacity
        onPress={onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        disabled={isDisabled}
        activeOpacity={1}
        style={[
          styles.base,
          variantStyle.container,
          sizeStyle.container,
          fullWidth && styles.fullWidth,
          isDisabled && styles.disabled,
          style,
        ]}
      >
        {/* Bottom shadow (Duolingo vibe) */}
        {variant === "primary" && !isDisabled && (
          <View style={styles.bottomShadowPrimary} />
        )}
        {variant === "accent" && !isDisabled && (
          <View style={styles.bottomShadowAccent} />
        )}

        {/* Content */}
        <View style={styles.content}>
          {loading ? (
            <ActivityIndicator size="small" color={variantStyle.spinnerColor} />
          ) : (
            <>
              {icon && <View style={styles.iconLeft}>{icon}</View>}

              <Label
                uppercase={false}
                size={size === "sm" ? "sm" : size === "lg" ? "lg" : "md"}
                color={
                  isDisabled ? Colors.textTertiary : variantStyle.labelColor
                }
                style={[styles.label, labelStyle]}
              >
                {label}
              </Label>

              {iconRight && <View style={styles.iconRight}>{iconRight}</View>}
            </>
          )}
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};

// ─── Icon Button ─────────────────────────────────────────────────────────

interface IconButtonProps {
  icon: React.ReactNode;
  variant?: "ghost" | "filled" | "tinted";
  size?: Size;
  onPress?: (event: GestureResponderEvent) => void;
  style?: ViewStyle;
}

export const IconButton: React.FC<IconButtonProps> = ({
  icon,
  variant = "ghost",
  size = "md",
  onPress,
  style,
}) => {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  return (
    <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
      <TouchableOpacity
        onPress={onPress}
        onPressIn={() =>
          Animated.spring(scaleAnim, {
            toValue: 0.9,
            useNativeDriver: true,
          }).start()
        }
        onPressOut={() =>
          Animated.spring(scaleAnim, {
            toValue: 1,
            useNativeDriver: true,
          }).start()
        }
        activeOpacity={1}
        style={[
          styles.iconButtonBase,
          iconButtonSizes[size],
          variant === "filled" && styles.iconButtonFilled,
          variant === "tinted" && styles.iconButtonTinted,
          style,
        ]}
      >
        {icon}
      </TouchableOpacity>
    </Animated.View>
  );
};

// ─── Variant styles ──────────────────────────────────────────────────────

const variantStyles: Record<
  Variant,
  {
    container: ViewStyle;
    labelColor: string;
    spinnerColor: string;
  }
> = {
  primary: {
    container: {
      backgroundColor: Colors.primary,
      borderBottomWidth: 4,
      borderBottomColor: Colors.primaryDark,
      ...Shadows.primary,
    },
    labelColor: Colors.textInverse,
    spinnerColor: Colors.textInverse,
  },
  secondary: {
    container: {
      backgroundColor: Colors.surface,
      borderWidth: 2,
      borderColor: Colors.border,
      ...Shadows.sm,
    },
    labelColor: Colors.textPrimary,
    spinnerColor: Colors.primary,
  },
  ghost: {
    container: {
      backgroundColor: "transparent",
    },
    labelColor: Colors.primary,
    spinnerColor: Colors.primary,
  },
  danger: {
    container: {
      backgroundColor: Colors.error,
      borderBottomWidth: 4,
      borderBottomColor: "#B91C1C",
    },
    labelColor: Colors.textInverse,
    spinnerColor: Colors.textInverse,
  },
  accent: {
    container: {
      backgroundColor: Colors.accent,
      borderBottomWidth: 4,
      borderBottomColor: "#C94C2A",
      ...Shadows.accent,
    },
    labelColor: Colors.textInverse,
    spinnerColor: Colors.textInverse,
  },
};

// ─── Size styles ─────────────────────────────────────────────────────────

const sizeStyles: Record<Size, { container: ViewStyle }> = {
  sm: {
    container: {
      paddingHorizontal: Spacing[4],
      paddingVertical: Spacing[2],
      borderRadius: Radius.md,
      minHeight: 36,
    },
  },
  md: {
    container: {
      paddingHorizontal: Spacing[6],
      paddingVertical: Spacing[3] + 2,
      borderRadius: Radius.lg,
      minHeight: 52,
    },
  },
  lg: {
    container: {
      paddingHorizontal: Spacing[8],
      paddingVertical: Spacing[4],
      borderRadius: Radius.xl,
      minHeight: 60,
    },
  },
};

const iconButtonSizes: Record<Size, ViewStyle> = {
  sm: { width: 32, height: 32, borderRadius: Radius.md },
  md: { width: 44, height: 44, borderRadius: Radius.lg },
  lg: { width: 56, height: 56, borderRadius: Radius.xl },
};

// ─── Styles ──────────────────────────────────────────────────────────────

const styles = StyleSheet.create({
  base: {
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    position: "relative",
  },
  fullWidth: {
    width: "100%",
    alignSelf: "stretch",
  },
  disabled: {
    backgroundColor: Colors.surfaceAlt,
    borderBottomWidth: 0,
    shadowOpacity: 0,
    elevation: 0,
    opacity: 0.6,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    fontFamily: "Nunito-Bold",
  },
  iconLeft: {
    marginRight: Spacing[2],
  },
  iconRight: {
    marginLeft: Spacing[2],
  },
  bottomShadowPrimary: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 4,
    backgroundColor: Colors.primaryDark,
    borderBottomLeftRadius: Radius.lg,
    borderBottomRightRadius: Radius.lg,
  },
  bottomShadowAccent: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 4,
    backgroundColor: "#C94C2A",
  },
  iconButtonBase: {
    alignItems: "center",
    justifyContent: "center",
  },
  iconButtonFilled: {
    backgroundColor: Colors.primary,
  },
  iconButtonTinted: {
    backgroundColor: Colors.primaryLight,
  },
});

export default Button;
