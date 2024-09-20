import type { Meta, StoryObj } from "@storybook/react";

import { ProgressBar } from "./ProgressBar";

const meta: Meta<typeof ProgressBar> = {
  component: ProgressBar,
};

export default meta;

type Story = StoryObj<typeof ProgressBar>;

export const Default: Story = {
  args: {
    progress: 57,
  },
};

export const CustomColours: Story = {
  args: {
    progress: 57,
    fromColor: "red",
    toColor: "purple",
  },
};

export const CustomHeight: Story = {
  args: {
    progress: 57,
    fromColor: "blue",
    toColor: "green",
    height: 50,
  },
};
