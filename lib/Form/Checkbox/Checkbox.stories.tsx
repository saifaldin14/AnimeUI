import type { Meta, StoryObj } from "@storybook/react";

import { Checkbox } from "./Checkbox";
import React, { useState } from "react";

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    label: "Checkbox!",
  },
  render: (args) => {
    const [checked, setChecked] = useState(false);

    return (
      <Checkbox
        {...args}
        checked
        onChange={() => {
          setChecked(!checked);
        }}
      />
    );
  },
};

export const CustomColours: Story = {
  args: {
    label: "Checkbox!",
    fromColor: "pink",
    toColor: "lightblue",
  },
  render: (args) => {
    const [checked, setChecked] = useState(false);

    return (
      <Checkbox
        {...args}
        checked
        onChange={() => {
          setChecked(!checked);
        }}
      />
    );
  },
};
