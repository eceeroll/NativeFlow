import { View } from "react-native";
import { Text } from "../ui/Text";
import Badge from "../ui/Badge";
import { Radius } from "../theme/radius";
import { Spacing } from "../theme/spacing";
import { ExpressionCardProps } from "@/src/types/interfaces";

export const ExpressionCard: React.FC<ExpressionCardProps> = ({
  expression,
  meaning,
  tag,
}) => {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        borderRadius: Radius.lg,
        padding: Spacing.xl,
      }}
    >
      <Badge label={tag} />

      <Text variant="title" style={{ marginTop: Spacing.md }}>
        {expression}
      </Text>

      <Text variant="subtitle" style={{ marginTop: Spacing.sm }}>
        {meaning}
      </Text>
    </View>
  );
};
