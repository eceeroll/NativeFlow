import { View, Pressable, Text } from "react-native";
import { Spacing } from "../theme/spacing";
import { AnswerActionsProps } from "@/src/types/interfaces";

export const AnswerActions: React.FC<AnswerActionsProps> = ({
  onCorrect,
  onWrong,
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: Spacing.xl,
      }}
    >
      <Pressable onPress={onWrong}>
        <Text>❌ Do not know</Text>
      </Pressable>

      <Pressable onPress={onCorrect}>
        <Text>✅ I know this</Text>
      </Pressable>
    </View>
  );
};
