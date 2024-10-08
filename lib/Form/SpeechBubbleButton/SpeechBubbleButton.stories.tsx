import type { Meta, StoryObj } from "@storybook/react";

import { SpeechBubbleButton } from "./SpeechBubbleButton";

const meta: Meta<typeof SpeechBubbleButton> = {
  component: SpeechBubbleButton,
};

export default meta;

type Story = StoryObj<typeof SpeechBubbleButton>;

export const Default: Story = {
  args: {
    text: "No Tail",
  },
};

export const Left: Story = {
  args: {
    text: "From the left",
    tailPosition: "left",
    tailColor: "#000",
  },
};

export const Right: Story = {
  args: {
    text: "From the right",
    tailPosition: "right",
  },
};
