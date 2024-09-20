import type { Meta, StoryObj } from "@storybook/react";

import { Drawer } from "./Drawer";

const meta: Meta<typeof Drawer> = {
  component: Drawer,
};

export default meta;

type Story = StoryObj<typeof Drawer>;

export const Default: Story = {
  args: {
    isOpen: true,
    children: "Hey this is a alert dialog!",
    onClose: () => {},
  },
};

export const CustomColours: Story = {
  args: {
    isOpen: true,
    children: "Hey this is a alert dialog!",
    onClose: () => {},
    fromColor: "red",
    toColor: "lightblue",
    elementColor: "black",
    textColor: "black",
  },
};
