import React from "react";
import { Text as RNText } from "react-native";
import { Typography } from "../theme/typography";
import { Colors } from "../theme/colors";
import { RNTextProps } from "@/src/types/types";

export const Text: React.FC<RNTextProps> = ({
  variant = "subtitle",
  color = Colors.textPrimary,
  style,
  children,
  ...props
}) => {
  return (
    <RNText style={[Typography[variant], { color }, style]} {...props}>
      {children}
    </RNText>
  );
};
