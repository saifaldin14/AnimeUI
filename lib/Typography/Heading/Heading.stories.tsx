import type { Meta, StoryObj } from "@storybook/react";
import { Heading } from "./Heading";

const meta: Meta<typeof Heading> = {
  title: "Typography/Heading",
  component: Heading,
  tags: ["autodocs"],
  argTypes: {
    level: { control: "select", options: [1, 2, 3, 4, 5, 6] },
  },
};

export default meta;

type Story = StoryObj<typeof Heading>;

export const Default: Story = {
  args: {
    children: "Welcome to AnimeUI",
    level: 1,
    gradient: true,
  },
};

export const WithGlow: Story = {
  args: {
    children: "Glowing Heading",
    level: 2,
    gradient: true,
    glow: true,
  },
};

export const WithSparkle: Story = {
  args: {
    children: "Sparkling Title ✨",
    level: 1,
    gradient: true,
    sparkle: true,
  },
};

export const PlainText: Story = {
  args: {
    children: "No Gradient Heading",
    level: 3,
  },
};

export const CustomColors: Story = {
  args: {
    children: "Ocean Breeze",
    level: 2,
    gradient: true,
    fromColor: "#06b6d4",
    toColor: "#3b82f6",
  },
};

export const AllLevels: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Heading level={1} gradient>Heading 1</Heading>
      <Heading level={2} gradient>Heading 2</Heading>
      <Heading level={3} gradient>Heading 3</Heading>
      <Heading level={4} gradient>Heading 4</Heading>
      <Heading level={5} gradient>Heading 5</Heading>
      <Heading level={6} gradient>Heading 6</Heading>
    </div>
  ),
};
