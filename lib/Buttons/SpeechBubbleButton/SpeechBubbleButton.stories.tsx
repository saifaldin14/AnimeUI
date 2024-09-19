import type { Meta, StoryObj } from "@storybook/react";

import { SpeechBubbleButton } from "./SpeechBubbleButton";

const meta: Meta<typeof SpeechBubbleButton> = {
  component: SpeechBubbleButton,
};

export default meta;

type Story = StoryObj<typeof SpeechBubbleButton>;

export const Default: Story = {
  args: {
    text: "Click me!",
  },
};

export const Left: Story = {
  args: {
    text: "From the left",
    tailPosition: "left",
  },
};

export const Right: Story = {
  args: {
    text: "From the right",
    tailPosition: "right",
  },
};
