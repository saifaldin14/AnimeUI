import type { Meta, StoryObj } from "@storybook/react";

import { Alert } from "./Alert";

const meta: Meta<typeof Alert> = {
  component: Alert,
};

export default meta;

type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  args: {
    message: "Hey this is a warning!",
    type: "warning",
  },
};

export const CustomColours: Story = {
  args: {
    message: "Hey, use custom colours",
    customColors: {
      text: "orange",
      background: "black",
      border: "yellow",
    },
  },
};
