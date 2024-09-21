import type { Meta, StoryObj } from "@storybook/react";

import { Popover } from "./Popover";

const meta: Meta<typeof Popover> = {
  component: Popover,
};

export default meta;

type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  args: {
    content: "Popover Component",
    children: "Click Me!",
  },
};

export const OnHover: Story = {
  args: {
    content: "Popover Component",
    children: "Click Me!",
    trigger: "hover",
  },
};

export const CustomColours: Story = {
  args: {
    content: "Popover Component",
    children: "Click Me!",
    fromColor: "pink",
    toColor: "lightblue",
    textColor: "black",
  },
};
