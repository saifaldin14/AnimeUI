import type { Meta, StoryObj } from "@storybook/react";

import { Accordion } from "./Accordion";

const meta: Meta<typeof Accordion> = {
  component: Accordion,
};

export default meta;

type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  args: {
    items: [
      {
        title: "Item 1",
        content: "One",
      },
      {
        title: "Item 2",
        content: "Two",
      },
      {
        title: "Item 3",
        content: "Three",
      },
    ],
  },
};
