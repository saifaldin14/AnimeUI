import type { Meta, StoryObj } from "@storybook/react";

import { AlertDialog } from "./AlertDialog";

const meta: Meta<typeof AlertDialog> = {
  component: AlertDialog,
};

export default meta;

type Story = StoryObj<typeof AlertDialog>;

export const Default: Story = {
  args: {
    title: "STOP!!",
    message: "Hey this is a alert dialog!",
    onConfirm: () => {},
    onCancel: () => {},
    show: true,
  },
};
