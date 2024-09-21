import type { Meta, StoryObj } from "@storybook/react";

import { Tabs } from "./Tabs";

const meta: Meta<typeof Tabs> = {
  component: Tabs,
};

export default meta;

type Story = StoryObj<typeof Tabs>;
const tabs = [
  {
    label: "One",
    content: "Tab One",
  },
  {
    label: "Two",
    content: "Tab Two",
  },
  {
    label: "Three",
    content: "Tab Three",
  },
  {
    label: "Four",
    content: "Tab Four",
  },
];

export const Default: Story = {
  args: {
    tabs,
    textColor: "black",
  },
};

export const CustomColours: Story = {
  args: {
    tabs,
    fromColor: "pink",
    toColor: "lightblue",
    textColor: "black",
    indicatorColor: "red",
  },
};
