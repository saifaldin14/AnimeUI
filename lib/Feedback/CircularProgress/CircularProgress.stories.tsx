import type { Meta, StoryObj } from "@storybook/react";

import { CircularProgress } from "./CircularProgress";

const meta: Meta<typeof CircularProgress> = {
  component: CircularProgress,
};

export default meta;

type Story = StoryObj<typeof CircularProgress>;

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
    size: 350,
  },
};
