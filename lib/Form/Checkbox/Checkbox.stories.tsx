// Checkbox.stories.tsx
import React, { useState } from "react";
import { Checkbox } from "./Checkbox";

export default {
  component: Checkbox,
};

export const Default = () => {
  const [checked, setChecked] = useState(false);
  return (
    <Checkbox
      checked={checked}
      onChange={setChecked}
      label="Default Checkbox"
    />
  );
};

export const DisabledChecked = () => (
  <Checkbox
    checked={true}
    onChange={() => {}}
    disabled={true}
    label="Disabled Checked Checkbox"
  />
);

export const CustomColors = () => {
  const [checked, setChecked] = useState(false);
  return (
    <Checkbox
      checked={checked}
      onChange={setChecked}
      label="Custom Colors"
      fromColor="#00F260"
      toColor="#0575E6"
    />
  );
};

export const CustomSize = () => {
  const [checked, setChecked] = useState(false);
  return (
    <Checkbox
      checked={checked}
      onChange={setChecked}
      label="Large Checkbox"
      size={40}
    />
  );
};
