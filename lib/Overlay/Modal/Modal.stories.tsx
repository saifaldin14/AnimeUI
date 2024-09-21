import type { Meta, StoryObj } from "@storybook/react";

import { Modal } from "./Modal";

const meta: Meta<typeof Modal> = {
  component: Modal,
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    isOpen: true,
    children: "Hey this is a Modal!",
    onClose: () => {},
  },
};

export const CustomColours: Story = {
  args: {
    isOpen: true,
    children: "Hey this is a alert dialog!",
    onClose: () => {},
    fromColor: "pink",
    toColor: "lightblue",
    textColor: "black",
  },
};
