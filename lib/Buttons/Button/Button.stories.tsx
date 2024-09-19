import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    text: "Click me!",
  },
};

export const Emoji: Story = {
  args: {
    text: "😅",
  },
};

export const DifferentGradient: Story = {
  args: {
    text: "Hellooooo",
    fromColor: "#00F260",
    toColor: "#0575E6",
  },
};
