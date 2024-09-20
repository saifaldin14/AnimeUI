import type { Meta, StoryObj } from "@storybook/react";

import { Menu } from "./Menu";

const meta: Meta<typeof Menu> = {
  component: Menu,
};

export default meta;

type Story = StoryObj<typeof Menu>;
const items = [
  {
    label: "Item 1",
    onClick: () => {},
  },
  {
    label: "Item 2",
    onClick: () => {},
  },
  {
    label: "Item 3",
    onClick: () => {},
  },
  {
    label: "Item 4",
    onClick: () => {},
  },
];

export const Default: Story = {
  args: {
    items,
  },
};

export const CustomColours: Story = {
  args: {
    items,
    fromColor: "red",
    toColor: "lightblue",
    textColor: "black",
  },
};
