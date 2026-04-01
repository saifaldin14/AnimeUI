import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";

const meta: Meta<typeof Badge> = {
  title: "DataDisplay/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "select", options: ["solid", "outline", "glow"] },
    size: { control: "select", options: ["sm", "md", "lg"] },
  },
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    children: "New",
  },
};

export const Outline: Story = {
  args: {
    children: "Outline",
    variant: "outline",
  },
};

export const Glow: Story = {
  args: {
    children: "Glowing ✨",
    variant: "glow",
    animated: true,
  },
};

export const WithDot: Story = {
  args: {
    children: "Live",
    dot: true,
    animated: true,
  },
};

export const Small: Story = {
  args: {
    children: "SM",
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    children: "Large Badge",
    size: "lg",
  },
};

export const CustomColors: Story = {
  args: {
    children: "Custom",
    fromColor: "#06b6d4",
    toColor: "#3b82f6",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
      <Badge variant="solid">Solid</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="glow" animated>Glow</Badge>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
    </div>
  ),
};
