import { View } from "react-native";
import { Text } from "../ui/Text";
import { Radius } from "../theme/radius";
import { Spacing } from "../theme/spacing";
import { TopicCardProps } from "@/src/types/interfaces";

export const TopicCard: React.FC<TopicCardProps> = ({ title }) => {
  return (
    <View
      style={{
        width: 110,
        height: 110,
        borderRadius: Radius.md,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
        margin: Spacing.sm,
      }}
    >
      <Text style={{ textAlign: "center" }}>{title}</Text>
    </View>
  );
};
