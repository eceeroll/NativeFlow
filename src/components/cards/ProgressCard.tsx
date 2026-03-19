import { View } from "react-native";
import { Text } from "../ui/Text";
import Button from "../ui/Button";
import { Colors } from "../theme/colors";
import { Radius } from "../theme/radius";
import { Spacing } from "../theme/spacing";
import { ProgressCardProps } from "@/src/types/interfaces";

export const ProgressCard: React.FC<ProgressCardProps> = ({
  progress,
  total,
  onStart,
}) => {
  return (
    <View
      style={{
        backgroundColor: Colors.primary,
        borderRadius: Radius.lg,
        padding: Spacing.xl,
      }}
    >
      <Text color="white">Todays Pack</Text>

      <Text
        variant="title"
        color="white"
        style={{ marginVertical: Spacing.md }}
      >
        {progress} / {total} learned
      </Text>

      <View
        style={{
          height: 6,
          backgroundColor: "rgba(255,255,255,0.45)",
          borderRadius: 10,
          marginBottom: Spacing.lg,
        }}
      />

      <Button
        variant="secondary"
        label="Start Learning"
        onPress={onStart}
        style={{ backgroundColor: "rgba(255,255,255,0.9)", borderWidth: 0 }}
        labelStyle={{ color: Colors.textPrimary }}
      />
    </View>
  );
};
