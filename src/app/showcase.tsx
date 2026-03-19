import { View, StyleSheet } from "react-native";
import { Stack } from "expo-router";
import {
  Screen,
  Section,
  Row,
  Spacer,
  Divider,
} from "../components/ui/Container";
import Button from "../components/ui/Button";
import Badge, { StatusBadge, XPBadge, Pill } from "../components/ui/Badge";
import { Card, ExpressionCard, LessonCard } from "../components/ui/Card";
import { PackCard } from "../components/cards/PackCard";
import { ProgressCard } from "../components/cards/ProgressCard";
import { TopicCard } from "../components/cards/TopicCard";
import { AnswerActions } from "../components/actions/AnswerActions";
import {
  Display,
  Heading,
  Body,
  Label,
  Caption,
  Highlight,
} from "../components/ui/Typography";
import { Colors } from "../components/theme/colors";

export default function Showcase() {
  return (
    <Screen scrollable backgroundColor={Colors.background}>
      <Stack.Screen options={{ title: "UI Showcase" }} />

      <Display>NativeFlow UI Showcase</Display>
      <Body style={styles.lead}>
        A quick design system showcase page with current components.
      </Body>

      <Section title="Typography">
        <Heading level={2}>Heading 2</Heading>
        <Body>
          Body text for details and copy.
          <Highlight>Highlighted phrase</Highlight>
        </Body>
        <Label uppercase>Label text</Label>
        <Caption>Caption text</Caption>
      </Section>

      <Section title="Buttons">
        <Row style={styles.wrap} gap={8}>
          <Button
            variant="primary"
            size="sm"
            label="Primary"
            onPress={() => {}}
          />
          <Button
            variant="secondary"
            size="md"
            label="Secondary"
            onPress={() => {}}
          />
          <Button variant="ghost" size="lg" label="Ghost" onPress={() => {}} />
          <Button
            variant="accent"
            size="md"
            label="Accent"
            onPress={() => {}}
          />
          <Button
            variant="danger"
            size="md"
            label="Danger"
            onPress={() => {}}
          />
        </Row>
        <Spacer size={8} />
        <Row style={styles.wrap} gap={8}>
          <Button variant="primary" size="md" label="Loading" loading />
          <Button variant="primary" size="md" label="Disabled" disabled />
          <Button variant="secondary" size="md" label="Full width" fullWidth />
        </Row>
      </Section>

      <Section title="Badges">
        <Row style={styles.wrap} gap={8}>
          <Badge type="idiom" />
          <Badge type="phrasalVerb" />
          <Badge type="slang" />
          <Badge type="collocation" />
          <Badge type="expression" />
        </Row>
        <Spacer size={12} />
        <Row style={styles.wrap} gap={8}>
          <StatusBadge status="new" />
          <StatusBadge status="completed" />
          <StatusBadge status="locked" />
          <StatusBadge status="popular" />
          <StatusBadge status="daily" />
        </Row>
        <Spacer size={12} />
        <Row style={styles.wrap} gap={8}>
          <XPBadge xp={10} />
          <Pill label="Tag" />
          <Pill label="Active" active />
        </Row>
      </Section>

      <Section title="Cards">
        <View style={styles.previewCard}>
          <Card elevated>
            <Heading level={3}>Base Card</Heading>
            <Body>
              Use this card for standard content blocks and card layouts.
            </Body>
          </Card>
        </View>

        <View style={styles.previewCard}>
          <ExpressionCard
            expression="break the ice"
            type="idiom"
            exampleSentence="He used a joke to break the ice at the meeting."
            highlightWords={["break", "ice"]}
            explanation="To do or say something to relieve tension."
            usageTip="Use when starting conversations in group settings."
            difficulty="beginner"
          />
        </View>

        <View style={styles.previewCard}>
          <LessonCard
            title="Lesson 1: Greetings"
            expressionCount={12}
            duration="5 min"
            progress={0.4}
            onPress={() => {}}
          />
        </View>
      </Section>

      <Section title="All Cards + Answer Actions">
        <View style={styles.previewCard}>
          <PackCard title="Everyday English" count={12} level="Beginner" />
        </View>

        <View style={styles.previewCard}>
          <ProgressCard progress={3} total={10} onStart={() => {}} />
        </View>

        <View style={styles.previewCard}>
          <TopicCard title="Travel" />
        </View>

        <View style={styles.previewCard}>
          <AnswerActions
            onCorrect={() => {
              console.log("Correct tapped");
            }}
            onWrong={() => {
              console.log("Wrong tapped");
            }}
          />
        </View>
      </Section>

      <Divider style={{ marginVertical: 16 }} />
      <Caption style={{ textAlign: "center" }}>
        Showcase built from current components.
      </Caption>
    </Screen>
  );
}

const styles = StyleSheet.create({
  lead: {
    marginBottom: 12,
  },
  wrap: {
    flexWrap: "wrap",
    flexDirection: "row",
  },
  previewCard: {
    marginVertical: 8,
  },
});
