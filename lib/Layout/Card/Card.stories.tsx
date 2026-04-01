import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";

const meta: Meta<typeof Card> = {
  component: Card,
  title: "Layout/Card",
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    title: "Anime Card",
    children:
      "This is a beautiful anime-styled card with gradient borders and floating decorations.",
  },
};

export const WithFooter: Story = {
  args: {
    title: "Card with Footer",
    children: "A card featuring header, body, and footer sections.",
    footer: "Last updated just now ✨",
  },
};

export const GlassVariant: Story = {
  args: {
    title: "Glass Card",
    children: "A frosted glass effect with backdrop blur and transparency.",
    variant: "glass",
  },
};

export const NeonVariant: Story = {
  args: {
    title: "Neon Card",
    children: "A vibrant neon glow card that pulses with energy.",
    variant: "neon",
  },
};

export const FlatVariant: Story = {
  args: {
    title: "Flat Card",
    children: "A minimal flat card with no extra shadows or glow effects.",
    variant: "flat",
  },
};

export const WithDecorations: Story = {
  args: {
    title: "Decorated Card ✨",
    children: "This card has floating stars and sparkles decorations.",
    decorations: true,
  },
};

export const CustomGradient: Story = {
  args: {
    title: "Custom Colors",
    children: "This card uses a custom cyan-to-blue gradient theme.",
    fromColor: "#06b6d4",
    toColor: "#3b82f6",
  },
};

export const NotHoverable: Story = {
  args: {
    title: "Static Card",
    children: "This card has no hover scale or shadow effects.",
    hoverable: false,
  },
};
