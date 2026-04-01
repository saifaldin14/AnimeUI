import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "./Text";

const meta: Meta<typeof Text> = {
  title: "Typography/Text",
  component: Text,
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["xs", "sm", "md", "lg", "xl"] },
    weight: { control: "select", options: ["light", "normal", "medium", "bold"] },
    as: { control: "select", options: ["p", "span", "div"] },
  },
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    children: "The cherry blossoms bloom softly under a pastel sky.",
  },
};

export const Gradient: Story = {
  args: {
    children: "A magical gradient text that shimmers with anime energy.",
    gradient: true,
    weight: "medium",
  },
};

export const WithGlow: Story = {
  args: {
    children: "Glowing softly in the moonlight...",
    glow: true,
    color: "#ec4899",
    weight: "bold",
  },
};

export const GradientWithGlow: Story = {
  args: {
    children: "Ultimate anime text with gradient and glow!",
    gradient: true,
    glow: true,
    size: "lg",
    weight: "bold",
  },
};

export const CustomColor: Story = {
  args: {
    children: "Custom colored text for any theme.",
    color: "#06b6d4",
    weight: "medium",
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <Text size="xs">Extra Small — xs</Text>
      <Text size="sm">Small — sm</Text>
      <Text size="md">Medium — md (default)</Text>
      <Text size="lg">Large — lg</Text>
      <Text size="xl">Extra Large — xl</Text>
    </div>
  ),
};

export const AllWeights: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <Text weight="light">Light weight text</Text>
      <Text weight="normal">Normal weight text</Text>
      <Text weight="medium">Medium weight text</Text>
      <Text weight="bold">Bold weight text</Text>
    </div>
  ),
};

export const AsSpan: Story = {
  args: {
    children: "This renders as a <span> element.",
    as: "span",
    gradient: true,
  },
};
