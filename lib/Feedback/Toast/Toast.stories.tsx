import type { Meta, StoryObj } from "@storybook/react";

import { Toast } from "./Toast";

const meta: Meta<typeof Toast> = {
  component: Toast,
};

export default meta;

type Story = StoryObj<typeof Toast>;

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
      icon: "yellow",
    },
  },
};
